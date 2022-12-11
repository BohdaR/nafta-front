import React, {Fragment, useState} from 'react';
import {updateRow, deleteRow} from "../../../useAPI/useAPI";

const CountriesTableRow = ({countries, setErrors, setShowLoader, ...props}) => {
    const [country, setCountry] = useState(props.country)

    const [name, setName] = useState(country.name)
    const [countryId, setCountryId] = useState(country.id)
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
                            value={countryId}
                            type="text"
                            className="col-value"
                            onChange={(e) => setCountryId(e.target.value)}
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/countries/${countryId}`,
                                data,
                                setCountry,
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
                                `${process.env.REACT_APP_API_HOST}/api/v1/countries/${countryId}`,
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

export default CountriesTableRow;
