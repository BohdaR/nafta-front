import React, {useState} from 'react';
import TableName from "../TableName";
import CountriesTableRow from "./rows/CountriesTableRow";
import FormTextInput from "../inputs/FormTextInput";
import BaseForm from "../forms/BaseForm";

const Countries = ({countries, setCountries, setShowLoader, setErrors}) => {
    const [name, setName] = useState('')

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
                    <th colSpan="2">
                        <BaseForm
                            urlTableName="countries"
                            tableRows={countries}
                            setTableRows={setCountries}
                            data={{name: name}}
                        >
                            <FormTextInput
                                autoFocus
                                label="Name"
                                name="name"
                                value={name}
                                type="text"
                                handleChange={setName}
                            />
                        </BaseForm>
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
