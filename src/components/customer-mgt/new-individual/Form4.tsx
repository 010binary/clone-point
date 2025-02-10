"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";

const FormFour =  <T,>({ formik, changePage }: ChildComponentProps<T>) => {
  
  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Employment Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Employment Status</label>
                <select onChange={formik.handleChange} name="employment.employmentStatus" id="" className="formInput">
                  <option value="Employed">Employed</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
            </div>
            {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Net Monthly Income</label>
                <input name='employment.netMonthlyIncome' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Current Employer</label>
                <input name='employment.currentEmployer' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Sector</label>
                <select name="employment.sector" onChange={formik.handleChange} id="" className="formInput">
                  <option value="Banking">Banking</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Health">Health</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Government">Government Agency</option>
                  <option value="Oil">Oil and Gas</option>
                </select>
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Email</label>
                <input name='employment.officeEmail' type="email" className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Tax Number</label>
                <input name='employment.taxNumber' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Pension Number</label>
                <input name='employment.pensionNumber' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Address</label>
                <input name='employment.officeAddress' type="text" onChange={formik.handleChange} className="formInput" />
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
          <button className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg">
            Save
          </button>
          <button
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
