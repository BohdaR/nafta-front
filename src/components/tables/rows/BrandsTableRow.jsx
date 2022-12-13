import React, {Fragment, useState} from 'react';
import TableSelectInput from "../../inputs/TableSelectInput";
import {updateRow, deleteRow} from "../../../useAPI/useAPI";

const BrandsTableRow = ({countries, setErrors, setShowLoader, urlTableName, ...props}) => {
    const [brand, setBrand] = useState(props.brand)

    const [name, setName] = useState(brand.name)
    const [brandId, setBrandId] = useState(brand.id)
    const [countryId, setCountryId] = useState(brand.country_id)
    const [showRow, setShowRow] = useState(true)

    const data = {
        name: name,
        country_id: countryId
    }

    return (
        <Fragment>
            {showRow ?
                <tr>
                    <td>
                        <input
                            name="pk"
                            value={brandId}
                            type="text"
                            className="col-value"
                            onChange={(e) => setBrandId(e.target.value)}
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
                        <TableSelectInput
                            name="country_id"
                            defaultValue={countryId}
                            options={countries}
                            handleChange={setCountryId}
                        />
                    </td>
                    <td>
                        <input
                            style={{cursor: "pointer"}}
                            value="Save"
                            type="button"
                            className="col-value"
                            onClick={() => updateRow(
                                `${process.env.REACT_APP_API_HOST}/api/v1/${urlTableName}/${brandId}`,
                                data,
                                setBrand,
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/${urlTableName}/${brandId}`,
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

export default BrandsTableRow;
