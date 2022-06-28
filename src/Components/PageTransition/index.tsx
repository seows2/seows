import useTransition from "hooks/useTransition";
import * as S from "./index.style";

const PageTransition = () => {
  const { transition } = useTransition();

  return (
    <>
      <S.Transition color="skyblue" delay={100} active={transition} />
      <S.Transition color="red" delay={200} active={transition} />
    </>
  );
};

export default PageTransition;
