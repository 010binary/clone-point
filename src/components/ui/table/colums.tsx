import { AllRolesData, SingleUser } from "@/types/entities";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import Button from "@/components/ui/buttons/button";
import { ColumnDef } from "@tanstack/react-table";
import DeleteMember from "@/components/templates/settings/modals/delete-member";
import EditTeamMember from "@/components/templates/settings/modals/edit-member-modal";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const userColumns: ColumnDef<AllRolesData>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: " Name",
    cell: ({ row }) => <p className="font-medium">{row.original?.name}</p>,
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "role",
    // accessorKey: 'updatedAt',
    // accessorFn: (row) => formatDate(row.updated_at, "dd-MM-yyyy"),
    header: "Role",
    cell: ({ row }) => (
      <p className="font-medium">{row.original?.right.name}</p>
    ),
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex ">
        <EditTeamMember userData={row.original as unknown as SingleUser}>
          <Button
            type="button"
            className="bg-transparent hover:bg-transparent text-black hover:text-black"
          >
            <FaEdit />
          </Button>
        </EditTeamMember>
        <Link
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          to={`/settings/role-manager/${row.original.id}/details`}
        >
          <FaEye />
        </Link>
        <DeleteMember id={String(row.original.id)}>
          <Button
            // onClick={() => handelDeleteModal(item.id)}
            type="button"
            className="bg-transparent hover:bg-transparent text-black hover:text-black"
          >
            <FaTrash />
          </Button>
        </DeleteMember>
      </div>
    ),
  },
];
