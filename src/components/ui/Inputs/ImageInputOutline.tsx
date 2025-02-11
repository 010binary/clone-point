import Circleloader from "@/components/common/Circleloader";
import { useImageTobase64 } from "@/hooks/useImageTOBase64";
import { FormikProps } from "formik";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

export const ImageInputCard = <T,>({
    formik,
    name,
    title,
    value,
  }: {
    formik: FormikProps<T>,
    name: string,
    title: string,
    value?: string
  }) => {
    ///this eslint disble is for cancelconversion, it is not being used yet
    //eslint-disable-next-line
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
                <Placeholder data={placeHolder ? placeHolder : ''} isLoading={isLoading} />
              </div>
            )}
          </Dropzone>
        </div>
        <aside className=" text-[10px] opacity-45">** Upload a <strong>CLEAR</strong> copy to avoid errors **</aside>
      </div>
    )
  }
  
 
  

const Placeholder = ({ data, isLoading }: { data: string, isLoading: boolean }) => {
    return (
        <div className="py-5 px-3 flex flex-col gap-1">
            {
                (data && !isLoading) ?
                    <>{data}</>
                    : (!data && !isLoading) ? (
                        <UploadPlaceholder />
                    ) : <Circleloader />
            }
        </div>
    )
}



const UploadPlaceholder = () => {
        return (
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