'use client'
import { useAppDispatch } from '@/components/set-up/redux/hooks'
import { APICall } from '@/utils/apicall'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'


const dummyFormData = new FormData();
dummyFormData.append('username', 'stvolutosin69@gmail.com');
dummyFormData.append('password', 'Admin@1234');
dummyFormData.append('grant_type', 'password');

export const authSIgnin = async (formData: FormData) =>
  axios.post(
    `${'https://gateway.ezoneapps.com:30002'}/ezone-api-authservice/oauth/token`,
    formData
  );

interface DevLoginProps {
    children: React.ReactNode;
}

const Devlogin = ({ children }: DevLoginProps) => {
        const { data, error } = useQuery({
            queryKey: ["auth"],
            queryFn: async () => {
                const response = await APICall(authSIgnin, [dummyFormData]);
                return response;
            },
            staleTime: Infinity,
        })

console.log(data)
console.log(error)
  return (
    <>
    {children}
    </>
  )
}

export default Devlogin