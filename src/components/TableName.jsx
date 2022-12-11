import React, {useState} from 'react';
import {loadRows} from "../useAPI/useAPI";

const TableName = ({tableName, setRows, setShowLoader, setErrors}) => {
    const [name, setName] = useState('')

    return (
        <h1 className="table-headline">
            <div>
                <span className="blue">Table </span><span className="yellow">{tableName}</span>
            </div>
            <div className="search-form">
                <input
                    autoFocus
                    value={name}
                    onChange={(e) => {
                        loadRows(
                            `${process.env.REACT_APP_API_HOST}/api/v1/${tableName}?name=${e.target.value}`,
                            setShowLoader,
                            setRows,
                            setErrors,
                        );
                        setName(e.target.value)
                    }}
                    placeholder="Пошук..."
                    type="search"
                />
            </div>
        </h1>
    );
};

export default TableName;


