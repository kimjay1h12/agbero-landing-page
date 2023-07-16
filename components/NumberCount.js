import React, { useState, useEffect, useRef } from "react";

const NumberCount = ({ startNumber, endNumber, duration, millon, plus }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startCounting();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as desired
      }
    );

    if (countRef?.current) {
      observer?.observe(countRef?.current);
    }

    return () => {
      if (countRef?.current) {
        observer?.unobserve(countRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const increment = Math.ceil((endNumber - startNumber) / duration);
    let count = startNumber;

    const interval = setInterval(() => {
      if (count < endNumber) {
        count += increment;
        setCurrentNumber(count);
      } else {
        setCurrentNumber(endNumber);
        clearInterval(interval);
      }
    }, 10); // Adjust the animation speed as desired (in milliseconds)
  };

  return (
    <div ref={countRef} className="number-count-animation">
      <h2 style={{ color: "#8F32AB", display: "flex", alignItems: "center" }}>
        {currentNumber}
        {millon && <div>M</div>}
        {plus && <div>+</div>}
      </h2>
    </div>
  );
};

export default NumberCount;
