"use client";
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";
import { toast } from "sonner";

const FormFour =  ({ formik, changePage }: ChildComponentProps<ICInitialValuesType>) => {

  const handleSumit=()=>{
    console.log('data')
    if (formik.errors) {
      toast.error('Fill Your form Correctly')
    }
    formik.submitForm()
  }
  
  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Employment Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Employment Status</label>
                <select 
                  onChange={formik.handleChange} 
                  name="employment.employmentStatus" 
                  value={formik.values.employment?.employmentStatus || ''} 
                  className="formInput"
                >
                  <option value="">Select</option>
                  <option value="Employed">Employed</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
                {formik.touched.employment?.employmentStatus && formik.errors.employment?.employmentStatus && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.employmentStatus}</div>
                )}
              </div>
            </div>
            {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Net Monthly Income</label>
                <input 
                  name='employment.netMonthlyIncome' 
                  type="text" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.netMonthlyIncome || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.netMonthlyIncome && formik.errors.employment?.netMonthlyIncome && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.netMonthlyIncome}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Current Employer</label>
                <input 
                  name='employment.currentEmployer' 
                  type="text" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.currentEmployer || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.currentEmployer && formik.errors.employment?.currentEmployer && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.currentEmployer}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Sector</label>
                <select 
                  name="employment.sector" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.sector || ''} 
                  className="formInput"
                >
                  <option value="">Select</option>
                  <option value="Banking">Banking</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Health">Health</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Government">Government Agency</option>
                  <option value="Oil">Oil and Gas</option>
                </select>
                {formik.touched.employment?.sector && formik.errors.employment?.sector && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.sector}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Email</label>
                <input 
                  name='employment.officeEmail' 
                  type="email" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.officeEmail || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.officeEmail && formik.errors.employment?.officeEmail && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.officeEmail}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Tax Number</label>
                <input 
                  name='employment.taxNumber' 
                  type="text" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.taxNumber || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.taxNumber && formik.errors.employment?.taxNumber && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.taxNumber}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Pension Number</label>
                <input 
                  name='employment.pensionNumber' 
                  type="text" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.pensionNumber || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.pensionNumber && formik.errors.employment?.pensionNumber && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.pensionNumber}</div>
                )}
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Address</label>
                <input 
                  name='employment.officeAddress' 
                  type="text" 
                  onChange={formik.handleChange} 
                  value={formik.values.employment?.officeAddress || ''} 
                  className="formInput" 
                />
                {formik.touched.employment?.officeAddress && formik.errors.employment?.officeAddress && (
                  <div className="text-red-500 text-xs">{formik.errors.employment.officeAddress}</div>
                )}
              </div>
            </div>
               {/* //// */}
            <ImageInputCard
              formik={formik}
              name="employment.cacDocumentBase64String"
              title="Upload CAC Document (For business owner)"
            />
               {/* //// */}
               <ImageInputCard
              formik={formik}
              name="employment.passportPhotographBase64String"
              title="Upload Passport Photograph"
            />
               {/* //// */}
               <ImageInputCard
              formik={formik}
              name="employment.signature"
              title="Upload Signature"
            />
          </div>
          <button
          //  disabled={formik.isSubmitting}
          className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg" type="button" onClick={handleSumit}>
           {formik.isSubmitting? "Saving.." :'Save'}
          </button>
          <button
          // disabled={formik.isSubmitting}
            onClick={()=>changePage(3)}
            className="border-pryColor border hover:scale-[0.98] transition-all ease-linear text-pryColor py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FormFour;
