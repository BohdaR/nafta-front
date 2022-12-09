import React, {Fragment} from 'react';
import TableName from "../TableName";
import SelectInput from "../SelectInput";

const Papers = ({papers, brands, bindingTypes}) => {
    return (
        <Fragment>
            <TableName tableName="papers"/>
            <table className="container">
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
                </tr>
                </thead>
                <tbody>
                {papers.map(paper =>
                    <tr key={paper.id}>
                        <td>
                            <input name="pk"
                                   value={paper.id}
                                   type="text"
                                   className="col-value"
                            />
                        </td>
                        <td><input name=" description" value={paper.description} type=" text" className="col-value"/>
                        </td>
                        <td className=" large-field">
                            <input name="name" value={paper.name} type=" text" className="col-value"/>
                        </td>
                        <td><input name="pieces" value={paper.pieces} type=" text" className="col-value"/></td>
                        <td><input name="paper_type_id" value={paper.paper_type_id} type=" text"
                                   className="col-value"/>
                        </td>
                        <td><input name="density" value={paper.density} type=" text" className="col-value"/></td>
                        <td><input name="paper_format_id" value={paper.paper_format_id} type=" text"
                                   className="col-value"/>
                        </td>
                        <td>
                            <SelectInput name="brand_id" defaultValue={paper.brand_id} options={brands}/>
                        </td>
                        <td>
                            <SelectInput name="binding_type_id" defaultValue={paper.binding_type_id} options={bindingTypes}/>
                        </td>
                        <td><input name="country_id" value={paper.country_id} type=" text" className="col-value"/>
                        </td>
                        <td><input name="status" value={paper.status} type=" text" className="col-value"/></td>
                        <td><input value="Save" type=" submit" className="col-value"/></td>

                        <td><input value="delete" type="submit" className="col-value"/></td>
                    </tr>)}
                </tbody>
            </table>
        </Fragment>
    );
};

export default Papers;
