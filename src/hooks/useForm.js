import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export function useForm(searchQuery, setQuery, fetchAction, formErrorAction, removeErrorAction) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        const isEmptyInput = searchQuery.length === 0;
        if (isEmptyInput) {
            dispatch(formErrorAction('field cannot be empty'));
            return;
        }

        dispatch(fetchAction(searchQuery));

        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleChange = e => {
        const { value } = e.target;
        if (value.length > 0) dispatch(removeErrorAction());
        dispatch(setQuery(value));
    };

    return { inputRef, handleSubmit, handleChange };
}
