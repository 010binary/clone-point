import BaseButton from "../../../components/ui/base-button/BaseButton";
import SelectInput from "../../../components/ui/select-input/SelectInput";
import TextInput from "../../../components/ui/text-input/TextInput";
import { loanType } from "../../../lib/Admin/options";
import DashboardLayout from "../layout";

const Report = () => {
  return (
    <DashboardLayout>
      <div className="md:pl-[270px] w-full px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Report</h6>
        </div>

        <div
          className="px-4 py-2 mt-5"
          style={{
            background:
              "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
          }}
        >
          <p className="text-white font-semibold">Report</p>
        </div>

        <div className="flex mt-8 md:gap-12 gap-4 w-full flex-wrap">
          <SelectInput label="Select Report" options={loanType} width="w-96" />

          <TextInput label="Report Title" width="w-96" />

          <TextInput type="date" label="Start Date" width="w-96" />

          <TextInput label="Teller" width="w-96" />

          <TextInput type="date" label="End Date" width="w-96" />

          <SelectInput
            label="Branch"
            options={[{ value: "All", label: "All" }]}
            width="w-96"
          />
        </div>
        <div className="flex flex-col gap-4">
          <BaseButton type="submit" className="mt-2 max-w-96 bg-primary">
            <p className="w-96 font-bold">Download as PDF</p>
          </BaseButton>

          <BaseButton type="submit" className="mt-2 max-w-96 bg-primary-light">
            <p className="w-96 text-primary-dark font-bold">View Report</p>
          </BaseButton>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;
