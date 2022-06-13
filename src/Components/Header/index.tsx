import BouncingText from "Components/BouncingText";
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
        <div className="ver">
          <div>MAIN1</div>
          <div>MAIN2</div>
          <div>MAIN3</div>
          <div>MAIN4</div>
        </div>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
