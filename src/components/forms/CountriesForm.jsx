import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Alert} from "@mui/material";
import FormTextInput from "../inputs/FormTextInput";
import DialogActions from "@mui/material/DialogActions";
import {createRow} from "../../useAPI/useAPI";

const CountriesForm = ({countries, setCountries}) => {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = useState('');
    const [name, setName] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const data = {
        name: name,
    }
    return (
        <div>
            <Button fullWidth variant="outlined" onClick={handleClickOpen}>
                Add a new record
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new record</DialogTitle>
                <DialogContent>
                    {errors ?
                        <Alert
                            severity="error"
                            onClose={() => {
                                setErrors('')
                            }}
                            className="alert"
                        >
                            {errors}
                        </Alert> : null
                    }
                    <FormTextInput
                        autoFocus
                        label="Name"
                        name="name"
                        value={name}
                        type="text"
                        handleChange={setName}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => createRow(
                        `${process.env.REACT_APP_API_HOST}/api/v1/brands`,
                        data,
                        countries,
                        setCountries,
                        setErrors,
                        setOpen
                    )}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CountriesForm;
