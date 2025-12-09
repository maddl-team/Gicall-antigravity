"use client";
import { usePathname } from 'next/navigation';

const MainWrapper = ({ children }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <main className={`min-h-screen ${isHomePage ? '' : 'pt-[80px]'}`}>
            {children}
        </main>
    );
};

export default MainWrapper;
