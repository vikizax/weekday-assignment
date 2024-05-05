import { useEffect, useRef, useState } from "react";

export const useIntersactionObserver = (threshold: number = 1) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ele = elementRef.current;
        if (!ele) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting)
                setIsVisible(true);
            else setIsVisible(false)
        }, { threshold });
        observer.observe(ele);

        return () => {
            observer.unobserve(ele);
        };
    }, []);

    return { isVisible, elementRef }
}