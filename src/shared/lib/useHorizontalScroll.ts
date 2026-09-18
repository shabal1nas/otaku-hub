import { useEffect, useState, useRef } from "react";


export const useHorizontalScroll = <T extends HTMLElement>(
  itemCount: number,
  // itemCount нужен потому,что сначала items пустой, а после ответа AniList появляются карточки.
  // Хук должен повторно измерить список.
) => {
  const listRef = useRef<T>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  const getScrollAmount = () => {
    const list = listRef.current;
    const firstItem = list?.firstElementChild as HTMLElement || null;

    if (!list || !firstItem) return 300;

    const gap = parseFloat(
      getComputedStyle(list).columnGap || getComputedStyle(list).gap || '0'
    );

    return firstItem.clientWidth + gap;
  };

  useEffect(() => {
    const list = listRef.current;

    if (!list) return;

    const updateScrollState = () => {
      const maxScrollLeft = list.scrollWidth - list.clientWidth;
      setCanScrollLeft(list.scrollLeft > 1);
      setCanScrollRight(list.scrollLeft < maxScrollLeft - 1);
    };

    const frameId = requestAnimationFrame(updateScrollState);

    list.addEventListener('scroll', updateScrollState, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(list);

    return () => {
      cancelAnimationFrame(frameId);
      list.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [itemCount]);

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  };

  return { listRef, scrollLeft, scrollRight, canScrollLeft, canScrollRight }
}