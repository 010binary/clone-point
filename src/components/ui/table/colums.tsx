import { ColumnDef } from "@tanstack/react-table";
import {
  AllRolesData,
  CustomerDetail,
} from "../../../pages/dashboard/crm/services/get-all-customer.api";
// types/entities.ts

export interface Role {
  id: string;
  name: string;
}

export const userColumns: ColumnDef<AllRolesData>[] = [
  {
    id: "name",
    header: " Customer Type",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerType}</p>
    ),
  },
  {
    id: "email",

    header: "Title",
    cell: ({ row }) => (
      <p className="font-medium">
        {row.original?.customerDetail.gender === "Male" ? "Mr" : "Mis"}
      </p>
    ),
  },
  {
    id: "fnmae",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "First Name",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.firstName}</p>
    ),
  },
  {
    id: "mname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Middle Name",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.middleName}</p>
    ),
  },
  {
    id: "lname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Last Name",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.lastName}</p>
    ),
  },
  {
    id: "bname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Business Name",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.businessName}</p>
    ),
  },
];
