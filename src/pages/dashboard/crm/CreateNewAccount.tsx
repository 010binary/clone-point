import CreateNewAccount from "../../../components/templates/crm/CreateNewAccount";
import DashboardLayout from "../layout";

function CreateANewAccount() {
  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2 flex items-center justify-center">
        <CreateNewAccount />
      </div>
    </DashboardLayout>
  );
}

export default CreateANewAccount;
