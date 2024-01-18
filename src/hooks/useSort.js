import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCommentsAction } from '../modules/stackoverflow/stackoverflow.actions';

function useSort(query, comments) {
    const [data, setData] = useState(comments);
    const [prevSearchQuery, setPrevSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sorting, setSorting] = useState('asc');
    const dispatch = useDispatch();

    useEffect(() => {
        if (query !== '') {
            setPrevSearchQuery(query);
        }

        setData(comments);
    }, [query, comments]);

    const handleSort = option => {
        if (option === 'relevance') return dispatch(getCommentsAction(prevSearchQuery));

        dispatch(getCommentsAction(prevSearchQuery, sorting, 'creation'));
        if (sorting === 'desc') {
            setSorting('asc');
        } else {
            setSorting('desc');
        }
    };

    const sortByProperty = property => {
        if (sortBy === property && property === 'date') {
            const sortedData = [...data].reverse();
            setData(sortedData);
        } else {
            const sortedData = [...data].sort((a, b) => {
                if (property === 'reputation') {
                    return b.owner.reputation - a.owner.reputation;
                } else if (property === 'date') {
                    return b.creation_date - a.creation_date;
                }
            });
            setData([...sortedData]);
        }
        setSortBy(property);
    };

    return {
        data,
        handleSort,
        sortByProperty,
    };
}

export default useSort;
