import React, {Fragment, useState} from 'react';
import {deleteRow, updateRow} from "../../../useAPI/useAPI";

const PaperFormatsTableRow = ({paperFormats, setErrors, setShowLoader, ...props}) => {
    const [paperFormat, setPaperFormat] = useState(props.paperFormat)

    const [name, setName] = useState(paperFormat.name)
    const [paperFormatId, setPaperFormatId] = useState(paperFormat.id)
    const [showRow, setShowRow] = useState(true)

    const data = {
        name: name,
    }
    return (
        <Fragment>
            {showRow ?
                <tr>
                    <td>
                        <input
                            name="country_id"
                            value={paperFormatId}
                            type="text"
                            className="col-value"
                            onChange={(e) => setPaperFormatId(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            name="name"
                            value={name}
                            type="text"
                            className="col-value"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            style={{cursor: "pointer"}}
                            value="Save"
                            type="button"
                            className="col-value"
                            onClick={() => updateRow(
                                `${process.env.REACT_APP_API_HOST}/api/v1/binding_types/${paperFormatId}`,
                                data,
                                setPaperFormat,
                                setShowLoader,
                                setErrors)}
                        />
                    </td>
                    <td>
                        <input
                            style={{cursor: "pointer"}}
                            value="Delete"
                            type="button"
                            className="col-value"
                            onClick={() => deleteRow(
                                `${process.env.REACT_APP_API_HOST}/api/v1/binding_types/${paperFormatId}`,
                                setShowRow,
                                setShowLoader,
                                setErrors
                            )}
                        />
                    </td>
                </tr> : null}
        </Fragment>
    );
};

export default PaperFormatsTableRow;
