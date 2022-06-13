import * as S from "./index.style";

interface StyleCharProps {
  char: string;
  delay: number;
  duration: number;
  active: boolean;
}

const StyleChar = ({ char, delay, duration, active }: StyleCharProps) => {
  return (
    <S.StyleChar delay={delay} duration={duration} active={active}>
      {char}
    </S.StyleChar>
  );
};

export default StyleChar;
