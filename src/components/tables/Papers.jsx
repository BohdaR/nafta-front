import React from 'react';
import TableName from "../TableName";
import PapersTableRow from "./rows/PapersTableRow";
import PapersForm from "../forms/PapersForm";

const Papers = ({papers, setErrors, ...props}) => {

    return (
        <div className="container">
            <TableName
                tableName="papers"
                setRows={props.setPapers}
                setShowLoader={props.setShowLoader}
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
                        <PapersForm papers={papers} {...props} />
                    </th>
                </tr>
                </thead>
                <tbody>
                {papers.map(paper =>
                    <PapersTableRow
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
