import { useEffect, useState } from 'react';

function useCalculateListHeight(headerRef) {
    const [listHeight, setListHeight] = useState(null);

    useEffect(() => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.clientHeight;
            setListHeight(headerHeight);
        }
    }, [headerRef]);

    return { listHeight };
}

export default useCalculateListHeight;
