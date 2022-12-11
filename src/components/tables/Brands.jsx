import React from 'react';
import TableName from "../TableName";
import BrandsForm from "../forms/BrandsForm";
import BrandsTableRow from "./rows/BrandsTableRow";

const Brands = ({brands, setBrands, setShowLoader, setErrors, countries}) => {
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
                        <BrandsForm
                            brands={brands}
                            setBrands={setBrands}
                            countries={countries}
                        />
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