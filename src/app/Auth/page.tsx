'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { getAllCustomers } from '../../../services'
import { APICall } from '@/utils/apicall'
import Cookies from "js-cookie";
import { authLogin } from '@/components/Redux/auth'
import { useAppDispatch, useAppSelector } from '@/components/set-up/redux/hooks'
import { RootState } from '@/components/set-up'

const Page = () => {
    const searchParams = useSearchParams()
    const { token:stateToken } = useAppSelector((state: RootState) => state.auth)
    const dispatch= useAppDispatch()
    const token = searchParams.get('key')
    console.log(token)


 const { data } = useQuery({
     queryKey: ["authee"],
     queryFn: async () => {
         const response = await APICall(getAllCustomers);
         Cookies.set('tkn', JSON.stringify(token))
         return response;
     },
     staleTime: Infinity,
     enabled: !!stateToken
 });

useEffect(()=>{
    if (token) {
        dispatch(
            authLogin({
                token: token,
                user: 'User',
            }),
        );
    // Cookies.set('tkn', JSON.stringify(token))
    }

},[token, dispatch])

console.log(data)
  return (
    /* From Uiverse.io by clarencedion */ 
<div className="flex flex-col gap-5 items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-pryColor border-b-pryColor animate-spin"
       style={{
            animationDuration: '3s'
       }}
      ></div>

      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-pryColor animate-spin"
        style={{
            animationDuration: '2s',
            animationDirection: 'reverse'
        }}
      ></div>
    </div>
    <div
      className="absolute inset-0 bg-gradient-to-tr from-pryColor/10 via-transparent to-pryColor/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
  <p>Checking Authourization</p>
</div>

  )
}

export default Page