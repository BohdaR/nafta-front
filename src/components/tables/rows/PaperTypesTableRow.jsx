import React, {Fragment, useState} from 'react';
import {deleteRow, updateRow} from "../../../useAPI/useAPI";

const PaperTypesTableRow = ({paperTypes, setErrors, setShowLoader, ...props}) => {
    const [paperType, sePaperType] = useState(props.paperType)

    const [name, setName] = useState(paperType.name)
    const [paperTypeId, sePaperTypeId] = useState(paperType.id)
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
                            value={paperTypeId}
                            type="text"
                            className="col-value"
                            onChange={(e) => sePaperTypeId(e.target.value)}
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/binding_types/${paperTypeId}`,
                                data,
                                sePaperType,
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/binding_types/${paperTypeId}`,
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

export default PaperTypesTableRow;
