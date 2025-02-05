'use client'
import { Button } from '@/components/ui/button'
import { APICall } from '@/utils/apicall';
import { API_URL } from '@/utils/varaibles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export const getAutomatedRules = async () =>
	axios.get(
		`${API_URL}/posts`,
	);

const Page = () => {

const { data } = useQuery({
    queryKey: ["hshs"],
    queryFn: async()=>{
        const response = await APICall(getAutomatedRules);
        return response
        },
        staleTime: Infinity,
})
    
    
    console.log(data)
  return (
    <section className=' space-y-10 mx-5 md:mx-10 max-w-screen-lg'>
        <header>
            <h1 className=' text-lg font-semibold'>
                SMS
            </h1>
        </header>
        <main className=' '>
            <form action="" className=' space-y-5'>
            <Input variant='default' label='Select User' /> 
            <Input variant='default' label='SMS Title' /> 
            <Input type={'textarea'} variant='default' label='Message Content' /> 

            <div className=" btns  pt-20 flex max-md:flex-col items-center justify-between gap-10 font-medium text-lg">
                <Button className=' w-full '>
                    Send
                </Button>
                <Button variant={'outline'} className=' w-full '>
                    Cancel
                </Button>
            </div>
            </form>
        </main>
    </section>
  )
}


const Input = ({
    variant,
    type,
    label,
}) => {
    return (
        <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
            <p className="px-3 py-3  min-w-[150px] text-sm text-gray-500 font-medium md:min-w-[150px]">{label}</p>
            <div className="flex items-center w-full  border-l min-h-full">
                {
                    type === 'textarea' ? (
                        <textarea
                            rows={7}
                            placeholder="Search here"
                            className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="Search here"
                            className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                        />
                    )
                }
            </div>
        </div>
    )
}


export default Page