'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import React, { ReactNode } from 'react'
import { closeModal } from '@/redux/features/modalSlice'
import EditBranchModal from './_components/EditBranchModal'
import DeleteBranchModal from './_components/DeleteBranchModal'
import ViewBranchModal from './_components/ViewBranchModal'

const ModalProvider = ({ children }:{ children: ReactNode }) => {
const dispatch = useAppDispatch()
const {modalData, modalType} = useAppSelector((state: RootState) => state.modalSlice)

const Modalclose =()=>{
    dispatch(closeModal())
}

// 'EDITBRANCHMODAL' | 'CREATEBRANCHMODAL' |

  return (
    <main>
      {modalType === 'EDITBRANCHMODAL' && (<EditBranchModal modalOpen={modalType === 'EDITBRANCHMODAL'} modalData={modalData} closeModal={Modalclose}/>)}
      {modalType === 'DELETEBRANCHMODAL' && (<DeleteBranchModal modalOpen={modalType === 'DELETEBRANCHMODAL'} modalData={modalData} closeModal={Modalclose}/>)}
      {modalType === 'VIEWBRANCHMODAL' && (<ViewBranchModal modalOpen={modalType === 'VIEWBRANCHMODAL'} modalData={modalData} closeModal={Modalclose}/>)}




            {/* modals should go up */}

    {children}
    </main>
  )
}

export default ModalProvider