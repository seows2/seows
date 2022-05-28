import { DayTime } from "@/interface/DayTime";
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

  & .cloud {
    opacity: ${({ dayTime }) => (dayTime === "Night" ? 0.3 : 0.6)};
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

interface CloudStyleProps {
  delay: number;
  width: number;
  height: number;
  top: number;
  duration: number;
}

export const Cloud = styled.img<CloudStyleProps>`
  position: fixed;
  left: 100%;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  animation: ${({ width, duration, delay }) =>
    css`
      ${flyingCloud(width)} ${duration}s ${delay}s linear infinite;
    `};
`;

const flyingCloud = (width: number) => keyframes`
      0% { transform: translateX(0px); }
      100% { transform: translateX(-${width + 1920}px) }
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
