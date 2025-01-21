"use client";
import { countries } from "@/lib/customer-management/countries";
import { setPickForm } from "@/redux/features/customerSlice";
import { useAppDispatch } from "@/redux/hooks";

const FormOne = () => {
  const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setPickForm(2));
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
                <select name="" id="" className="formInput">
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">First Name</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Middle Name</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Last Name</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Mobile Phone</label>
                <input type="number" className="formInput spin-button-none" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Date of Birth</label>
                <input type="date" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">BVN</label>
                <input type="number" className="formInput spin-button-none" />
              </div>
            </div>
            <button className="bg-[#6699FF] text-white px-2.5 py-1.5 w-fit">
              Validate BVN
            </button>
            {/* bottom */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Account Type</label>
                <select name="" id="" className="formInput">
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="Fixed Deposit">Fixed Deposit</option>
                  <option value="Dollar Account">Dollar Account</option>
                  <option value="My pikin Savings">My pikin Savings</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Gender</label>
                <select name="" id="" className="formInput">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Marital Status</label>
                <select name="" id="" className="formInput">
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Citizenship</label>
                <select name="" id="" className="formInput">
                  <option value="">select</option>
                  {countries?.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Level of Education</label>
                <select name="" id="" className="formInput">
                  <option value="SSCE">SSCE</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="FSLC">First school Leaving Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>
          </div>
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

export default FormOne;
