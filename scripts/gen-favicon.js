const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const sizes = [16,32,48,64];
const srcPath = path.join(__dirname, '..', 'public', 'images', 'gicall_favicon.png');
const outPath = path.join(__dirname, '..', 'public', 'favicon.ico');

function pngToBMP(png) {
  const width = png.width;
  const height = png.height;
  const rowSize = ((32 * width + 31) >> 5) << 2;
  const bmpSize = rowSize * height;
  const headerSize = 40;
  const fileHeaderSize = 14;
  const data = Buffer.alloc(fileHeaderSize + headerSize + bmpSize);
  // BMP header
  data.writeUInt16LE(0x4D42, 0);
  data.writeUInt32LE(data.length, 2);
  data.writeUInt32LE(0, 6);
  data.writeUInt32LE(fileHeaderSize + headerSize, 10);
  // DIB header (BITMAPINFOHEADER)
  data.writeUInt32LE(headerSize, 14);
  data.writeInt32LE(width, 18);
  data.writeInt32LE(height * 2, 22); // top-down AND/XOR mask
  data.writeUInt16LE(1, 26);
  data.writeUInt16LE(32, 28);
  data.writeUInt32LE(0, 30);
  data.writeUInt32LE(bmpSize, 34);
  data.writeInt32LE(0, 38);
  data.writeInt32LE(0, 42);
  data.writeUInt32LE(0, 46);
  data.writeUInt32LE(0, 50);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pngIdx = (png.width * (png.height - y - 1) + x) << 2;
      const bmpIdx = fileHeaderSize + headerSize + y * rowSize + x * 4;
      data[bmpIdx] = png.data[pngIdx + 2];
      data[bmpIdx + 1] = png.data[pngIdx + 1];
      data[bmpIdx + 2] = png.data[pngIdx];
      data[bmpIdx + 3] = png.data[pngIdx + 3];
    }
  }
  return data;
}

function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const buffers = [];
  let offset = 6 + 16 * images.length;

  for (const img of images) {
    const bmp = pngToBMP(img);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(bmp.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    buffers.push(bmp);
    offset += bmp.length;
  }

  return Buffer.concat([header, ...entries, ...buffers]);
}

function resizePng(buf, size) {
  return new Promise((resolve, reject) => {
    new PNG().parse(buf, (err, png) => {
      if (err) return reject(err);
      const out = new PNG({ width: size, height: size });
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const sx = Math.floor((x / size) * png.width);
          const sy = Math.floor((y / size) * png.height);
          const si = (png.width * sy + sx) << 2;
          const di = (size * y + x) << 2;
          out.data[di] = png.data[si];
          out.data[di + 1] = png.data[si + 1];
          out.data[di + 2] = png.data[si + 2];
          out.data[di + 3] = png.data[si + 3];
        }
      }
      resolve(out);
    });
  });
}

async function main() {
  const srcBuf = fs.readFileSync(srcPath);
  const resized = await Promise.all(sizes.map((s) => resizePng(srcBuf, s)));
  const ico = buildIco(resized);
  fs.writeFileSync(outPath, ico);
  console.log('favicon.ico generated');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
