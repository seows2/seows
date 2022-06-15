import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const linkAnimation = keyframes`
  0%  { transform: scale(1); }
  30% { transform: scale(1.2); }
  60% { transform: scale(1); }
  100%{ transform: scale(1); }
`;

export const ScaleLink = styled.div`
  padding: 0px 20px;
  font-size: 2rem;
  &:hover {
    animation: ${linkAnimation} 0.8s infinite;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
