"use client";

const FormFour = () => {
  
  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Employment Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Employment Status</label>
                <select name="" id="" className="formInput">
                  <option value="Employed">Employed</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Net Monthly Income</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Current Employer</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Sector</label>
                <select name="" id="" className="formInput">
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

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Email</label>
                <input type="email" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Tax Number</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Pension Number</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Address</label>
                <input type="text" className="formInput" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-[#404B7C]">
                  Upload CAC Document{" "}
                  <span className="font-light text-[#404B7C99]">
                    (For business owner)
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="border border-dashed rounded-lg border-pryColor">
                    <div className="py-5 px-3 flex flex-col gap-1">
                      <p className="text-xs md:text-sm text-pryColor">
                        Drag or click to upload file
                      </p>
                      <p className="text-xs text-[#575757]">
                        Supported formats: JPEG, JPG or PNG
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#6699FF] py-1.5 px-4 text-white text-xs md:text-sm">
                    Upload
                  </button>
                </div>
              </div>

              <p className="font-semibold lg:text-lg">Images</p>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-[#404B7C]">
                  Upload Passport Photograph and Signature
                </p>
                <div className="flex items-center gap-3">
                  <div className="border border-dashed rounded-lg border-pryColor">
                    <div className="py-5 px-3 flex flex-col gap-1">
                      <p className="text-xs md:text-sm text-pryColor">
                        Drag or click to upload file
                      </p>
                      <p className="text-xs text-[#575757]">
                        Supported formats: JPEG, JPG or PNG
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#6699FF] py-1.5 px-4 text-white text-xs md:text-sm">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFour;
