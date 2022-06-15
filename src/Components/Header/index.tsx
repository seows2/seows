import BouncingText from "Components/BouncingText";
import ScaleLink from "Components/ScaleLink";
import useDayTimeContext from "hooks/useDaytime";
import * as S from "./index.style";

const Header = () => {
  const { dayTime } = useDayTimeContext();

  return (
    <S.HeaderWrapper dayTime={dayTime}>
      <div className="container">
        <BouncingText
          text="SEOWS~"
          clickable
          hoverable
          delay={15}
          duration={230}
          className="title"
        />
        <div className="menu-link">
          <ScaleLink to="/" text="홈" />
          <ScaleLink to="/game" text="게임" />
        </div>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
