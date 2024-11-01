import BaseButton from "../../ui/base-button/BaseButton";
import TextInput from "../../ui/text-input/TextInput";

const ViewTitle = ({ callBack }: any) => {
  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">CREATE NEW TITLE</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <div className="flex flex-col gap-4 pt-5 pb-10">
          <TextInput
            id="txId"
            type="text"
            name="txId"
            value="Mr."
            label="Title"
            disabled
            width="md:w-[560px] w-[300px]"
            height="h-10"
          />

          <TextInput
            id="startDate"
            type="text"
            name="startDate"
            label="Description"
            disabled
            width="md:w-[560px] w-[300px]"
            height="h-10"
          />

          <BaseButton
            type="submit"
            onClick={callBack}
            className="mt-2  md:w-[160px] w-[100px] bg-primary"
          >
            <p className="md:w-[160px] w-[100px]">Close</p>
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default ViewTitle;
