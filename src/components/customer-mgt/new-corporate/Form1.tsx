"use client";
import { setCorporateForm } from "@/redux/features/customerSlice";
import { useAppDispatch } from "@/redux/hooks";

const Form1 = () => {
  const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setCorporateForm(2));
  };

  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Customer Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[80%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Mobile Phone</label>
                <input type="number" className="formInput spin-button-none" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business Name</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Registration year</label>
                <input type="date" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Business type</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">No of Employees</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel h-full">Note</label>
                <textarea
                  name=""
                  id=""
                  rows={4}
                  cols={20}
                  className="w-full pl-3 py-2 outline-none h-full border-l"
                />
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

export default Form1;
