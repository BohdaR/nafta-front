import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {Alert} from "@mui/material";
import FormSelectInput from "./inputs/FormSelectInput";
import FormTextInput from "./inputs/FormTextInput";
import {post} from "../useAPI/useAPI";

export default function FormDialog({
                                       setPapers,
                                       papers,
                                       brands,
                                       bindingTypes,
                                       paperTypes,
                                       paperFormats,
                                       countries,
                                   }) {
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [pieces, setPieces] = useState('')
    const [paperTypeId, setPaperTypeId] = useState('')
    const [density, setDensity] = useState('')
    const [paperFormatId, setPaperFormatId] = useState('')
    const [brandId, setBrandId] = useState('')
    const [bindingTypeId, setBindingTypeId] = useState('')
    const [countryId, setCountryId] = useState('')
    const [status, setStatus] = useState('')

    const [errors, setErrors] = useState('');

    const handleCreate = () => {
        const data = {
            description: description,
            name: name,
            pieces: pieces,
            paper_type_id: paperTypeId,
            density: density,
            paper_format_id: paperFormatId,
            brand_id: brandId,
            binding_type_id: bindingTypeId,
            country_id: countryId,
            status: status
        }

        post(`${process.env.REACT_APP_API_HOST}/api/v1/papers`, data)
            .then(
                (response) => {
                    setPapers([...papers, response.data])
                    setOpen(false);
                })
            .catch(
                (errors) => {
                    setErrors(errors.response.data.errors.massage)
                }
            )
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button fullWidth variant="outlined" onClick={handleClickOpen}>
                Add a new record
            </Button>
            <Dialog open={open} onClose={handleClose}>
                {errors ?
                    <Alert
                        severity="error"
                        onClose={() => {
                            setErrors('')
                        }}
                        onClick={() => setErrors('')}
                        className="alert"
                    >
                        {errors}
                    </Alert> : null
                }
                <DialogTitle>Create new record</DialogTitle>
                <DialogContent>
                    <FormTextInput
                        autoFocus
                        label="Name"
                        name="name"
                        value={name}
                        type="text"
                        handleChange={setName}
                    />
                    <FormTextInput
                        label="Description"
                        name="description"
                        value={description}
                        type="text"
                        handleChange={setDescription}
                    />
                    <FormTextInput
                        label="Pieces"
                        name="pieces"
                        value={pieces}
                        type="number"
                        handleChange={setPieces}
                    />
                    <FormTextInput
                        label="Density"
                        name="density"
                        value={density}
                        type="number"
                        handleChange={setDensity}
                    />
                    <FormSelectInput
                        value={paperTypeId}
                        label="Paper type"
                        name="type_id"
                        handleChange={setPaperTypeId}
                        options={paperTypes}
                    />
                    <FormSelectInput
                        value={paperFormatId}
                        label="Paper format"
                        name="format_id"
                        handleChange={setPaperFormatId}
                        options={paperFormats}
                    />
                    <FormSelectInput
                        value={brandId}
                        label="Paper brand"
                        name="brand_id"
                        handleChange={setBrandId}
                        options={brands}
                    />
                    <FormSelectInput
                        value={bindingTypeId}
                        label="Binding type"
                        name="binding_type_id"
                        handleChange={setBindingTypeId}
                        options={bindingTypes}
                    />
                    <FormSelectInput
                        value={countryId}
                        label="Manufacture country"
                        name="country_id"
                        handleChange={setCountryId}
                        options={countries}
                    />
                    <FormTextInput
                        label="Status"
                        name="status"
                        value={status}
                        type="text"
                        handleChange={setStatus}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
