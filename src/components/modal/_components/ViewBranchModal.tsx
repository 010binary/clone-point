import React from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'

const viewTitle = 'View'
const viewDescription = 'View Branch'

// eslint-disable-next-line
const ViewBranchModal = ({ modalOpen, modalData, closeModal }: { modalOpen: boolean, modalData: any, closeModal: () => void }) => {
    return (
        <Modal show={modalOpen} onClose={closeModal} >
            <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                    <h1 className=' text-lg'>{viewTitle}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' px-2 pb-10'>
                    <h4 className=' font-medium py-3 pb-5 text-lg'>{viewDescription}</h4>
                    <div className="grid grid-cols-2 gap-5">
                        <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                        </p>
                        <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                        </p>
                        <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                        </p>
                        <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                        </p>
                        <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                        </p>
                    </div>
                </main>
            </section>
        </Modal>
    )
}

export default ViewBranchModal