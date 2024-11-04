import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

type GenericTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

const GenericTable = <T,>({ data, columns }: GenericTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-fixed border-collapse border border-gray-300">
        {/* Header */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-[#0749941F]">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className={`border border-gray-300 px-3 py-2 text-center text-sm font-semibold ${
                    header.column.id === "CustomerType"
                      ? "w-[30%]"
                      : header.column.id === "PhoneNumber"
                      ? "w-[30%]"
                      : header.column.id === "CustomerCode"
                      ? "w-[30%]"
                      : header.column.id === "BusinessName"
                      ? "w-[30%]"
                      : "w-[20%]"
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Body */}
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-100"
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={`border border-gray-300 px-3 py-2 text-center text-sm ${
                      cell.column.id === "email"
                        ? "w-[35%]"
                        : cell.column.id === "organization"
                        ? "w-[30%]"
                        : cell.column.id === "orgemail"
                        ? "w-[30%]"
                        : cell.column.id == "teamMember"
                        ? "w-[20%]"
                        : "w-[12%]"
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-40 text-center px-3 py-2"
              >
                Opps Nothing Here!!!!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default GenericTable;
