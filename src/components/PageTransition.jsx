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
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
