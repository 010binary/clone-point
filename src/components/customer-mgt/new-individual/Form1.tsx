"use client";
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { countries } from "@/lib/customer-management/countries";
import { formatDateDDMMYYYY } from "@/utility";
// import { setPickForm } from "@/redux/features/customerSlice";
// import { useAppDispatch } from "@/redux/hooks";

const FormOne = ({ formik, changePage }: ChildComponentProps<ICInitialValuesType>) => {
  // const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(2)
    // dispatch(setPickForm(2));
  };

  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Customer Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[80%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Title</label>
                <select 
                value={formik.values.customerDetail.title}
                name="customerDetail.title" 
                id="customerDetail.title" 
                className="formInput"
                onChange={formik.handleChange}
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
                {formik.errors.customerDetail?.title && <div className="error">{formik.errors.customerDetail.title}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">email</label>
                <input 
                value={formik.values.customerDetail.email}
                type="text" name="customerDetail.email" className="formInput" onChange={formik.handleChange} />
                {formik.errors.customerDetail?.email && <div className="error">{formik.errors.customerDetail.email}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">First Name</label>
                <input type="text" value={formik.values.customerDetail.firstName} name="customerDetail.firstName" className="formInput" onChange={formik.handleChange} />
                {formik.errors.customerDetail?.firstName && <div className="error">{formik.errors.customerDetail.firstName}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Middle Name</label>
                <input type="text" name="customerDetail.middleName" value={formik.values.customerDetail.middleName} onChange={formik.handleChange}  className="formInput" />
                {formik.errors.customerDetail?.middleName && <div className="error">{formik.errors.customerDetail.middleName}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Last Name</label>
                <input type="text" value={formik.values.customerDetail.lastName} name="customerDetail.lastName" onChange={formik.handleChange}  className="formInput" />
                {formik.errors.customerDetail?.lastName && <div className="error">{formik.errors.customerDetail.lastName}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Mobile Phone</label>
                <input type="number"value={formik.values.customerDetail.mobilePhone} name="customerDetail.mobilePhone" onChange={formik.handleChange}  className="formInput spin-button-none" />
                {formik.errors.customerDetail?.mobilePhone && <div className="error">{formik.errors.customerDetail.mobilePhone}</div>}
              </div>
            </div>
            <div className="container">
                <div className="innerContainer">
                <label className="formLabel">Date of Birth</label>
                <input type="date" name="customerDetail.dateOfBirth" value={formik.values.customerDetail.dateOfBirth} onChange={(e)=>formik.setFieldValue('customerDetail.dateOfBirth',formatDateDDMMYYYY(e.target.value))}  className="formInput" />
                {formik.errors.customerDetail?.dateOfBirth && <div className="error">{formik.errors.customerDetail.dateOfBirth}</div>}
              </div>
            </div>
            <div className="container">
                <div className="innerContainer">
                <label className="formLabel">BVN</label>
                <input 
                  type="number" 
                  name="customerDetail.bvn" 
                  value={formik.values.customerDetail.bvn} 
                  onChange={formik.handleChange}  
                  className="formInput spin-button-none" 
                />
                {formik.errors.customerDetail?.bvn && <div className="error">{formik.errors.customerDetail.bvn}</div>}
                </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Account Type</label>
                <select name="customerDetail.accountType" value={formik.values.customerDetail.accountType} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="Fixed Deposit">Fixed Deposit</option>
                  <option value="Dollar Account">Dollar Account</option>
                  <option value="My pikin Savings">My pikin Savings</option>
                </select>
                {formik.errors.customerDetail?.accountType && <div className="error">{formik.errors.customerDetail.accountType}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Gender</label>
                <select name="customerDetail.gender" value={formik.values.customerDetail.gender} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {formik.errors.customerDetail?.gender && <div className="error">{formik.errors.customerDetail.gender}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Citizenship</label>
                <select name="customerDetail.citizenship" value={formik.values.customerDetail.citizenship} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  {countries?.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {formik.errors.customerDetail?.citizenship && <div className="error">{formik.errors.customerDetail.citizenship}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Level of Education</label>
                <select name="customerDetail.levelOfEducation" value={formik.values.customerDetail.levelOfEducation} onChange={formik.handleChange}  className="formInput">
                  <option value="">Select</option>
                  <option value="SSCE">SSCE</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="FSLC">First school Leaving Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="None">None</option>
                </select>
                {formik.errors.customerDetail?.levelOfEducation && <div className="error">{formik.errors.customerDetail.levelOfEducation}</div>}
              </div>
            </div>
          </div>
          <button
            onClick={handleForm}
            // disabled={formik.isSubmitting}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FormOne;
