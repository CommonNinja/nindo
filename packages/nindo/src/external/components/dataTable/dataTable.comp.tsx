import React from 'react'

import './dataTable.scss';

interface IDataTableProps {
    className?: string
}

export const DataTable = (props: IDataTableProps) => {
    const { className } = props

    return (
        <div className={`data-table ${className || ""}`}>

        </div>
    )
}
