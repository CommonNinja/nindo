import React, { useMemo } from 'react'
import { TableInstance, useSortBy, useTable } from 'react-table'

import './dataTable.scss';

interface IDataTableProps {
    className?: string
}

export const DataTable = (props: IDataTableProps) => {
    const { className } = props

    const columns: any = useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
            {
                Header: 'Column 2',
                accessor: 'col3',
            },
        ],
        []
    )

    const data: any = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                col3: 1
            },
            {
                col1: 'react-table',
                col2: 'rocks',
                col3: 3
            },
            {
                col1: 'whatever',
                col2: 'you want',
                col3: 2
            },
        ],
        []
    )

    const tableInstance = useTable(
        {
            columns, data
        },
        useSortBy
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table className="data-table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {column.isSorted ? (column.isSortedDesc ? ' -' : ' +') : ' '}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
