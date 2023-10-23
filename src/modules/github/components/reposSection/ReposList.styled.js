import styled, { css } from 'styled-components';

export const StyledImgContainer = styled.div`
    & img {
        max-width: 150px;

        ${({ $as }) =>
            $as === 'circle' &&
            css`
                border-radius: 50%;
                max-width: 80px;
                border: 3px solid white;
                box-shadow: var(--box-shadow);
            `}
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1em;

    h2 {
        margin-bottom: 0.15em;
    }

    p {
        color: var(--font-color);
    }

    .user-bio {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`;
