import { useRef } from "react";


export const useHorizontalScroll = <T extends HTMLElement>() => {
  const listRef = useRef<T>(null)

  const getScrollAmount = () => {
    const list = listRef.current;
    const firstItem = list?.firstElementChild as HTMLElement || null;

    if (!list || !firstItem) return 300;

    const gap = parseFloat(
      getComputedStyle(list).columnGap || getComputedStyle(list).gap || '0'
    );

    return firstItem.clientWidth + gap;
  };

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  };

  return { listRef, scrollLeft, scrollRight }
}