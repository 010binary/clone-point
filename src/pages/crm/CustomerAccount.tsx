import { useState } from "react";
import CreateIndividualCustomer from "../../components/templates/crm/CreateIndivualCustomer";
import Identification from "../../components/templates/crm/Identification";

const CreateCustomerAccount = ({ callBack }: any) => {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="w-full">
      {formStep === 1 ? (
        <CreateIndividualCustomer setFormStep={setFormStep} callBack={callBack} />
      ) : formStep === 2 ? (
        <Identification setFormStep={setFormStep} callBack={callBack} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateCustomerAccount;
