import { ColumnDef } from "@tanstack/react-table";
import { AllRolesData } from "../../../pages/dashboard/crm/services/get-all-customer.api";
// types/entities.ts

export interface Role {
  id: string;
  name: string;
}

export const userColumns: ColumnDef<AllRolesData>[] = [
  {
    id: "CustomerType",
    header: " Customer Type",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerType}</p>
    ),
  },
  {
    id: "BusinessName",

    header: "Business Name",
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
    id: "lname",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Last Name",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.lastName}</p>
    ),
  },
  {
    id: "CustomerCode",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Customer Code",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.businessName}</p>
    ),
  },

  {
    id: "PhoneNumber",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Phone Number",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.customerDetail.middleName}</p>
    ),
  },

  {
    accessorKey: "info", // Using 'id' as the accessor for linking purposes
    header: "Actions",
    // cell: ({ row }) => (
    //   <div className="flex ">
    //     <NewClear userData={row.original as unknown as SingleClearContent}>
    //       <Button
    //         type="button"
    //         className="bg-transparent hover:bg-transparent text-black hover:text-black"
    //       >
    //         <FaEye />
    //       </Button>
    //     </NewClear>
    //   </div>
    // ),
  },
];
