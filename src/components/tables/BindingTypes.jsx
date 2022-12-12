import React, {useState} from 'react';
import TableName from "../TableName";
import BaseForm from "../forms/BaseForm";
import FormTextInput from "../inputs/FormTextInput";
import BindingTypesRow from "./rows/BindingTypesRow";

const BindingTypes = ({bindingTypes, setBindingTypes, setShowLoader, setErrors}) => {
    const [name, setName] = useState('')

    return (
        <div className="container">
            <TableName
                tableName="countries"
                setRows={setBindingTypes}
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
                            tableRows={bindingTypes}
                            setTableRows={setBindingTypes}
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
                {bindingTypes.map(bindingType =>
                    <BindingTypesRow
                        key={bindingType.id}
                        bindingType={bindingType}
                        bindingTypes={bindingTypes}
                        setErrors={setErrors}
                        setShowLoader={setShowLoader}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default BindingTypes;
