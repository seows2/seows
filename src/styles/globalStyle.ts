import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: "Cafe24Oneprettynight";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
    html, body {
        font-size: 16px;
        font-family: 'Cafe24Oneprettynight', sans-serif;
    }
`;

export default GlobalStyle;
