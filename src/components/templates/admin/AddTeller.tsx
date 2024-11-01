import { useForm } from "react-hook-form";
import BaseButton from "../../ui/base-button/BaseButton";

import { zodResolver } from "@hookform/resolvers/zod";

import { TellerCreation } from "./types/dto";
import TransactionDetailsSchema from "./schemas/add-ser-schema";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

const AddTeller = ({ callBack }: any) => {
  const {
    register,
    // getValues,
    watch,
    // formState: { errors, isDirty, isValid },
  } = useForm<TellerCreation>({
    resolver: zodResolver(TransactionDetailsSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const values = watch();
  console.log(values, "This is values");
  return (
    <div className="md:w-[580px] w-[340px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">Create Teller</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Create a new teller</h3>
        <form className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <div>
              <Label>Transaction</Label>
              <Input
                placeholder="Enter Transaction ID"
                {...register("transactionId")}
              />
            </div>
            <div>
              <Label>Payment Date</Label>

              <Input
                {...register("endDate")}
                placeholder="Enter payment date"
                type="date"
              />
            </div>
            <div>
              <Label>Account Number</Label>

              <Input
                {...register("accountNumber")}
                placeholder="Enter Account Number"
              />
            </div>

            <div>
              <Label>Inputer</Label>

              <Input {...register("type")} placeholder="Enter Inputter" />
            </div>
            <div>
              <Label>Enter Amount</Label>

              <Input {...register("amount")} placeholder="Enter amount" />
            </div>
            <div>
              <Label>Enter Type</Label>

              <Input {...register("type")} placeholder="Enter Type" />
            </div>

            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">Save</p>
            </BaseButton>

            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary-light"
            >
              <p className="md:w-[560px] w-[300px] text-primary-dark">Cancel</p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeller;
