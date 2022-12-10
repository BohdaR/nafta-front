import React, {useState} from 'react';
import TableName from "../TableName";
import PaperTableRow from "./PaperTableRow";
import {Alert} from "@mui/material";
import FormDialog from "../FormDialog";

const Papers = ({papers, ...props}) => {
    const [errors, setErrors] = useState('');

    return (
        <div className="container">
            {errors ?
            <Alert
                severity="error"
                onClose={() => {setErrors('')}}
                onClick={() => setErrors('')}
                className="alert"
            >
                {errors}
            </Alert> : null
            }
            <TableName tableName="papers"/>
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
                        <FormDialog papers={papers} {...props} />
                    </th>
                </tr>
                </thead>
                <tbody>
                {papers.map(paper =>
                    <PaperTableRow
                        key={paper.id}
                        paper={paper}
                        setErrors={setErrors}
                        {...props}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Papers;
