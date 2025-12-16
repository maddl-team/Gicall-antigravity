import { useEffect, useRef } from 'react';

const SocialFeedWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Prevent duplicate injection
        if (containerRef.current.querySelector('script[src*="trustindex.io"]')) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const script = document.createElement('script');
                script.src = "https://cdn.trustindex.io/loader-feed.js?4c0a76e60fa647067d067d0a3f7";
                script.async = true;
                script.defer = true;

                // Append to the container so the widget knows where to render
                if (containerRef.current) {
                    containerRef.current.appendChild(script);
                }

                observer.disconnect();
            }
        }, { rootMargin: "200px" });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full min-h-[400px]">
        </div>
    );
};

export default SocialFeedWidget;
