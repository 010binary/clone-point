import React from 'react'
import DashboardCards from './DashboardCards'
import AllBranchesHeader from './AllBranchesHeader'

const DashboardHeader = ({ viewMore }) => {
 
    return (
        <>
            {/* <Modal show>
                <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                    <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                        <h1 className=' text-lg'>{title}</h1>
                        <FaXmark className=' size-7' />
                    </header>
                    <main className=' px-2'>
                        <h4 className=' font-medium py-3 text-lg'>{description}</h4>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center lg:w-96 md:w-60">
                                <p className="px-3 py-2 md:py-2 border-r">Search</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-2 md:py-2 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="cta space-y-5">
                            <button className=' w-full bg-pryColor font-medium text-white rounded py-3'>Create</button>
                            <button className=' w-full text-pryColor font-medium border border-pryColor rounded py-3'>Create</button>
                        </div>
                    </main>

                </section>
            </Modal> */}
            {
                viewMore?(
                    <AllBranchesHeader />
                ):(
                    <DashboardCards />
                )
            }
            
        </>
    )
}

export default DashboardHeader