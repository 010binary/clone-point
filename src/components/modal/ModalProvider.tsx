'use client'
import React, { ReactNode } from 'react'
import EditBranchModal from './_components/EditBranchModal'
import DeleteBranchModal from './_components/DeleteBranchModal'
import ViewBranchModal from './_components/ViewBranchModal'
import ChangePasswordModal from './_components/ChangePasswordModal'
import { closeModal } from '../Redux/modal'
import { RootState } from '../set-up'
import { useAppDispatch, useAppSelector } from '../set-up/redux/hooks'
import ICFormCreateModal from './_components/ICFormCreateModal'
import CCFormCreateModal from './_components/CCFormCreateModal'

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
      {modalType === 'CHANGEPASSWORDMODAL' && (<ChangePasswordModal modalOpen={modalType === 'CHANGEPASSWORDMODAL'} modalData={modalData} closeModal={Modalclose}/>)}
      {modalType === 'ICFORMCREATEMODAL' && (<ICFormCreateModal modalOpen={modalType === 'ICFORMCREATEMODAL'} modalData={modalData} closeModal={Modalclose}/>)}
      {modalType === 'CCFORMCREATEMODAL' && (<CCFormCreateModal modalOpen={modalType === 'CCFORMCREATEMODAL'} modalData={modalData} closeModal={Modalclose}/>)}




            {/* modals should go up */}

    {children}
    </main>
  )
}

export default ModalProvider