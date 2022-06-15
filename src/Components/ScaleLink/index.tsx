import * as S from "./index.style";

interface ScaleLinkProps {
  to: string;
  text: string;
}

const ScaleLink = ({ to, text }: ScaleLinkProps) => {
  return (
    <S.ScaleLink>
      <S.StyledLink to={to}>{text}</S.StyledLink>
    </S.ScaleLink>
  );
};

export default ScaleLink;
