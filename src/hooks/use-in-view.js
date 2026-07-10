import { useState, useEffect, useRef } from "react";

/**
 * Tracks whether the referenced element has scrolled into the viewport.
 * Native IntersectionObserver replacement for react-visibility-sensor
 * (which relied on findDOMNode, removed in React 19).
 *
 * @param {Object} [options]
 * @param {boolean} [options.once=true] - Stop observing after the first time the element enters view.
 * @param {number} [options.threshold=0] - Visibility ratio (0-1) required to count as "in view".
 * @returns {[import("react").RefObject<HTMLElement>, boolean]} Ref to attach to the target element, and its in-view state.
 */
const useInView = ({ once = true, threshold = 0 } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return [ref, inView];
};

export default useInView;
