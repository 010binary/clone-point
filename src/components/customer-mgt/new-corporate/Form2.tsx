"use client";

import { CCFormTypes } from "@/app/customer-management/corporate/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { countries } from "@/lib/customer-management/countries";


const Form2 = ({ formik, changePage }: ChildComponentProps<CCFormTypes>) => {
  // const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(3)
    // dispatch(setCorporateForm(3));
  };

  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Address Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[80%]">
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Address</label>
                <input onChange={formik.handleChange} value={formik.values.address.address1} name={'address.address1'} type="text" className="formInput" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Residential Status</label>
                <select  id="" className="formInput" onChange={formik.handleChange} value={formik.values.address.residentialStatus} name={'address.residentialStatus'}>
                  <option value="Rented">Rented</option>
                  <option value="Owed">Owned</option>
                  <option value="Living">Living with Family</option>
                  <option value="provided">Provided by Employer</option>
                </select>
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">State</label>
                <input onChange={formik.handleChange} value={formik.values.address.state} name={'address.state'} type="text" className="formInput" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">City</label>
                <input onChange={formik.handleChange} value={formik.values.address.city} name={'address.city'} type="text" className="formInput" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">LGA</label>
                <input onChange={formik.handleChange} value={formik.values.address.lga} name={'address.lga'} type="text" className="formInput" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Country</label>
                <select  id="" className="formInput" onChange={formik.handleChange} value={formik.values.address.country} name={'address.country'}>
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
                <label className="formLabel">Office phone</label>
                <input onChange={formik.handleChange} value={formik.values.address.officePhone} name={'address.officePhone'} type="number" className="formInput spin-button-none" />
              </div>
            </div>
             {/* // */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Email</label>
                <input onChange={formik.handleChange} value={formik.values.address.email} name={'address.email'} type="email" className="formInput" />
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

export default Form2;
