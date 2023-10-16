import React, { useState } from 'react';
import styled from 'styled-components';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

import * as db from '../../../../db';

const StyledListItem = styled.li`
    min-height: 30px;
    padding: 1em;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 5%;
        width: 95%;
        border-bottom: 1px solid lightgrey;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    gap: 1em;
    align-items: center;
    /* justify-content: space-between; */
    & > * {
        flex: 1;
    }

    h4 {
        flex: 2;
        flex-shrink: 0;
        min-width: 280px;
    }

    .name {
        font-family: 'SFProBold', sans-serif;

        /* flex-grow: 0; */
    }

    /* .date {
        background-color: var(--color-1);
        color: white;
        padding: 0.5em 1em;
        border-radius: 100vh;
        font-size: 0.7em;
        font-family: 'SFProBold', sans-serif;
        min-width: 70px;
        flex-shrink: 0;
        flex-grow: 0;
        text-align: center;
    } */
`;

const StyledPillowShapeParagraph = styled.p`
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

const StyledIconWrapper = styled.div`
    /* justify-self: end; */
    /* margin-left: auto; */
    text-align: right;
    cursor: pointer;

    svg {
        transform: scale(1.2);
    }
`;

const StyledSection = styled.section`
    margin-top: 5px;
`;

function RepoItem({ data, index }) {
    const [open, setOpen] = useState(false);
    const { created_at: createdAt, updated_at: updatedAt, description, language, name, url } = data;
    const date = createdAt.split('T')[0];
    const languageBackground = db.languageColors[language] || 'var(--color-1)';

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <StyledListItem $index={index}>
            <StyledHeader>
                <h4>
                    name: <span className='name'>{name}</span>
                </h4>
                <StyledPillowShapeParagraph color='var(--color-1)' className='date'>
                    {date}
                </StyledPillowShapeParagraph>
                {language && (
                    <StyledPillowShapeParagraph color={languageBackground} className='language'>
                        {language}
                    </StyledPillowShapeParagraph>
                )}
                <StyledIconWrapper onClick={handleClick}>{open ? <UilAngleUp /> : <UilAngleDown />}</StyledIconWrapper>
            </StyledHeader>
            {open && (
                <StyledSection>
                    <p>{description}</p>
                    <div>
                        <p>{language}</p>
                    </div>
                </StyledSection>
            )}
        </StyledListItem>
    );
}

export default RepoItem;
