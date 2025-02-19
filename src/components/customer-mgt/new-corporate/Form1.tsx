"use client";

import { CCFormTypes } from "@/app/customer-management/corporate/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { countries } from "@/lib/customer-management/countries";
import { formatDateDDMMYYYY } from "@/utility";

const Form1 =  ({ formik, changePage }: ChildComponentProps<CCFormTypes>) => {
  // const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(2)
    // dispatch(setCorporateForm(2));
  };

  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Customer Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[80%]">

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Title</label>
                <select
                  name="customerDetail.title"
                  id=""
                  className="formInput"
                  value={formik.values.customerDetail.title}
                  onChange={formik.handleChange}
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
                {formik.touched.customerDetail?.title && formik.errors.customerDetail?.title && (
                  <div className="text-red-500">{formik.errors.customerDetail.title}</div>
                )}
              </div>
            </div>
           
             {/* // */}
             <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Account Type</label>
                <select name="customerDetail.accountType" id="" onChange={formik.handleChange} value={formik.values.customerDetail.accountType}  className="formInput">
                  <option value="">Select</option>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="Fixed Deposit">Fixed Deposit</option>
                  <option value="Dollar Account">Dollar Account</option>
                  <option value="My pikin Savings">My pikin Savings</option>
                </select>
                {formik.touched.customerDetail?.accountType && formik.errors.customerDetail?.accountType && (
                  <div className="text-red-500">{formik.errors.customerDetail.accountType}</div>
                )}
              </div>
            </div>
             {/* // */}
             
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business Name</label>
                <input  name="customerDetail.businessName" value={formik.values.customerDetail.businessName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.businessName && formik.errors.customerDetail?.businessName && (
                  <div className="text-red-500">{formik.errors.customerDetail.businessName}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business Type</label>
                <input name="customerDetail.businessType" value={formik.values.customerDetail.businessType} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.businessType && formik.errors.customerDetail?.businessType && (
                  <div className="text-red-500">{formik.errors.customerDetail.businessType}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">BVN</label>
                <input name="customerDetail.bvn" value={formik.values.customerDetail.bvn} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.bvn && formik.errors.customerDetail?.bvn && (
                  <div className="text-red-500">{formik.errors.customerDetail.bvn}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
                         <div className="innerContainer">
                           <label className="formLabel">Citizenship</label>
                           <select name="customerDetail.citizenship" value={formik.values.customerDetail.citizenship} id="" onChange={formik.handleChange}  className="formInput">
                             <option value="">Select</option>
                             {countries?.map((country) => (
                               <option key={country} value={country}>
                                 {country}
                               </option>
                             ))}
                           </select>
                           {formik.touched.customerDetail?.citizenship && formik.errors.customerDetail?.citizenship && (
                             <div className="text-red-500">{formik.errors.customerDetail.citizenship}</div>
                           )}
                         </div>
                       </div>
             {/* // */}
            <div className="container">
                           <div className="innerContainer">
                           <label className="formLabel">Date of Birth</label>
                           <input type="date" value={formik.values.customerDetail.dateOfBirth} name="customerDetail.dateOfBirth" onChange={(e)=>formik.setFieldValue('customerDetail.dateOfBirth',formatDateDDMMYYYY(e.target.value))}  className="formInput" />
                           {formik.touched.customerDetail?.dateOfBirth && formik.errors.customerDetail?.dateOfBirth && (
                             <div className="text-red-500">{formik.errors.customerDetail.dateOfBirth}</div>
                           )}
                         </div>
                       </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Email</label>
                <input  name="customerDetail.email" value={formik.values.customerDetail.email} onChange={formik.handleChange} type="email" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.email && formik.errors.customerDetail?.email && (
                  <div className="text-red-500">{formik.errors.customerDetail.email}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">First Name</label>
                <input name="customerDetail.firstName" value={formik.values.customerDetail.firstName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.firstName && formik.errors.customerDetail?.firstName && (
                  <div className="text-red-500">{formik.errors.customerDetail.firstName}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Last Name</label>
                <input name="customerDetail.lastName" value={formik.values.customerDetail.lastName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.lastName && formik.errors.customerDetail?.lastName && (
                  <div className="text-red-500">{formik.errors.customerDetail.lastName}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Middle Name</label>
                <input name="customerDetail.middleName" value={formik.values.customerDetail.middleName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.middleName && formik.errors.customerDetail?.middleName && (
                  <div className="text-red-500">{formik.errors.customerDetail.middleName}</div>
                )}
              </div>
            </div>
             {/* // */}
             <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Gender</label>
                <select name="customerDetail.gender" id="" value={formik.values.customerDetail.gender} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {formik.touched.customerDetail?.gender && formik.errors.customerDetail?.gender && (
                  <div className="text-red-500">{formik.errors.customerDetail.gender}</div>
                )}
              </div>
            </div>
               {/* // */}
               <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Marital Status</label>
                <select name="customerDetail.maritalStatus" value={formik.values.customerDetail.maritalStatus} id="" onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
                {formik.touched.customerDetail?.maritalStatus && formik.errors.customerDetail?.maritalStatus && (
                  <div className="text-red-500">{formik.errors.customerDetail.maritalStatus}</div>
                )}
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Mobile Phone</label>
                <input  name="customerDetail.mobilePhone" value={formik.values.customerDetail.mobilePhone} onChange={formik.handleChange} type="number" className="formInput spin-button-none" />
                {formik.touched.customerDetail?.mobilePhone && formik.errors.customerDetail?.mobilePhone && (
                  <div className="text-red-500">{formik.errors.customerDetail.mobilePhone}</div>
                )}
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Registration year</label>
                <input value={formik.values.customerDetail.registrationYear} name="customerDetail.registrationYear" onChange={formik.handleChange} type="date" className="formInput" />
                {formik.touched.customerDetail?.registrationYear && formik.errors.customerDetail?.registrationYear && (
                  <div className="text-red-500">{formik.errors.customerDetail.registrationYear}</div>
                )}
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">No of Employees</label>
                <input value={formik.values.customerDetail.numberOfEmployees} name="customerDetail.numberOfEmployees" onChange={formik.handleChange} type="text" className="formInput" />
                {formik.touched.customerDetail?.numberOfEmployees && formik.errors.customerDetail?.numberOfEmployees && (
                  <div className="text-red-500">{formik.errors.customerDetail.numberOfEmployees}</div>
                )}
              </div>
            </div>
             {/* // */}
             <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Level of Education</label>
                <select name="customerDetail.levelOfEducation" id="" value={formik.values.customerDetail.levelOfEducation} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="SSCE">SSCE</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="FSLC">First school Leaving Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="None">None</option>
                </select>
                {formik.touched.customerDetail?.levelOfEducation && formik.errors.customerDetail?.levelOfEducation && (
                  <div className="text-red-500">{formik.errors.customerDetail.levelOfEducation}</div>
                )}
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel h-full">Note</label>
                <textarea
                  name="customerDetail.notes"
                  id=""
                  rows={4}
                  cols={20}
                  onChange={formik.handleChange}
                  value={formik.values.customerDetail.notes}
                  className="w-full pl-3 py-2 outline-none h-full border-l"
                />
                {formik.touched.customerDetail?.notes && formik.errors.customerDetail?.notes && (
                  <div className="text-red-500">{formik.errors.customerDetail.notes}</div>
                )}
              </div>
            </div>
          </div>
           {/* // */}
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
