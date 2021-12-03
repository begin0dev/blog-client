import { useEffect, useRef } from 'react';

function useLazyImageObserver(options?: IntersectionObserverInit) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const intersectionOptions = useRef<IntersectionObserverInit | undefined>(options);

  useEffect(() => {
    if (!imageRef.current) return;
    const io = new IntersectionObserver(([entry], observe) => {
      if (!entry.isIntersecting) return;
      const target = entry.target as HTMLImageElement;
      target.src = target.dataset.src as string;
      observe.unobserve(target);
      observe.disconnect();
    }, intersectionOptions.current);
    io.observe(imageRef.current);
  }, []);
}

export default useLazyImageObserver;
