import styled from "styled-components";

export const MouseWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 9999;

  & .Day {
    position: absolute;
    width: 5px;
    height: 5px;
    will-change: transform;
    border-radius: 50%;
    background: lightcoral;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  & .Night {
    position: absolute;
    width: 5px;
    height: 5px;
    will-change: transform;
    border-radius: 50%;
    background: yellow;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }
`;
