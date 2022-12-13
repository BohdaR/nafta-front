import React, {Fragment, useState} from 'react';
import {deleteRow, updateRow} from "../../../useAPI/useAPI";

const BindingTypesRow = ({bindingTypes, setErrors, setShowLoader, urlTableName, ...props}) => {
    const [bindingType, setBindingType] = useState(props.bindingType)

    const [name, setName] = useState(bindingType.name)
    const [bindingTypeId, setBindingTypeId] = useState(bindingType.id)
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
                            name="pk"
                            value={bindingTypeId}
                            type="text"
                            className="col-value"
                            onChange={(e) => setBindingTypeId(e.target.value)}
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/${urlTableName}/${bindingTypeId}`,
                                data,
                                setBindingType,
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/${urlTableName}/${bindingTypeId}`,
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

export default BindingTypesRow;
