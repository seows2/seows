import styled, { keyframes } from "styled-components";

export const Transition = styled.div<{
  skew: number;
  color: string;
  delay: number;
  active: boolean;
}>`
  display: ${({ active }) => (active ? "block" : "none")};
  animation-name: ${({ active }) => (active ? pageAnimation : "none")};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ delay }) => delay}ms;
  animation-duration: 4s;
  position: absolute;
  height: 100%;
  width: 0%;
  background: ${({ color }) => color};
  z-index: 11;
`;

const pageAnimation = keyframes`
    0%   { }
    20%  { transform: skewX(5deg) translateX(-100%); }
    40%  { transform: skewX(0deg) translateX(0); width:100%; }
    60%  { transform: skewX(3deg) translateX(0); width:100%; }
    80%  { transform: skewX(1deg) translateX(-100%); width:40%; }
    100% { transform: skewX(-3deg) translateX(-50px); width:0%; }
`;
