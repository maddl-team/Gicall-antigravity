import { useEffect, useRef } from 'react';

const TrustIndexWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Prevent duplicate injection
        if (containerRef.current.querySelector('script[src*="trustindex.io"]')) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const script = document.createElement('script');
                script.src = "https://cdn.trustindex.io/loader.js?31bc0ff60f5c469c34469e13274";
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

export default TrustIndexWidget;
