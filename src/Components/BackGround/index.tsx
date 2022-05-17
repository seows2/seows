import { DayTime } from "@/App";
import * as S from "./BackGround.style";

type BackGroundProps = {
  dayTime: DayTime;
};

const BackGround = ({ dayTime }: BackGroundProps) => {
  return (
    <S.BackGroundWrapper>
      <S.BackGround dayTime={dayTime}>
        <div className="sky">
          <img className="sun" src="/sun.png" alt="sun" />
          <img className="moon" src="/moon.png" alt="moon" />
        </div>
      </S.BackGround>
    </S.BackGroundWrapper>
  );
};

export default BackGround;
