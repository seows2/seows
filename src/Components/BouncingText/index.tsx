import { useMemo, useState } from "react";
import StyleChar from "./StyleChar";

interface BouncingTextProps {
  text: string;
  className: string;
  delay: number;
  duration: number;
  clickable?: boolean;
  hoverable?: boolean;
}

const BouncingText = (props: BouncingTextProps) => {
  const { text, className, delay, duration, clickable, hoverable } = props;
  const [active, setActive] = useState(false);

  const activeUntilLastDuration = () => {
    setActive(true);
    setTimeout(() => setActive(false), text.length * delay + duration);
  };

  const onClick = () => {
    if (active || !clickable) return;
    activeUntilLastDuration();
  };

  const onHover = () => {
    if (active || !hoverable) return;
    activeUntilLastDuration();
  };

  const chars = useMemo(
    () =>
      text
        .split("")
        .map((char, i) => (
          <StyleChar
            key={i}
            char={char}
            delay={delay * i}
            duration={duration}
            active={active}
          />
        )),
    [active, delay, duration, text]
  );

  return (
    <div className={className} onClick={onClick} onMouseOver={onHover}>
      {chars}
    </div>
  );
};

export default BouncingText;
