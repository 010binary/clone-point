import { ColumnDef } from "@tanstack/react-table";
import UpdateInterest from "../update-interest";
import { Edit } from "iconsax-react";

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
  {
    id: "tname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Action",
    cell: ({ row }) => (
      <div className="font-medium">
        <UpdateInterest data={row.original}>
          <Edit size={18} color="#FF8A65" />
        </UpdateInterest>
      </div>
    ),
  },
];
