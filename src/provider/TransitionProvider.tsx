import { TransitionContext } from "hooks/useTransition";
import { ReactNode, useState } from "react";

type TransitionProviderProps = {
  children: ReactNode;
};

const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const [transition, setTransition] = useState(false);
  const activeTransition = () => {
    setTransition(true);
    setTimeout(() => setTransition(false), 4000);
  };

  return (
    <TransitionContext.Provider value={{ transition, activeTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
