import React, {Fragment} from 'react';
import TableName from "../TableName";
import PaperTableRow from "./PaperTableRow";
import {Alert} from "@mui/material";

const Papers = ({papers, ...props}) => {
    return (
        <Fragment>
            <TableName tableName="papers"/>
            <Alert
                onClose={() => {}}
                style={{ width: 400}}
            >
                This is a success alert — check it out!
            </Alert>
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
                    <PaperTableRow
                        key={paper.id}
                        paper={paper} {...props}
                    />
                )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default Papers;
