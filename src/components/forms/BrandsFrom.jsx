import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Alert} from "@mui/material";
import FormTextInput from "../inputs/FormTextInput";
import FormSelectInput from "../inputs/FormSelectInput";
import DialogActions from "@mui/material/DialogActions";
import {createRow} from "../../useAPI/useAPI";

const BrandsFrom = ({brands, setBrands, countries}) => {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = useState('');
    const [name, setName] = useState('')
    const [countryId, setCountryId] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const data = {
        name: name,
        country_id: countryId
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
                    <FormSelectInput
                        value={countryId}
                        label="Manufacture country"
                        name="country_id"
                        handleChange={setCountryId}
                        options={countries}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => createRow(
                        `${process.env.REACT_APP_API_HOST}/api/v1/brands`,
                        data,
                        brands,
                        setBrands,
                        setErrors,
                        setOpen
                        )}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BrandsFrom;
