'use client'
import React, { useState } from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'
import FormOne from '@/components/customer-mgt/new-individual/Form1'
import FormTwo from '@/components/customer-mgt/new-individual/Form2'
import FormThree from '@/components/customer-mgt/new-individual/Form3'
import FormFour from '@/components/customer-mgt/new-individual/Form4'
import { FormikProps, useFormik } from 'formik'
import { ICInitialValues, ICInitialValuesType, ICvalidationSchema } from '@/app/customer-management/individual/_components/data'
import { APICall } from '@/utils/apicall'
import { useMutation } from '@tanstack/react-query'
import { createICAccounts } from '../../../../services'


export interface ChildComponentProps<T> {
    formik: FormikProps<T>;
    changePage:(prop:number)=>void
  }

const deleteTitle = ' CREATE INDIVIDUAL CUSTOMER'


// eslint-disable-next-line
const ICFormCreateModal = ({ modalOpen, modalData, closeModal }: { modalOpen: boolean, modalData: any, closeModal: () => void }) => {
    const [pickForm, setPickForm] = useState(1)
    const formik = useFormik({
        initialValues: ICInitialValues,
        validationSchema: ICvalidationSchema,
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
        mutationFn: async (formData:ICInitialValuesType) => {
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
                    <h1 className=' text-lg'>{deleteTitle}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' p-2 py-5 max-h-[500px] overflow-y-scroll'>
                                {pickForm === 1 && <FormOne formik={formik} changePage={setPickForm} />}
                                {pickForm === 2 && <FormTwo formik={formik} changePage={setPickForm} />}
                                {pickForm === 3 && <FormThree formik={formik} changePage={setPickForm} />}
                                {pickForm === 4 && <FormFour formik={formik} changePage={setPickForm} />}
                </main>
            </section>
        </Modal>
    )
}

export default ICFormCreateModal