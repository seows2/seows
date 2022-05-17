import { DayTime } from "@/App";
import styled, { css, keyframes } from "styled-components";

export const BackGroundWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(rgb(70, 68, 68), black);
`;

export const BackGround = styled.div<{ dayTime: DayTime }>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${({ dayTime }) =>
    dayTime === "Night" ? "transparent" : "white"};
  transition: background-color 1s;

  & .sky {
    z-index: -10;
    position: relative;
    width: 100%;
    height: 100%;
  }

  & .moon {
    position: fixed;
    width: 12em;
    right: 10%;
    bottom: 100%;
    z-index: -10;
    user-select: none;
    animation: ${({ dayTime }) =>
      dayTime === "Night"
        ? css`
            ${turningMoon} 17s linear infinite, ${lazyPlanet} 1s 1s forwards
          `
        : css`
            ${lazyPlanetReverse} 1s 0s forwards
          `};
  }
  & .sun {
    position: fixed;
    width: 12em;
    right: 10%;
    bottom: 100%;
    z-index: 10;
    user-select: none;
    animation: ${({ dayTime }) =>
      dayTime === "Day"
        ? css`
            ${turningSun} 4s infinite, ${lazyPlanet} 1s 1s forwards
          `
        : css`
            ${lazyPlanetReverse} 1s 0s forwards
          `};
  }
`;

const lazyPlanet = keyframes`
  0% { top: -12em };
  100% { top: 10% };
`;
const lazyPlanetReverse = keyframes`
  0% { top: 10% };
  100% { top: -12em };
`;

const turningMoon = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const turningSun = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;
