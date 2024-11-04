/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

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
  const { register, handleSubmit } = useForm<TellerCreation>({
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
        <h3 className="font-bold text-lg mt-2">Create New Interest</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex  gap-4 pb-10"
        >
          <div className="flex flex-col gap-4">
            <div className="flex  items-center pl-2  border border-gray-300 rounded-md ">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                  Name
                </Label>
              </div>
              <div className="w-[70%] border-r border-gray-300 ">
                <Input
                  placeholder="Enter Transaction ID"
                  {...register("transactionId")}
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Name end */}

            {/* Description start */}
            <div className="flex  items-center pl-2  border border-gray-300 rounded-md ">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                  Description
                </Label>
              </div>
              <div className="w-[70%] border-r border-gray-300 ">
                <Input
                  placeholder="Enter Description"
                  {...register("transactionId")}
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Disscription end */}

            {/* Minumum Tenor */}
            <div className="flex  items-center pl-2  border border-gray-300 rounded-md ">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                  Minumum Tenor
                </Label>
              </div>
              <div className="w-[70%] border-r border-gray-300 ">
                <Input
                  {...register("rate", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Minumum Tenor"
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Disscription end */}

            {/* Minumum Tenor */}
            <div className="flex  items-center pl-2  border border-gray-300 rounded-md ">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                  Maximum Tenor
                </Label>
              </div>
              <div className="w-[70%] border-r border-gray-300 ">
                <Input
                  {...register("rate", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Maximum Tenor"
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Disscription end */}

            {/* Minumum Tenor */}
            <div className="flex  items-center pl-2  border border-gray-300 rounded-md ">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                  Interest Rate
                </Label>
              </div>
              <div className="w-[70%] border-r border-gray-300 ">
                <Input
                  {...register("rate", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Interest Rate"
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Disscription end */}

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
