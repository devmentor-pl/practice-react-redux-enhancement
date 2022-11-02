import React from 'react';

const useMap = arr => {
    const list = arr.map((el, i) => (
        <div key={ `repo-${i}` }>
            { el.name }
        </div>
    ));
    return list;
};

export default useMap;