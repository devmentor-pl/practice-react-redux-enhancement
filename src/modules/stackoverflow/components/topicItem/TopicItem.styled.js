import styled from 'styled-components';

export const StyledItem = styled.li`
    border: 1px solid white;
    border-radius: 3px;
    background-color: var(--dark-color-3);
    display: flex;
    padding: 0.5rem;
    gap: 1rem;
    margin-bottom: 0.25rem;

    p {
        color: #2a2e31;
    }
`;

export const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;

    p {
        font-size: 0.75rem;
    }

    img {
        width: 40px;
    }

    & > *:not(:last-child) {
        margin-bottom: 5px;
    }

    .reputation {
        font-family: 'SFProBold', sans-serif;
    }
`;

export const StyledBody = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 5;

    h4 {
        color: var(--dark-color-1);
        font-family: 'SFProBold', sans-serif;
        font-size: 1.4rem;
        font-size: 1em;
        font-size: clamp(1.1rem, 1.6vh, 1.4rem);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        position: relative;

        svg {
            margin-right: 0.5rem;
        }

        .tooltip {
            position: absolute;
            background-color: var(--dark-color-1);
            color: var(--dark-color-3);
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
            top: 100%;
            left: 50%;
            z-index: 9999;
            transform: translateX(-50%);
            transition: opacity 0.3s ease, visibility 0.3s ease;
            visibility: hidden;
            opacity: 0;
            min-width: 120px;
        }

        &:hover > .tooltip {
            visibility: visible;
            opacity: 1;
        }
    }

    h4:hover {
        color: var(--dark-color-2);
    }

    a {
        text-decoration: none;
    }

    p {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }

    ul {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    }

    li {
        border: 1px solid var(--dark-color-2);
        border-radius: 100vh;
        padding: 0.15rem 0.5rem;
        font-size: clamp(0.3rem, 1vw, 0.75rem);
    }
`;
