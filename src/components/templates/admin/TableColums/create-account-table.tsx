/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table";
// import UpdateInterest from "../update-interest";
// import { Edit } from "iconsax-react";

// types/entities.ts

export interface Role {
  id: string;
  name: string;
}

export const AccountUserColumns: ColumnDef<any>[] = [
  {
    id: "name",
    header: "Number",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.accountNumber}</p>
    ),
  },
  {
    id: "email",

    header: "Balance",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.accountBalance}</p>
    ),
  },
  {
    id: "fnmae",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Type",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.accountType}</p>
    ),
  },

  {
    id: "lname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Customer",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customer.customerType}</p>
    ),
  },
  {
    id: "bname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Branch",
    cell: ({ row }) => (
      <p className=" hidden font-medium">{row.original?.amount}</p>
    ),
  },
  {
    id: "tname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Manager",
    cell: ({ row }) => (
      <p className="hidden font-medium">{row.original?.type}</p>
    ),
  },

  {
    id: "tname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Action",
    // cell: ({ row }) => (
    //   <div className="font-medium">
    //     <UpdateInterest data={row.original}>
    //       <Edit size={18} color="#FF8A65" />
    //     </UpdateInterest>
    //   </div>
    // ),
  },
];
