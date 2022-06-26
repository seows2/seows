import useTransition from "hooks/useTransition";
import * as S from "./index.style";

interface ScaleLinkProps {
  to: string;
  text: string;
}

const ScaleLink = ({ to, text }: ScaleLinkProps) => {
  const { activeTransition } = useTransition();
  return (
    <S.ScaleLink>
      <S.StyledLink to={to} onClick={activeTransition}>
        {text}
      </S.StyledLink>
    </S.ScaleLink>
  );
};

export default ScaleLink;
