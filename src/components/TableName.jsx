import React from 'react';

const TableName = ({tableName}) => {
    return (
        <h1>
            <span className="blue"></span>{tableName}<span className="blue"></span><span className="yellow"></span>
        </h1>
    );
};

export default TableName;
