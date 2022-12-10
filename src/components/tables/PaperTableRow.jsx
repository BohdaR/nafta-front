import React, {Fragment, useState} from 'react';
import SelectInput from "../SelectInput";
import {deleteRequest, post} from "../../useAPI/useAPI";

const PaperTableRow = ({
                           brands,
                           bindingTypes,
                           paperTypes,
                           paperFormats,
                           countries,
                           setShowLoader,
                           setErrors,
                           ...props
                       }) => {
    const [paper, setPaper] = useState(props.paper)
    const [description, setDescription] = useState(paper.description)
    const [name, setName] = useState(paper.name)
    const [paperId, setPaperId] = useState(paper.id)
    const [pieces, setPieces] = useState(paper.pieces)
    const [paperTypeId, setPaperTypeId] = useState(paper.paper_type_id)
    const [density, setDensity] = useState(paper.density)
    const [paperFormatId, setPaperFormatId] = useState(paper.paper_format_id)
    const [brandId, setBrandId] = useState(paper.brand_id)
    const [bindingTypeId, setBindingTypeId] = useState(paper.binding_type_id)
    const [countryId, setCountryId] = useState(paper.country_id)
    const [status, setStatus] = useState(paper.status)
    const [showRow, setShowRow] = useState(true)

    const updateRow = (pk) => {
        setShowLoader(true);
        const data = {
            description: description,
            name: name,
            pieces: pieces,
            paper_type_id: paperTypeId,
            density: density,
            paper_format_id: paperFormatId,
            brand_id: brandId,
            binding_type_id: bindingTypeId,
            country_id: countryId,
            status: status
        }

        post(`${process.env.REACT_APP_API_HOST}/api/v1/papers/${pk}`, data)
            .then(
                (response) => {
                    setShowLoader(false);
                    setPaper(response.data);
                })
            .catch(
                (errors) => {
                    setShowLoader(false);
                    setErrors(errors.response.data.errors.massage)
                }
            )
    }
    const deleteRow = (pk) => {
        setShowLoader(true);
        deleteRequest(`${process.env.REACT_APP_API_HOST}/api/v1/papers/${pk}`)
            .then(
                (response) => {
                    setShowRow(false);
                    setShowLoader(false);
                    setPaper(response.data);
                }
            )
            .catch(
                (error) => {
                    setShowLoader(false);
                    setErrors(error)
                }
            )
    }

    return (
        <Fragment>
            {showRow ?
            <tr>
                <td>
                    <input
                        name="pk"
                        value={paperId}
                        type="text"
                        className="col-value"
                        onChange={(e) => setPaperId(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        name="description"
                        value={description}
                        type="text"
                        className="col-value"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </td>
                <td className="large-field">
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
                        name="pieces"
                        value={pieces}
                        type="number"
                        className="col-value"
                        onChange={(e) => {
                            setPieces(e.target.value);
                        }}
                    />
                </td>
                <td>
                    <SelectInput
                        name="paper_type_id"
                        defaultValue={paperTypeId}
                        options={paperTypes}
                        handleChange={setPaperTypeId}
                    />
                </td>
                <td>
                    <input
                        name="density"
                        value={density}
                        type="number"
                        step="0.01"
                        className="col-value"
                        onChange={(e) => setDensity(e.target.value)}
                    />
                </td>
                <td>
                    <SelectInput
                        name="paper_format_id"
                        defaultValue={paperFormatId}
                        options={paperFormats}
                        handleChange={setPaperFormatId}
                    />
                </td>
                <td>
                    <SelectInput
                        name="brand_id"
                        defaultValue={brandId}
                        options={brands}
                        handleChange={setBrandId}
                    />
                </td>
                <td>
                    <SelectInput
                        name="binding_type_id"
                        defaultValue={bindingTypeId}
                        options={bindingTypes}
                        handleChange={setBindingTypeId}
                    />
                </td>
                <td>
                    <SelectInput
                        name="country_id"
                        defaultValue={countryId}
                        options={countries}
                        handleChange={setCountryId}
                    />
                </td>
                <td>
                    <input
                        name="status"
                        value={status}
                        type=" text"
                        className="col-value"
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        style={{cursor: "pointer"}}
                        value="Save"
                        type="button"
                        className="col-value"
                        onClick={() => updateRow(paperId)}
                    />
                </td>
                <td>
                    <input
                        style={{cursor: "pointer"}}
                        value="Delete"
                        type="button"
                        className="col-value"
                        onClick={() => deleteRow(paperId)}
                    />
                </td>
            </tr>: null
            }
        </Fragment>
    );
};

export default PaperTableRow;
