import { css } from 'styled-components';

const theme = {
    dark: css`
        background: rgba(13, 13, 13, 0.2);
        color: white;
        && > * {
            background-color: rgb(51 56 62);
        }
    `,
};

export default theme;
