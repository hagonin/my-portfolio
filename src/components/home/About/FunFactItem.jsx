import CountUp from "react-countup";
import { useEffect } from "react";
import useInView from "@/hooks/use-in-view";

// Starts the count-up animation once the counter element scrolls into view.
const Counter = ({ countUpRef, start }) => {
  const [viewRef, inView] = useInView({ once: true });

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  // Attach both react-countup's ref and the IntersectionObserver ref to the element.
  const setRefs = (node) => {
    countUpRef.current = node;
    viewRef.current = node;
  };

  return <h5 className="counter" ref={setRefs} />;
};

const FunFactItem = ({ Svg, startCount, endCount, title }) => (
  <div className="column">
    <div className="funfacts-item h-100">
      <div className="icon">{Svg}</div>
      <CountUp start={startCount} end={endCount} duration={5} redraw={true}>
        {({ countUpRef, start }) => (
          <Counter countUpRef={countUpRef} start={start} />
        )}
      </CountUp>
      <p>{title}</p>
    </div>
  </div>
);

export default FunFactItem;
