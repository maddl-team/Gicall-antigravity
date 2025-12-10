"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const MainWrapper = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className={`min-h-screen ${isHomePage ? '' : 'pt-[80px]'}`}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </main>
  );
};

export default MainWrapper;
