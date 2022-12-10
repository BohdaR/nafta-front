import React from 'react';
import TextField from "@mui/material/TextField";

const FormTextInput = ({name, label, value, type="text", handleChange, ...props}) => {
    return (
        <TextField
            margin="dense"
            name={name}
            label={label}
            value={value}
            type={type}
            fullWidth
            variant="standard"
            onChange={(e)=> handleChange(e.target.value)}
            {...props}
        />
    );
};

export default FormTextInput;
