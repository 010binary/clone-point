/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table";
import UpdateInterest from "../update-interest";
import { Edit, Trash } from "iconsax-react";
import { MainEntity } from "../../../../api/admin/interest/ApiResponse/get-all-loan-type-response";
import DeleteInterestRate from "../delete-interest";

// types/entities.ts

export interface Role {
  id: string;
  name: string;
}

export const InterestUserColumns: ColumnDef<MainEntity>[] = [
  {
    id: "name",
    header: " Name",
    cell: ({ row }) => <p className="font-medium">{row.original?.name}</p>,
  },
  {
    id: "bname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Description",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.description}</p>
    ),
  },
  {
    id: "email",

    header: "Minimum Tenure",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.minimumTenure}</p>
    ),
  },
  {
    id: "fnmae",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Maximum Tenure",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.maximumTenure}</p>
    ),
  },
  {
    id: "mname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Interest Rate",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.interestRate}</p>
    ),
  },
  // {
  //   id: "lname",
  //   // accessorKey: 'updatedAt',
  //   // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
  //   header: "Org Id",
  //   cell: ({ row }) => <p className="font-medium">{row.original?.orgId}</p>,
  // },

  {
    id: "tname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Action",
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-4 ">
        <UpdateInterest userData={row.original}>
          <Edit
            size={20}
            // color="#FF8A65"
            className="cursor-pointer"
            variant="Linear"
          />
        </UpdateInterest>
        <DeleteInterestRate userData={row.original}>
          <Trash className="text-red-500 cursor-pointer" size={20} />
        </DeleteInterestRate>
      </div>
    ),
  },
];
