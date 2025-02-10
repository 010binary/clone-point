'use client'
import React, { useState } from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'
import { FormikProps, useFormik } from 'formik'
import { APICall } from '@/utils/apicall'
import { useMutation } from '@tanstack/react-query'
import { createICAccounts } from '../../../../services'
import Form1 from '@/components/customer-mgt/new-corporate/Form1'
import Form2 from '@/components/customer-mgt/new-corporate/Form2'
import Form3 from '@/components/customer-mgt/new-corporate/Form3'
import { CCFormTypes, CCinitialValues, CCvalidationSchema } from '@/app/customer-management/corporate/_components/data'


export interface ChildComponentProps<T> {
    formik: FormikProps<T>;
    changePage:(prop:number)=>void
  }

const Title = ' CREATE CORPORATE CUSTOMER'


// eslint-disable-next-line
const CCFormCreateModal = ({ modalOpen, modalData, closeModal }: { modalOpen: boolean, modalData: any, closeModal: () => void }) => {
    const [pickForm, setPickForm] = useState(1)
    const formik = useFormik({
        initialValues: CCinitialValues,
        validationSchema: CCvalidationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (Object.keys(formik.errors).length > 0) {
                console.log('Validation Errors:', formik.errors);
            } else {
                mutate(values);
                console.log('Form Data:', values);
            }
        }
    })

    const { mutate } = useMutation({
        mutationFn: async (formData:CCFormTypes) => {
          const response = await APICall(createICAccounts, formData , true);
          return response;
        },
      })
    

    console.log('Form Data:', formik.values);
    console.log('Form Data:', formik.dirty);
    console.log('Form Data:', formik.isValid);
    console.log('Form Data:', formik.errors);
    
    return (
        <Modal show={modalOpen} onClose={closeModal} >
            <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                    <h1 className=' text-lg'>{Title}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' p-2 py-5 max-h-[500px] overflow-y-scroll'>
                                {pickForm === 1 && <Form1 formik={formik} changePage={setPickForm} />}
                                {pickForm === 2 && <Form2 formik={formik} changePage={setPickForm} />}
                                {pickForm === 3 && <Form3 formik={formik} changePage={setPickForm} />}
                </main>
            </section>
        </Modal>
    )
}

export default CCFormCreateModal