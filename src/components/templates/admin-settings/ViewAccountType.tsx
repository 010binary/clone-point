import BaseButton from "../../ui/base-button/BaseButton";
import TextInput from "../../ui/text-input/TextInput";

const ViewAccountType = ({ callBack }: any) => {

  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">VIEW TYPES</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2 py-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="txId"
              type="text"
              name="txId"
              value="Account"
              label="Type Code"
              placeholder="Enter Transaction ID"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              disabled
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value="Savings account type"
              label="Type Description"
              placeholder="Enter type description"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              disabled
            />

            <TextInput
              id="endDate"
              type="text"
              name="endDate"
              value="Savings"
              label="Type Value"
              placeholder="Enter type value"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              disabled
            />

          
            <BaseButton
              type="submit"
              className="mt-2 md:w-[72px] bg-primary"
              onClick={callBack}
            >
              <p className="md:w-[72px]">
                Close
              </p>
            </BaseButton>
          </div>
      </div>
    </div>
  );
};

export default ViewAccountType;
