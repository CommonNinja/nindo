import React, { useState } from "react"
import { useAsyncDebounce } from "react-table"

interface IFilterProps {
    preGlobalFilteredRows: any
    globalFilter: React.SetStateAction<any>
    setGlobalFilter: React.Dispatch<React.SetStateAction<any>>
}

export const Filter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }: IFilterProps) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value.trim())
    }, 300)

    return (
        <div className="table-search">
            <input type="text" value={value || ''} onChange={(e: any) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
                placeholder='Search...'
            />
        </div>
    )
}