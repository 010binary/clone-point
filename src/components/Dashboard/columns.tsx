"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pen, Trash2 } from "lucide-react"
import { BiChevronDown } from "react-icons/bi"
import { MdMoreVert } from "react-icons/md"
import { openModal } from "../Redux/modal"
import { useAppDispatch } from "../set-up/redux/hooks"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Branch = {
  branchName: string,
  branchAddress: string,
  city: string,
  customerServiceManager: string,
  operationManager: string,
}

export const columns: ColumnDef<Branch>[] = [
  {
    accessorKey: "branchName",
    header: ()=>(
     <HeaderStyle title="Branch Name"/>
    ),
  },
  {
    accessorKey: "branchAddress",
    header: ()=>(
      <HeaderStyle title="Branch address"/>
     ),
  },
  {
    accessorKey: "city",
     header: ()=>(
     <HeaderStyle title="City"/>
    ),
  },
  {
    accessorKey: "customerServiceManager",
     header: ()=>(
     <HeaderStyle title="Customer service Manager"/>
    ),
  },
  {
    accessorKey: "operationManager",
     header: ()=>(
     <HeaderStyle title="Operation manager"/>
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

  const handleView = () => { 
    console.log('View clicked')
    dispatch(openModal({ modalType: 'VIEWBRANCHMODAL', modalData: {} }))
  }

  const handleEdit = () => { 
    console.log('Edit clicked')
    dispatch(openModal({ modalType: 'EDITBRANCHMODAL', modalData: {} }))
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
