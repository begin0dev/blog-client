import { useEffect, useRef } from 'react';

function useLazyImageObserver(options?: IntersectionObserverInit) {
  const imageRef = useRef<HTMLImageElement>();
  const intersectionOptions = useRef<IntersectionObserverInit | undefined>(options);

  useEffect(() => {
    if (!imageRef.current) return;

    const io = new IntersectionObserver(([entry], observe) => {
      if (!entry.isIntersecting) return;
      const target = entry.target as HTMLImageElement;
      const datasetSrc = target.dataset.src;
      if (datasetSrc) target.src = datasetSrc;
      observe.unobserve(target);
      observe.disconnect();
    }, intersectionOptions.current);

    io.observe(imageRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

  return { imageRef };
}

export default useLazyImageObserver;
