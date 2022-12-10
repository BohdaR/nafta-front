import React from 'react';

const SelectInput = ({name, defaultValue, options, handleChange}) => {
    return (
        <select
            className="picker"
            name={name}
            value={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
        >
            {options.map(option =>
                <option
                    value={option.id}
                    key={option.id}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SelectInput;
