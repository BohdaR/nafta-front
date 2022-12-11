import React, {useState} from 'react';
import TableName from "../TableName";
import PapersTableRow from "./rows/PapersTableRow";
import FormTextInput from "../inputs/FormTextInput";
import FormSelectInput from "../inputs/FormSelectInput";
import BaseForm from "../forms/BaseForm";

const Papers = ({
                    papers,
                    setPapers,
                    setErrors,
                    paperFormats,
                    paperTypes,
                    bindingTypes,
                    countries,
                    brands,
                    setShowLoader
                }) => {
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [pieces, setPieces] = useState('')
    const [paperTypeId, setPaperTypeId] = useState('')
    const [density, setDensity] = useState('')
    const [paperFormatId, setPaperFormatId] = useState('')
    const [brandId, setBrandId] = useState('')
    const [bindingTypeId, setBindingTypeId] = useState('')
    const [countryId, setCountryId] = useState('')
    const [status, setStatus] = useState('')

    return (
        <div className="container">
            <TableName
                tableName="papers"
                setRows={setPapers}
                setShowLoader={setShowLoader}
                setErrors={setErrors}
            />
            <table>
                <thead>
                <tr>
                    <th><h1>id</h1></th>
                    <th><h1>name</h1></th>
                    <th><h1>description</h1></th>
                    <th><h1>pieces</h1></th>
                    <th><h1>paper type</h1></th>
                    <th><h1>density</h1></th>
                    <th><h1>paper format</h1></th>
                    <th><h1>brand</h1></th>
                    <th><h1>binding type</h1></th>
                    <th><h1>manufacture country</h1></th>
                    <th><h1>status</h1></th>
                    <th colSpan="2">
                        <BaseForm
                            urlTableName="papers"
                            tableRows={papers}
                            setTableRows={setPapers}
                            data={{
                                name: name,
                                description: description,
                                pieces: pieces,
                                paper_type_id: paperTypeId,
                                density: density,
                                paper_format_id: paperFormatId,
                                brand_id: brandId,
                                binding_type_id: bindingTypeId,
                                country_id: countryId,
                                status: status
                        }}
                        >
                            <FormTextInput
                                autoFocus
                                label="Name"
                                name="name"
                                value={name}
                                type="text"
                                handleChange={setName}
                            />
                            <FormTextInput
                                label="Description"
                                name="description"
                                value={description}
                                type="text"
                                handleChange={setDescription}
                            />
                            <FormTextInput
                                label="Pieces"
                                name="pieces"
                                value={pieces}
                                type="number"
                                handleChange={setPieces}
                            />
                            <FormTextInput
                                label="Density"
                                name="density"
                                value={density}
                                type="number"
                                handleChange={setDensity}
                            />
                            <FormSelectInput
                                value={paperTypeId}
                                label="Paper type"
                                name="type_id"
                                handleChange={setPaperTypeId}
                                options={paperTypes}
                            />
                            <FormSelectInput
                                value={paperFormatId}
                                label="Paper format"
                                name="format_id"
                                handleChange={setPaperFormatId}
                                options={paperFormats}
                            />
                            <FormSelectInput
                                value={brandId}
                                label="Paper brand"
                                name="brand_id"
                                handleChange={setBrandId}
                                options={brands}
                            />
                            <FormSelectInput
                                value={bindingTypeId}
                                label="Binding type"
                                name="binding_type_id"
                                handleChange={setBindingTypeId}
                                options={bindingTypes}
                            />
                            <FormSelectInput
                                value={countryId}
                                label="Manufacture country"
                                name="country_id"
                                handleChange={setCountryId}
                                options={countries}
                            />
                            <FormTextInput
                                label="Status"
                                name="status"
                                value={status}
                                type="text"
                                handleChange={setStatus}
                            />
                        </BaseForm>
                    </th>
                </tr>
                </thead>
                <tbody>
                {papers.map(paper =>
                    <PapersTableRow
                        key={paper.id}
                        paper={paper}
                        brands={brands}
                        bindingTypes={bindingTypes}
                        paperTypes={paperTypes}
                        paperFormats={paperFormats}
                        countries={countries}
                        setShowLoader={setShowLoader}
                        setErrors={setErrors}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Papers;
