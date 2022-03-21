import React, { SetStateAction, useEffect, useMemo, useState } from 'react'
import { TableInstance, useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'

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

    const tableInstance = useTable<any>(
        {
            columns, data
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        pageOptions,
        page,
        state,
        gotoPage,
        previousPage,
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage,
        state: { pageIndex, pageSize },
    } = tableInstance as any

    function renderSortArrow(direction: 'top' | 'bottom') {
        return (
            <small className={`sort-arrow ${direction}`}>
                {direction === 'bottom' ? ' ▼' : ' ▲'}
            </small>
        )
    }

    useEffect(() => {
        setPageSize(1)
    }, [])

    return (
        <div className="data-table-wrapper">

            <Filter globalFilter={state.globalFilter} preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} />
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
                    {page.map((row: any) => {
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
            <div className="table-pagination">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous Page
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                </button>
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[1, 2, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize} >
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div >
    )
}

interface IFilterProps {
    preGlobalFilteredRows: any
    globalFilter: React.SetStateAction<any>
    setGlobalFilter: React.Dispatch<React.SetStateAction<any>>
}

const Filter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }: IFilterProps) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 300)

    return (
        <div className="table-search">
            <label htmlFor="a">search:</label>
            <input type="text" value={value || ''} onChange={(e: any) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
                placeholder={`${count} records...`}
            />
        </div>
    )
}