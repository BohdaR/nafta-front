import React, {useState} from 'react';
import TableName from "../TableName";
import BaseForm from "../forms/BaseForm";
import FormTextInput from "../inputs/FormTextInput";
import PaperFormatsTableRow from "./rows/PaperFormatsTableRow";

const PaperFormats = ({paperFormats, setPaperFormats, setShowLoader, setErrors}) => {
    const [name, setName] = useState('')

    return (
        <div className="container">
            <TableName
                tableName="paper_formats"
                setRows={setPaperFormats}
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
                            tableRows={paperFormats}
                            setTableRows={setPaperFormats}
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
                {paperFormats.map(paperFormat =>
                    <PaperFormatsTableRow
                        urlTableName="paper_formats"
                        key={paperFormat.id}
                        paperFormat={paperFormat}
                        paperFormats={paperFormats}
                        setErrors={setErrors}
                        setShowLoader={setShowLoader}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default PaperFormats;
