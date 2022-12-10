import React from 'react';

const TableName = ({tableName}) => {
    return (
        <h1>
            <span className="blue">Table </span><span className="yellow">{tableName}</span>
        </h1>
    );
};

export default TableName;
