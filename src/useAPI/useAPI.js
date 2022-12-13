import axios from "axios";

export const loadRows = async (url, setShowLoader, setRows, setErrors,) => {
    setErrors('')
    setShowLoader(true);
    axios.get(url)
        .then(
            (response) => {
                setShowLoader(false);
                setRows(response.data)
            })
        .catch(
            () => {
                setShowLoader(false);
                setErrors('Cannot connect to database!')
            }
        )
}

export const createRow = async (url, data, rows, setRows, setErrors, setOpen) => {
    setErrors('')
    axios.post(url, data)
        .then(
            (response) => {
                setRows([...rows, response.data]);
                setOpen(false);
            }
        )
        .catch(
            (errors) => {
                setErrors(errors.response.data.errors.massage);
            }
        )
}

export const updateRow = async (url, body, setRow, setShowLoader, setErrors) => {
    setShowLoader(true);
    setErrors('');
    axios.post(url, body)
        .then(
            (response) => {
                setRow(response.data);
                setShowLoader(false);
            }
        )
        .catch(
            (errors) => {
                setShowLoader(false);
                setErrors(errors.response.data.errors.massage)
            }
        )
}

export const deleteRow = async (url, setShowRow, setShowLoader, setErrors) => {
    setShowLoader(true);
    setErrors('');
    axios.delete(url)
        .then(
            () => {
                setShowRow(false);
                setShowLoader(false);
            }
        )
        .catch(
            (errors) => {
                setShowLoader(false);
                setErrors(errors.response.data.errors.massage)
            }
        )
}

