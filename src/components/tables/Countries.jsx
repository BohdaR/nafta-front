import React from 'react';
import TableName from "../TableName";
import CountriesForm from "../forms/CountriesForm";
import CountriesTableRow from "./rows/CountriesTableRow";

const Countries = ({countries, setCountries, setShowLoader, setErrors}) => {
    return (
        <div className="container">
            <TableName
                tableName="countries"
                setRows={setCountries}
                setShowLoader={setShowLoader}
                setErrors={setErrors}
            />
            <table>
                <thead>
                <tr>
                    <th><h1>id</h1></th>
                    <th><h1>name</h1></th>
                    <th><h1>country</h1></th>
                    <th colSpan="2">
                        <CountriesForm
                            countries={countries}
                            setCountries={setCountries}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {countries.map(country =>
                    <CountriesTableRow
                        key={country.id}
                        country={country}
                        countries={countries}
                        setErrors={setErrors}
                        setShowLoader={setShowLoader}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Countries;
