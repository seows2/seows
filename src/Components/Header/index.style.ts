import { DayTime } from "interface/dayTime";
import styled from "styled-components";

export const HeaderWrapper = styled.div<{ dayTime: DayTime }>`
  position: relative;
  z-index: 10;
  padding: 20px;
  > .container {
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
  }

  .title {
    font-size: 2rem;
    padding: 0px 20px;
    letter-spacing: 1px;
    color: ${({ dayTime }) => (dayTime === "Day" ? "black" : "white")};
  }

  .menu-link {
    display: flex;
  }
`;
