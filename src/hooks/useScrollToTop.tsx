import { useCallback } from "react";

/**
 * Custom hook to scroll to the top of the page.
 */
const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return scrollToTop;
};

export default useScrollToTop;
