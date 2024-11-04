/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

import { TellerCreation } from "./types/dto";
import TransactionDetailsSchema from "./schemas/add-ser-schema";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import useCreateNewTeller from "./services/create-teller.api";
import { toast } from "react-toastify";
import { Button } from "../../ui/button";
import { useQueryClient } from "@tanstack/react-query";

const AddInterest = ({ callBack }: any) => {
  const { mutateAsync, isPending } = useCreateNewTeller();
  const querryClient = useQueryClient();
  const { register, setValue, handleSubmit } = useForm<TellerCreation>({
    resolver: zodResolver(TransactionDetailsSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await mutateAsync({
        ...data,
      });

      if (response.statusCode === "OK") {
        querryClient.invalidateQueries({
          queryKey: ["GET_ALL_INTEREST"],
        });
        callBack();
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error: any) {
      toast.error("Customer Interest Failed");
    }
  };

  return (
    <div className="md:w-[580px] w-[340px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">Create New Interest</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Create a new teller</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex  gap-4 pb-10"
        >
          <div className="flex flex-col gap-4">
            <div>
              <Label>Transaction</Label>
              <Input
                placeholder="Enter Transaction ID"
                {...register("transactionId")}
              />
            </div>
            <div>
              <Label>Start Date</Label>

              <Input
                onChange={(e) =>
                  setValue(
                    "startDate",
                    moment(e.target.value.toString()).format("DD/MM/YYYY")
                  )
                }
                type="date"
              />
            </div>
            <div>
              <Label>End Date</Label>

              <Input
                onChange={(e) =>
                  setValue(
                    "endDate",
                    moment(e.target.value.toString()).format("DD/MM/YYYY")
                  )
                }
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
              <Label>Rate</Label>

              <Input
                {...register("rate", {
                  valueAsNumber: true,
                })}
                placeholder="Enter Rate"
              />
            </div>
            <div>
              <Label>Enter Amount</Label>

              <Input
                {...register("amount", {
                  valueAsNumber: true,
                })}
                placeholder="Enter amount"
              />
            </div>
            <div>
              <Label>Enter Type</Label>

              <Input {...register("type")} placeholder="Enter Type" />
            </div>

            <Button
              size={"lg"}
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">
                {isPending ? "Please Wait!!!!" : "Save"}
              </p>
            </Button>

            <Button
              onClick={callBack}
              size={"lg"}
              className="mt-2 md:w-[560px] w-[300px] bg-primary-light"
            >
              <p className="md:w-[560px] w-[300px] text-primary-dark">Cancel</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInterest;
