import OperationLayout from "./layout";
import BaseButton from "../../components/ui/base-button/BaseButton";

const LoanStatement = () => {

  return (
    <OperationLayout>
      <div className="w-full bg-white dashboard__body pb-60 overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Loan statement</h6>
        </div>

        <div className="flex flex-col gap-5 mt-5 px-16">
            <h1 className="font-bold">Select which of the loan Statements you are trying to generate.</h1>

            <div className="border p-4 flex justify-between w-full">
                <h6 className="font-semibold">Approved Loans</h6>
                <input type="checkbox" />
            </div>

            <div className="border p-4 flex justify-between w-full">
                <h6 className="font-semibold">Declined Loans</h6>
                <input type="checkbox" />
            </div>

            <div className="border p-4 flex justify-between w-full">
                <h6 className="font-semibold">Processing Loans</h6>
                <input type="checkbox" />
            </div>

            <div className="border p-4 flex justify-between w-full">
                <h6 className="font-semibold">Due Loans</h6>
                <input type="checkbox" />
            </div>

            <div className="border p-4 flex justify-between w-full">
                <h6 className="font-semibold">Completed Loans</h6>
                <input type="checkbox" />
            </div>
            
            <BaseButton fit={true} type="submit" className="mt-2 w-fit px-10 text-lg bg-primary">
            <p>
            Generate Loan Startaeemnt
            </p>
          </BaseButton>
        </div>
      </div>
    </OperationLayout>
  );
};

export default LoanStatement;
