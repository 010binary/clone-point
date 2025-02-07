import React, { useState } from 'react'
import { Modal } from '../Modal'
import { FaXmark } from 'react-icons/fa6'
import FormOne from '@/components/customer-mgt/new-individual/Form1'
import FormTwo from '@/components/customer-mgt/new-individual/Form2'
import FormThree from '@/components/customer-mgt/new-individual/Form3'
import FormFour from '@/components/customer-mgt/new-individual/Form4'
import { useFormik } from 'formik'
import { ICInitialValues, ICvalidationSchema } from '@/app/customer-management/individual/_components/data'
const deleteTitle = ' CREATE INDIVIDUAL CUSTOMER'

// eslint-disable-next-line
const ICFormCreateModal = ({ modalOpen, modalData, closeModal }: { modalOpen: boolean, modalData: any, closeModal: () => void }) => {
    const [pickForm, setPickForm] = useState(1)
    const formik = useFormik({
        initialValues: ICInitialValues,
        validationSchema: ICvalidationSchema,
        onSubmit: (values) => {
            console.log('Form Data:', values);
        }
    })
    console.log('Form Data:', formik.values);
    return (
        <Modal show={modalOpen} onClose={closeModal} >
            <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                    <h1 className=' text-lg'>{deleteTitle}</h1>
                    <FaXmark onClick={closeModal} className=' size-7' />
                </header>
                <main className=' p-2 py-5 max-h-[500px] overflow-y-scroll'>
                                {pickForm === 1 && <FormOne formik={formik} changePage={setPickForm} />}
                                {pickForm === 2 && <FormTwo changePage={setPickForm} />}
                                {pickForm === 3 && <FormThree changePage={setPickForm} />}
                                {pickForm === 4 && <FormFour />}
                </main>
            </section>
        </Modal>
    )
}

export default ICFormCreateModal