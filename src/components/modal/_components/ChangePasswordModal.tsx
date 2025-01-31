import React from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'

const deleteTitle = 'DELETE'
const deleteDescription = 'Are you sure you want to delete this BRANCH?'

// eslint-disable-next-line
const ChangePasswordModal = ({ modalOpen, modalData, closeModal }: { modalOpen: boolean, modalData: any, closeModal: () => void }) => {
    return (
        <Modal show={modalOpen} onClose={closeModal} >
            <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                    <h1 className=' text-lg'>{deleteTitle}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' px-2'>
                    <h4 className=' font-medium py-3 text-lg'>{deleteDescription}</h4>

                    <div className="cta space-y-5 pt-20">
                        <button className=' w-full bg-red-600 font-medium text-white rounded py-3'>Delete</button>
                        <button onClick={closeModal} className=' w-full text-pryColor font-medium border border-pryColor rounded py-3'>Close</button>
                    </div>
                </main>
            </section>
        </Modal>
    )
}

export default ChangePasswordModal