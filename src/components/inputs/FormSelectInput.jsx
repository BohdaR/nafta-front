import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const FormSelectInput = ({label, name, value, handleChange, options}) => {
    return (
        <FormControl variant={"standard"} fullWidth style={{marginTop: 8, marginBottom: 4}}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                label={label}
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
                {options.map((option) =>
                    <MenuItem
                        key={option.id}
                        value={option.id}>
                        {option.name}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default FormSelectInput;
