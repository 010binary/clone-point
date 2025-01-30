import React from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'

const title = 'EDIT'
const description = 'Edit Branch'

// eslint-disable-next-line
const EditBranchModel = ({ modalOpen, modalData, closeModal}:{ modalOpen: boolean,modalData: any, closeModal:()=>void}) => {
    return (
        <Modal show={modalOpen} onClose={closeModal} >
            <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                    <h1 className=' text-lg'>{title}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' px-2 space-y-5'>
                    <h4 className=' font-medium py-3 text-lg'>{description}</h4>
                    <div className=" space-y-7">
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Branch Name</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-2 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Branch Address</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">City</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Customer service manager</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Operation manager</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta space-y-5 pt-20">
                        <button className=' w-full bg-pryColor font-medium text-white rounded-xl py-3'>Create</button>
                        <button className=' w-full text-pryColor font-medium border border-pryColor rounded-xl py-3'>Delete</button>
                    </div>
                </main>

            </section>
        </Modal>
    )
}

export default EditBranchModel