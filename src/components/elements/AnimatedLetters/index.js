import { useEffect, useMemo, useState } from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [shouldAnimateIn] = useState(letterClass === 'text-animate');
  const [resolvedClass, setResolvedClass] = useState(
    shouldAnimateIn ? 'text-animate' : 'text-animate-hover'
  );
  const animationWindowMs = useMemo(() => {
    const lastLetterDelay = (idx + strArray.length - 1) * 100;

    return lastLetterDelay + 1000;
  }, [idx, strArray.length]);

  useEffect(() => {
    if (!shouldAnimateIn) {
      setResolvedClass('text-animate-hover');
      return undefined;
    }

    setResolvedClass('text-animate');

    const timeoutId = window.setTimeout(() => {
      setResolvedClass('text-animate-hover');
    }, animationWindowMs);

    return () => window.clearTimeout(timeoutId);
  }, [animationWindowMs, shouldAnimateIn]);

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={resolvedClass}
          style={
            resolvedClass === 'text-animate'
              ? { '--letter-delay': `${(idx + i) / 10}s` }
              : undefined
          }
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
