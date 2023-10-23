import styled, { css } from 'styled-components';

export const StyledReposWrapper = styled.div`
    background-color: var(--color-2);
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    // overflow hidden nie działało
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    ${({ $as }) =>
        $as === 'list' &&
        css`
            display: block;
        `}
`;

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
    margin-bottom: 1.5rem;

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