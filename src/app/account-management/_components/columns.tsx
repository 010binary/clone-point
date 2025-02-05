"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pen, Trash2 } from "lucide-react"
import { BiChevronDown } from "react-icons/bi"
import { MdMoreVert } from "react-icons/md"
import { openModal } from "@/components/Redux/modal"
import { useAppDispatch } from "@/components/set-up/redux/hooks"
import { useRouter } from "next/navigation"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


// firstName: string;
// middleName: string;
// lastName: string;
// phoneNumber: string;
export interface listAccountType {
  number: string;
  balance: string;
  type: string;
  customer: string;
  branch: string;
  manager: string;
}



export const columns: ColumnDef<listAccountType>[] = [
  {
    accessorKey: "number",
    header: ()=>(
     <HeaderStyle title="Number"/>
    ),
  },
  {
    accessorKey: "balance",
    header: ()=>(
      <HeaderStyle title="Balance"/>
     ),
  },
  {
    accessorKey: "type",
     header: ()=>(
     <HeaderStyle title="Type"/>
    ),
  },
  {
    accessorKey: "customer",
     header: ()=>(
     <HeaderStyle title="Customer"/>
    ),
  },
  {
    accessorKey: "branch",
     header: ()=>(
     <HeaderStyle title="Branch"/>
    ),
  },
  {
    accessorKey: "manager",
     header: ()=>(
     <HeaderStyle title="Manager"/>
    ),
  },
  {
    accessorKey: "Actions",
     header: 'Actions',
    cell:({  })=><ActionsComponent/>
  },
]

const ActionsComponent = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleView = () => { 
    console.log('View clicked')
    router.push('/customer-management/individual/view')
  }

  const handleEdit = () => { 
    console.log('Edit clicked')
    router.push('/customer-management/individual/edit')
  }

  const handleDelete = () => { 
    console.log('Delete clicked')
    dispatch(openModal({ modalType: 'DELETEBRANCHMODAL', modalData: {} }))
  }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-0 outline-none">
            <span className="sr-only">Open menu</span>
            <MdMoreVert className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="shadow-xl space-y-2">
          <DropdownMenuItem onClick={handleView} className="flex justify-between">
            <p>View</p>
            <Eye className="stroke-pryColor" />         
          </DropdownMenuItem>
  
          <DropdownMenuItem onClick={handleEdit} className="flex justify-between">
            <p>Edit</p>
            <Pen className="stroke-pryColor" />
          </DropdownMenuItem>
  
          <DropdownMenuItem onClick={handleDelete} className="flex justify-between">
            <p>Delete</p>
            <Trash2 className="stroke-red-700" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

const HeaderStyle=({ title }:{ title: string })=>{
  return(
    <div className=" flex items-center justify-start">
    <p>{title}</p>
    <BiChevronDown className="ml-1 h-4 w-4" />
  </div>
  )
}
