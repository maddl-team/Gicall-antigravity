import { motion } from "framer-motion";
import { useEffect } from "react";

const transition = {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1], // curva tipo Apple
};

const variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition,
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export function PageTransition({ children }) {
    // Scroll to top when the new page mounts (after the previous one has exited)
    useEffect(() => {
        // Multiple methods to ensure scroll to top works
        const scrollToTop = () => {
            // Method 1: Try Lenis first if available
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true, force: true });
            }

            // Method 2: Native scroll as fallback
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });

            // Method 3: Direct manipulation as last resort
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Execute immediately
        scrollToTop();

        // Also execute after animation completes (400ms from transition duration)
        const timeoutId = setTimeout(scrollToTop, 50);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
