import styled, { keyframes } from "styled-components";

const bouncingCharAnimation = keyframes`
    0% { transform: translateY(0rem); }
    50% { transform: translateY(-0.5rem); }
    100% { transform: translateY(0rem); }
`;

export const StyleChar = styled.span<{
  active: boolean;
  delay: number;
  duration: number;
}>`
  display: inline-block;
  animation-name: ${({ active }) => (active ? bouncingCharAnimation : "none")};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ delay }) => delay}ms;
  animation-duration: ${({ duration }) => duration}ms;
`;
