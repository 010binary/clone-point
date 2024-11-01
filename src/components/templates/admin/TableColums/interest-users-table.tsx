import { ColumnDef } from "@tanstack/react-table";

// types/entities.ts

export interface Role {
  id: string;
  name: string;
}

export const InterestUserColumns: ColumnDef<any>[] = [
  {
    id: "name",
    header: " Transaction ID",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.transactionId}</p>
    ),
  },
  {
    id: "email",

    header: "Start Date",
    cell: ({ row }) => <p className="font-medium">{row.original?.startDate}</p>,
  },
  {
    id: "fnmae",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "End Date",
    cell: ({ row }) => <p className="font-medium">{row.original?.endDate}</p>,
  },
  {
    id: "mname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Account Number",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.accountNumber}</p>
    ),
  },
  {
    id: "lname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Rate",
    cell: ({ row }) => <p className="font-medium">{row.original?.rate}</p>,
  },
  {
    id: "bname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Amount",
    cell: ({ row }) => <p className="font-medium">{row.original?.amount}</p>,
  },
  {
    id: "tname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Type",
    cell: ({ row }) => <p className="font-medium">{row.original?.type}</p>,
  },
];
