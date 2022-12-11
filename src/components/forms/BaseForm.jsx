import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Alert} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import {createRow} from "../../useAPI/useAPI";

const BaseForm = ({urlTableName, tableRows, setTableRows, data, ...props}) => {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = useState('');
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
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => createRow(
                        `${process.env.REACT_APP_API_HOST}/api/v1/${urlTableName}`,
                        data,
                        tableRows,
                        setTableRows,
                        setErrors,
                        setOpen
                    )}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BaseForm;
