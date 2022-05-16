import { DayTime } from "@/App";
import styled from "styled-components";

type BackGroundProps = {
  dayTime: DayTime;
  className?: string;
};

const BackGround = ({ className, dayTime }: BackGroundProps) => {
  return (
    <div className={className}>
      <div className="background"></div>
    </div>
  );
};

export default styled(BackGround)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(rgb(70, 68, 68), black);

  .background {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${({ dayTime }) =>
      dayTime === "Night" ? "transparent" : "white"};
    transition: background-color 1s;
  }
`;
