"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  // eslint-disable-next-line
  data: any
  loading?: boolean

}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md ">
      <Table className="border-b">
        <TableHeader className=" bg-pryColor/20 my-5  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-black py-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className=" ">
          {table.getRowModel().rows?.length && !loading ? (
            table.getRowModel().rows.map((row) => (
                <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className=""
                >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-5">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                </TableRow>
            ))
          ) : !table.getRowModel().rows?.length && !loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          ): table.getRowModel().rows?.length === 0 && loading ?(
              <DataTableSkeleton/>
          ):(<></>)}
        </TableBody>
      </Table>
    </div>
  )
}
export function DataTableSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((row) => (
        <TableRow key={row} className="">
          {[1, 2, 3, 4].map((cell) => (
            <TableCell key={cell} className="py-5">
              <div className="h-4 w-[80%] bg-gray-200 animate-pulse rounded" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}