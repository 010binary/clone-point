"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pen, Trash2 } from "lucide-react"
import { BiChevronDown } from "react-icons/bi"
import { MdMoreVert } from "react-icons/md"
import { individualCustomerType } from "./data"
import { openModal } from "@/components/Redux/modal"
import { useAppDispatch } from "@/components/set-up/redux/hooks"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


// public title: string,
// public firstName: string,
// public middleName: string,
// public lastName: string,
// public phoneNumber: string,
// public bussinessName: string


export const columns: ColumnDef<individualCustomerType>[] = [
  {
    accessorKey: "title",
    header: ()=>(
     <HeaderStyle title="Title"/>
    ),
  },
  {
    accessorKey: "firstName",
    header: ()=>(
     <HeaderStyle title="First Name"/>
    ),
  },
  {
    accessorKey: "middleName",
    header: ()=>(
      <HeaderStyle title="Middle Name"/>
     ),
  },
  {
    accessorKey: "lastName",
     header: ()=>(
     <HeaderStyle title="Last Name"/>
    ),
  },
  {
    accessorKey: "phoneNumber",
     header: ()=>(
     <HeaderStyle title="Phone Number"/>
    ),
  },
  {
    accessorKey: "bussinessName",
     header: ()=>(
     <HeaderStyle title="Bussiness Name"/>
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
