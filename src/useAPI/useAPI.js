import axios from "axios";

export const get = async (url) => {
    return await axios.get(url);
}

export const post = async (url, body) => {
    return await axios.post(url, body);
}

export const deleteRequest = async (url) => {
    return await axios.delete(url);
}

export const loadRows = async (url, setShowLoader, setRows, setErrors,) => {
    setErrors('')
    setShowLoader(true);
    get(url)
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
    post(url, data)
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
    post(url, body)
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
    deleteRequest(url)
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

