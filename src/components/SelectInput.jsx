import React from 'react';

const SelectInput = ({name, defaultValue, options}) => {
    return (
        <select className="picker" name={name} value={defaultValue}>
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
