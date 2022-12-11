import React, {useState} from 'react';
import TableName from "../TableName";
import BrandsTableRow from "./rows/BrandsTableRow";
import FormTextInput from "../inputs/FormTextInput";
import BaseForm from "../forms/BaseForm";
import FormSelectInput from "../inputs/FormSelectInput";

const Brands = ({brands, setBrands, setShowLoader, setErrors, countries}) => {
    const [name, setName] = useState('')
    const [countryId, setCountryId] = useState('')

    return (
        <div className="container">
            <TableName
                tableName="brands"
                setRows={setBrands}
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
                        <BaseForm
                            urlTableName="brands"
                            tableRows={brands}
                            setTableRows={setBrands}
                            data={{name: name, country_id: countryId}}
                        >
                            <FormTextInput
                                autoFocus
                                label="Name"
                                name="name"
                                value={name}
                                type="text"
                                handleChange={setName}
                            />
                            <FormSelectInput
                                value={countryId}
                                label="Manufacture country"
                                name="country_id"
                                handleChange={setCountryId}
                                options={countries}
                            />
                        </BaseForm>
                    </th>
                </tr>
                </thead>
                <tbody>
                {brands.map(brand =>
                    <BrandsTableRow
                        key={brand.id}
                        brand={brand}
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

export default Brands;
