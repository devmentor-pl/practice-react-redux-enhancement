import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, getResponse, toggle } from './so.actions';

const StackOverflow = () => {
    const dispatch = useDispatch();
    const { userQuery, sortMethod, isAnswered } = useSelector(
        (store) => store.request
    );
    const response = useSelector((store) => store.response);
    const [checkbox, setCheckbox] = useState();

    useEffect(() => {
        console.log(isAnswered);
    }, []);
    // useEffect(() => {
    //     dispatch(setFieldValue('isAnswered', checkbox));
    // }, [checkbox]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResponse());
    };

    const handleInputChange = ({ name, value }) => {
        dispatch(setFieldValue(name, value));
    };

    const renderQuestions = () => {
        const answered = response.filter((item) => item.is_answered);

        const renderItem = ({ title, question_id }) => {
            return (
                <a>
                    <li key={question_id}>{title}</li>
                </a>
            );
        };

        if (isAnswered) {
            return renderItem(answered);
        }
        return renderItem(response);
    };

    return (
        <section>
            <div>
                <img
                    src='../../../assets/img/stackO.png'
                    style={{ height: '60px' }}
                />
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    style={{ display: 'flex' }}
                >
                    <input
                        placeholder='Browse Stackoverflow'
                        name='userQuery'
                        value={userQuery}
                        onChange={(e) => handleInputChange(e.target)}
                    />

                    <label>
                        <input
                            name='isAnswered'
                            type='checkbox'
                            checked={isAnswered}
                            onChange={(e) => dispatch(toggle(e.target))}
                        />
                        Hide unanswered
                    </label>

                    <button type='submit'>Search</button>
                </form>
            </div>
            <div>
                <div>
                    <input
                        name='sortMethod'
                        type='radio'
                        id='asc'
                        value='asc'
                        onChange={(e) => handleInputChange(e.target)}
                    />
                    <label htmlFor='asc'>Ascending</label>
                    <input
                        name='sortMethod'
                        type='radio'
                        id='desc'
                        value='desc'
                        onChange={(e) => handleInputChange(e.target)}
                    />
                    <label htmlFor='desc'>Descending</label>
                </div>
                {/* <ul>{response.length > 0 ? renderQuestions() : null}</ul> */}
            </div>
        </section>
    );
};

export default StackOverflow;
