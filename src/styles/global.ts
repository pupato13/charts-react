import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

        /* Removing Styles from Lists and Links */
        text-decoration: none;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        /* background: ##faf8fb; */
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
        color: #333;
        height: 100vh;
    }

    body, input, button, textarea {
        font: 16px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-green: #b2d235;
        --color-white: #fff;
        --color-white-9: #faf8fb;
        --color-whitesmoke: #fdfdfd;
        --color-green-hover: ${shade(0.2, "#b2d235")};
        --color-red-danger: #c53030;
        --color-red-danger-hover: ${shade(0.2, "#c53030")};
        --color-close: #6c757d;
        --color-close-hover: ${shade(0.2, "#6c757d")};
        --color-gold: #ffd700;
        --color-gold-dark: #ffae00;
        --color-silver: #c0c0c0;
        --color-silver-dark: #9a9a9a;
        --color-bronze: #e59e58;
        --color-bronze-dark: #cd4432;

        --background-gold: linear-gradient(
            to right,
            #ffae00 0%,
            #ffd700 51%,
            #ffae00 100%
        );

        --background-silver: linear-gradient(
            to right,
            #9a9a9a 0%,
            #c0c0c0 51%,
            #9a9a9a 100%
        );

        --background-bronze: linear-gradient(
            to right,
            #cd4432 0%,
            #e59e58 51%,
            #cd4432 100%
        );

        --background-company: linear-gradient(
            to right,
            #708c04 0%,
            #b2d235 51%,
            #708c04 100%
        );
    }

    .Toastify__toast--success {
        background: rgba(178, 210, 53, 0.8);
        color: #212121;
        border-radius: 8px;
        padding: 16px;
    }
    .Toastify__close-button--success {
        color: #212121;
    }

    .Toastify__toast--info {
        background: #3172b7;
        color: #fff;
        border-radius: 8px;
        padding: 16px;
    }
    .Toastify__close-button--info {
        color: #fff;
    }

    .Toastify__toast--error {
        background: #c53030;
        color: #fff;
        border-radius: 8px;
        padding: 16px;
    }

    .Toastify__close-button--error {
        color: #fff;
    }
`;
