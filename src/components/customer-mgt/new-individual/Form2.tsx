"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import  Dropzone  from "react-dropzone";
import React, { useEffect, useState } from "react";
import { useImageTobase64 } from "@/hooks/useImageTOBase64";
import { FormikProps } from "formik";
import Circleloader from "@/components/common/Circleloader";


const FormTwo =  <T,>({ formik, changePage }: ChildComponentProps<T>) => {
  
  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(3)
  };


  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Identification</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification</label>
                <select name="identification.identificationType" id="" onChange={formik.handleChange} className="formInput">
                  <option value="nationalId">National ID</option>
                  <option value="intlPassport">International Passport</option>
                  <option value="votersCard">Voters Card</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Other (Specify)</label>
                <input type="text" name="identification.other" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification Number</label>
                <input type="text" name="identification.identificationNumber" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Issue Date</label>
                <input type="text" name="identification.issueDate" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Expiration Date</label>
                <input type="text" name="identification.expirationDate" className="formInput" />
              </div>
            </div>

            <ImageInputCard
            formik={formik}
            name="identification.frontOfIdCardImageBase64String"
            title="Upload Front Copy of The ID card"
            />
            <ImageInputCard
            formik={formik}
            name="identification.backOfIdCardImageBase64String"
            title="Upload Back Copy of The ID card"
            />
          </div>
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
          <button
            onClick={()=>changePage(1)}
            className="border-pryColor border hover:scale-[0.98] transition-all ease-linear text-pryColor py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};



const ImageInputCard = <T,>({
  formik,
  name,
  title,
}: {
  formik: FormikProps<T>,
  name: string,
  title: string,
}) => {
  const { base64Image, cancelConversion, convertImageToBase64, isLoading } = useImageTobase64();
  const [placeHolder, setplaceHolder] = useState<string>()

  const handleImageUpload = async (File: File) => {
    if (File) {
      setplaceHolder(File.name)
      convertImageToBase64(File)
    }
  }

  useEffect(() => {
    if (base64Image) {
      formik.setFieldValue(name, base64Image)
    }
    //eslint-disable-next-line
  }, [base64Image])

  return (
    <div className="flex flex-col gap-2 mt-1">
      <p className="text-sm font-medium text-[#404B7C]">
        {title}
      </p>
      <div className="flex items-center gap-3 w-full ">
        <Dropzone onDrop={
          (acceptedFiles) => {
            // setIdCard([...idCard, ...acceptedFiles])
            handleImageUpload(acceptedFiles[0])
          }
        } maxFiles={1}>
          {({ getRootProps, getInputProps }) => (
            <div className="border border-dashed rounded-lg border-pryColor h-24" {...getRootProps()}>
              <input {...getInputProps({ accept: 'image/*' })} />
              {/* {placeHolder ?
              (
                <>{placeHolder}</>
              )
              : (
              
              <div className="py-5 px-3 flex flex-col gap-1">
                <p className="text-xs md:text-sm text-pryColor">
                  Drag or click to upload file
                </p>
                <p className="text-xs text-[#575757]">
                  Supported formats: JPEG, JPG or PNG
                </p>
                <Circleloader/>
              </div>
            )} */}
              <Placeholder data={placeHolder ? placeHolder : ''} isLoading={isLoading} />
            </div>
          )}
        </Dropzone>

        {/* I dont thik this btn is important */}
        {/* <button className="bg-[#6699FF] py-1.5 px-4 text-white text-xs md:text-sm">
        Upload
      </button> */}
      </div>
      <aside className=" text-[10px] opacity-45">** Upload a <strong>CLEAR</strong> copy to avoid errors **</aside>
    </div>
  )
}


const Placeholder=({
  data,
  isLoading
}:
{
  data:string,
  isLoading:boolean
})=>{

  const UploadPlaceholder=()=>{
    return(
      <>
       <p className="text-xs md:text-sm text-pryColor">
          Drag or click to upload file
        </p>
        <p className="text-xs text-[#575757]">
          Supported formats: JPEG, JPG or PNG
        </p>
      </>
    )
  }

  return(
    <div className="py-5 px-3 flex flex-col gap-1">
      {
          (data && !isLoading ) ?
          <>{data}</>
          :(!data && !isLoading )?(
            <UploadPlaceholder/>
          ):<Circleloader/>
      }
    </div>
  )
}

export default FormTwo;
