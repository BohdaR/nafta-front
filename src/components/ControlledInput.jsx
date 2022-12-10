import React, {useState} from 'react';

const ControlledInput = ({defaultValue, ...props}) => {
    const [value, setValue] = useState(defaultValue)
    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />
        </div>
    );
};

export default ControlledInput;
