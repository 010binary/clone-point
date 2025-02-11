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
                  <option value="">slect</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
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
              </div>
            </div>
             {/* // */}
             
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business Name</label>
                <input  name="customerDetail.businessName" value={formik.values.customerDetail.businessName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business Type</label>
                <input name="customerDetail.businessType" value={formik.values.customerDetail.businessType} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">BVN</label>
                <input name="customerDetail.bvn" value={formik.values.customerDetail.bvn} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
                         <div className="innerContainer">
                           <label className="formLabel">Citizenship</label>
                           <select name="customerDetail.citizenship" value={formik.values.customerDetail.citizenship} id="" onChange={formik.handleChange}  className="formInput">
                             <option value="">select</option>
                             {countries?.map((country) => (
                               <option key={country} value={country}>
                                 {country}
                               </option>
                             ))}
                           </select>
                         </div>
                       </div>
             {/* // */}
            <div className="container">
                           <div className="innerContainer">
                           <label className="formLabel">Date of Birth</label>
                           <input type="date" value={formik.values.customerDetail.dateOfBirth} name="customerDetail.dateOfBirth" onChange={(e)=>formik.setFieldValue('customerDetail.dateOfBirth',formatDateDDMMYYYY(e.target.value))}  className="formInput" />
                         </div>
                       </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Email</label>
                <input  name="customerDetail.email" value={formik.values.customerDetail.email} onChange={formik.handleChange} type="email" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">First Name</label>
                <input name="customerDetail.firstName" value={formik.values.customerDetail.firstName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Last Name</label>
                <input name="customerDetail.lastName" value={formik.values.customerDetail.lastName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Middle Name</label>
                <input name="customerDetail.middleName" value={formik.values.customerDetail.middleName} onChange={formik.handleChange} type="text" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
             <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Gender</label>
                <select name="customerDetail.gender" id="" value={formik.values.customerDetail.gender} onChange={formik.handleChange}  className="formInput">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Mobile Phone</label>
                <input  name="customerDetail.mobilePhone" value={formik.values.customerDetail.mobilePhone} onChange={formik.handleChange} type="number" className="formInput spin-button-none" />
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Registration year</label>
                <input value={formik.values.customerDetail.registrationYear} name="customerDetail.registrationYear" onChange={formik.handleChange} type="date" className="formInput" />
              </div>
            </div>
               {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">No of Employees</label>
                <input value={formik.values.customerDetail.numberOfEmployees} name="customerDetail.numberOfEmployees" onChange={formik.handleChange} type="text" className="formInput" />
              </div>
            </div>
             {/* // */}
             <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Level of Education</label>
                <select name="customerDetail.levelOfEducation" id="" value={formik.values.customerDetail.levelOfEducation} onChange={formik.handleChange}  className="formInput">
                  <option value="SSCE">SSCE</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="FSLC">First school Leaving Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="None">None</option>
                </select>
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
