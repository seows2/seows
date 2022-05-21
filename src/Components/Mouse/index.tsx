import { DayTime } from "@/App";
import { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import * as S from "./Mouse.style";

type MouseProps = {
  dayTime: DayTime;
};

export type MousePos = { x: number; y: number; opacity: number };

const fastPointer = { tension: 1200, friction: 40 };
const slowPointer = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Mouse = ({ dayTime }: MouseProps) => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    from: { opacity: 0, xy: [0, 0] },
    config: i === 0 ? fastPointer : slowPointer,
  }));

  const handleMouseMove = (e: MouseEvent) => {
    if (
      e.clientX < 10 ||
      e.clientX > window.innerWidth - 10 ||
      e.clientY < 10 ||
      e.clientY > window.innerHeight - 10
    ) {
      handleMouseOut();
    } else {
      api.start({ xy: [e.clientX - 5, e.clientY - 5], opacity: 1 });
    }
  };

  const handleMouseOut = () => {
    api.set({ opacity: 0 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <S.MouseWrapper>
      {trail.map((props, idx) => (
        <animated.div
          key={idx}
          className={dayTime}
          style={{ transform: props.xy.to(trans), opacity: props.opacity }}
        />
      ))}
    </S.MouseWrapper>
  );
};

export default Mouse;
