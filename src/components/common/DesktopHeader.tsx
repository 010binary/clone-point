"use client"
import React from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import Color2 from "@/assets/header/Color2";
import Color1 from "@/assets/header/Color1";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { KeyRoundIcon, User2 } from 'lucide-react';
import { GiExitDoor } from 'react-icons/gi';
import { useAppDispatch } from '@/redux/hooks';
import { openModal } from '@/redux/features/modalSlice';
import { useRouter } from 'next/navigation';


const DesktopHeader = () => {
  return (
    <div
      style={{
        borderTopLeftRadius: "32px",
        borderBottomRightRadius: "32px",
      }}
      className="h-[49px] lg:w-[97%] bg-[#1a88e1] relative flex items-center justify-end  overflow-x-hidden flex-shrink-0"
    >
      <div className="h-full hidden lg:block absolute lg:right-[33.5rem]">
        <Color1 />
      </div>
      <div className="h-full hidden lg:block absolute lg:right-60">
        <Color2 />
      </div>
      <div className="flex items-center gap-4 lg:gap-8 mr-4 lg:mr-8">
        <RiMessage2Line size={26} color="#E4E4E4" />
        <MdHelp size={26} color="#E4E4E4" />
        <ActionsComponent />
      </div>
    </div>
  )
}

const ActionsComponent = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleChangePassword = () => { 
    console.log('View clicked')
     dispatch(openModal({ modalType: 'CHANGEPASSWORDMODAL', modalData: {} }))
  }

  const handleEdit = () => { 
    console.log('Edit clicked')
    router.push('/settings/profile')
  }

  const handleDelete = () => { 
    console.log('Delete clicked')
  }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 outline-none">
        <FaCircleUser size={26} color="#E4E4E4" />
        <p className="text-white text-xs md:text-sm lg:text-base">
          Joy Essien
        </p>
        <GoTriangleDown color="white" />
      </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="shadow-xl mt-2 text-white stroke-white bg-pryColor mr-2 p-2 space-y-2 min-w-[190px]">
          <DropdownMenuItem onClick={handleEdit} className="flex gap-3">
            <User2/>
            <p>Manage profile</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleChangePassword} className="flex gap-3">
            <KeyRoundIcon/>
            <p>Change password</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete} className="flex gap-3">
            <GiExitDoor/>
            <p>Log out</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
export default DesktopHeader