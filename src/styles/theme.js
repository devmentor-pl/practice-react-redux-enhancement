import { css } from 'styled-components';

const theme = {
    dark: css`
        background: rgba(13, 13, 13, 0.2);
        color: white;
        && > * {
            background-color: rgb(51 56 62);
        }
    `,
    wrapper: {
        element: css`
            margin: var(--element-margin);
            max-width: 350px;
        `,
        section: css`
            max-width: 1000px;
            margin: 1em auto;
        `,
    },
};

export default theme;
