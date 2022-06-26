import useTransition from "hooks/useTransition";
import * as S from "./index.style";

const PageTransition = () => {
  const { transition } = useTransition();

  return (
    <>
      <S.Transition skew={5} color="skyblue" delay={100} active={transition} />
      <S.Transition skew={-5} color="red" delay={200} active={transition} />
    </>
  );
};

export default PageTransition;
