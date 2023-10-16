import React from 'react';
import styled from 'styled-components';
import { UilAngleDown, UilAngleUp, UilGithub } from '@iconscout/react-unicons';

import * as db from '../../../../../db';

import {
    StyledSection,
    StyledIconWrapper,
    StyledPillowShapeParagraph,
    StyledHeader,
    StyledListItem,
} from './RepoItem.styled';

function RepoItem({ data, index, handleClick, isOpen }) {
    const { created_at: createdAt, updated_at: updatedAt, description, language, name, html_url: url, id } = data;
    const date = createdAt.split('T')[0];
    const updatedDate = updatedAt.split('T')[0];
    const languageBackground = db.languageColors[language] || 'var(--color-1)';

    return (
        <StyledListItem $index={index} onClick={() => handleClick(id)}>
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
                <StyledIconWrapper>{isOpen ? <UilAngleUp /> : <UilAngleDown />}</StyledIconWrapper>
            </StyledHeader>
            {isOpen && (
                <StyledSection>
                    <p>{description}</p>
                    <p className='update-date'>updated: {updatedDate}</p>
                    <div className='link-wrapper'>
                        <UilGithub />
                        <a className='repo-link' target='blank' href={url}>
                            see repo on github
                        </a>
                    </div>
                </StyledSection>
            )}
        </StyledListItem>
    );
}

export default RepoItem;
