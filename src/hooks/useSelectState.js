import { useState } from "react";

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        const options = {
            name: e.target.name,
            value: e.target.value,
        };
        setValue(options);
    };

    return [value, handleChange];
};
