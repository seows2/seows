import { DayTime } from "@/App";
import * as S from "./BackGround.style";

type BackGroundProps = {
  dayTime: DayTime;
};

const Clouds = Array.from({ length: 3 }).map((_, idx) => (
  <S.Cloud
    key={idx}
    className="cloud"
    src="/cloud.png"
    delay={idx * 10}
    width={Math.floor(Math.random() * 200) + 200}
    height={Math.floor(Math.random() * 100) + 100}
    top={Math.floor(Math.random() * 300)}
    duration={Math.floor(Math.random() * 20) + 20}
  />
));

const BackGround = ({ dayTime }: BackGroundProps) => {
  return (
    <S.BackGroundWrapper>
      <S.BackGround dayTime={dayTime}>
        <div className="sky">
          <img className="sun" src="/sun.png" alt="sun" />
          <img className="moon" src="/moon.png" alt="moon" />
          {Clouds}
        </div>
      </S.BackGround>
    </S.BackGroundWrapper>
  );
};

export default BackGround;
