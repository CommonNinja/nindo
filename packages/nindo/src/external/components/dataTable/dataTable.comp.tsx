import React, { useEffect, useMemo } from 'react'
import { Filter } from './filter.comp';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './dataTable.scss';

interface IDataTableProps {
    className?: string
    pageSize?: number
    disableSearch?: boolean
    disablePagination?: boolean
    headers: string[]
    rows: Array<Array<any>>
}

export const DataTable = (props: IDataTableProps) => {
    const { className, rows: tableRows, headers, disableSearch = false, pageSize = 20, disablePagination = false } = props

    const tableHeadersObj = headers.map((header: string) => ({
        Header: header,
        accessor: header,
    }))

    const tableRowsObj = tableRows.map((row, idx) => {
        let dataObj: any = {}
        headers.forEach((header, innerIdx) => {
            dataObj[header] = row[innerIdx]
        })
        return dataObj
    })

    const columns: any = useMemo(
        () => tableHeadersObj,
        []
    )

    const data: any = useMemo(
        () => tableRowsObj,
        []
    )
    const tableInstance = useTable<any>(
        {
            columns, data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        page,
        state,
        previousPage,
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage,
        state: { pageIndex },
    } = tableInstance as any

    function renderSortArrow(direction: 'top' | 'bottom') {
        return (
            <small className={`sort-arrow ${direction}`}>
                {direction === 'bottom' ? ' ▼' : ' ▲'}
            </small>
        )
    }

    useEffect(() => {
        setPageSize(pageSize)
    }, [disablePagination])

    return (
        <div className={`data-table-wrapper ${className || ''}`}>
            {!disableSearch &&
                <Filter globalFilter={state.globalFilter} preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} />
            }
            <table className="data-table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {column.isSorted ? (column.isSortedDesc ? renderSortArrow('bottom') : renderSortArrow('top')) : ' '}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {!disablePagination && page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}

                    {disablePagination && rows.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {

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
            {!disablePagination &&
                <div className="table-pagination">
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    {pageIndex + 1}/{Math.ceil(rows.length / pageSize)}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            }
        </div >
    )
}

