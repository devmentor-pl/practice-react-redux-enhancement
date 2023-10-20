import React from 'react';
import { UilLink } from '@iconscout/react-unicons';

import * as h from '../../../../helpers';

import { StyledItem, StyledAside, StyledBody } from './TopicItem.styled';

function TopicItem({ data }) {
    const {
        answer_count: count,
        creation_date: timeStamp,
        link,
        tags,
        title,
        accepted_answer_id: id,
        owner: { display_name: user, profile_image: profileImg, reputation },
    } = data;

    const date = h.timestampToDateString(timeStamp);
    const tagsJSX = tags.map((el, i) => <li key={i}>{el}</li>);
    const reputationWithCommas = h.addCommasToNumberString(reputation);

    return (
        <StyledItem key={id}>
            <StyledAside>
                <p className='answers'>
                    {count} {count === 1 ? 'answer' : 'answers'}
                </p>
                <div>
                    <img src={profileImg} alt='profile' />
                </div>
                <p>
                    {user} <span className='reputation'>{reputationWithCommas}</span>
                </p>
            </StyledAside>
            <StyledBody>
                <a href={link} target='blank'>
                    <h4>
                        <UilLink />
                        {title}
                        <span className='tooltip'>see on stack overflow website</span>
                    </h4>
                </a>
                <p>created: {date}</p>
                <ul>{tagsJSX}</ul>
            </StyledBody>
        </StyledItem>
    );
}

export default TopicItem;
