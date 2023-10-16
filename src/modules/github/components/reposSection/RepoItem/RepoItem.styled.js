import styled from 'styled-components';

export const StyledListItem = styled.li`
    min-height: 30px;
    padding: 1em;
    position: relative;
    cursor: pointer;
    transition: background-color 0.4s;
    &:hover {
        background-color: var(--color-input-background);
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 5%;
        width: 95%;
        border-bottom: 1px solid lightgrey;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    gap: 1em;
    align-items: center;
    & > * {
        flex: 1;
    }

    h4 {
        flex: 1.5;
        flex-shrink: 0;
        min-width: 280px;
    }

    .name {
        font-family: 'SFProBold', sans-serif;
    }
`;

export const StyledPillowShapeParagraph = styled.p`
    background-color: ${({ color }) => color};
    color: white;
    padding: 0.5em 1em;
    border-radius: 100vh;
    font-size: 0.7em;
    font-family: 'SFProBold', sans-serif;
    min-width: 70px;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
`;

export const StyledIconWrapper = styled.div`
    text-align: right;
    cursor: pointer;

    svg {
        transform: scale(1.2);
    }
`;

export const StyledSection = styled.section`
    margin-top: 1rem;

    .update-date {
        margin-top: 1rem;
    }

    .link-wrapper {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
    }

    .repo-link {
        margin-left: 0.5rem;
    }
`;
