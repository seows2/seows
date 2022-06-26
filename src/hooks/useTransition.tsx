import { TransitionContextInterface } from "interface/transition";
import { createContext, useContext } from "react";

export const TransitionContext = createContext<TransitionContextInterface>({
  transition: false,
  activeTransition: () => {},
});

const useTransition = () => {
  const transitionContext = useContext(TransitionContext);

  if (!transitionContext) throw Error("transitionContext가 존재하지 않습니다.");

  return transitionContext;
};

export default useTransition;
