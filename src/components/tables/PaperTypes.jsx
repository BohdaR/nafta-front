import React, {useState} from 'react';
import TableName from "../TableName";
import BaseForm from "../forms/BaseForm";
import FormTextInput from "../inputs/FormTextInput";
import PaperTypesTableRow from "./rows/PaperTypesTableRow";

const PaperTypes = ({paperTypes, setPaperTypes, setShowLoader, setErrors}) => {
    const [name, setName] = useState('')

    return (
        <div className="container">
            <TableName
                tableName="paper_formats"
                setRows={setPaperTypes}
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
                            urlTableName="paper_formats"
                            tableRows={paperTypes}
                            setTableRows={setPaperTypes}
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
                {paperTypes.map(paperType =>
                    <PaperTypesTableRow
                        key={paperType.id}
                        paperType={paperType}
                        paperTypes={paperTypes}
                        setErrors={setErrors}
                        setShowLoader={setShowLoader}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default PaperTypes;
