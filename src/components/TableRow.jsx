import React from 'react';

const TableRow = ({tableName, id}) => {
    return (
        <td>
            <form action={`${process.env.HOST}/${tableName}/${id}`} method="post">
            </form>
        </td>
    );
};

export default TableRow;
