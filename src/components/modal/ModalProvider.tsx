'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import React, { ReactNode } from 'react'
import EditBranchModel from './_components/EditBranchModel'
import { closeModal } from '@/redux/features/modalSlice'
import DeleteBranchModel from './_components/DeleteBranchModel'

const ModalProvider = ({ children }:{ children: ReactNode }) => {
const dispatch = useAppDispatch()
const {modalData, modalType} = useAppSelector((state: RootState) => state.modalSlice)

const Modalclose =()=>{
    dispatch(closeModal())
}

// 'EDITBRANCHMODAL' | 'CREATEBRANCHMODAL' |

  return (
    <main>
      {modalType === 'EDITBRANCHMODAL' && (<EditBranchModel modalOpen={modalType === 'EDITBRANCHMODAL'} modalData={modalData} closeModal={Modalclose}/>)}
      {modalType === 'DELETEBRANCHMODAL' && (<DeleteBranchModel modalOpen={modalType === 'DELETEBRANCHMODAL'} modalData={modalData} closeModal={Modalclose}/>)}




            {/* modals should go up */}

    {children}
    </main>
  )
}

export default ModalProvider