/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import createNewInterestRate from "../../../api/admin/interest/create-new-interest-rate.api";
import { toast } from "react-toastify";
import { Button } from "../../ui/button";
import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../../ui/select";
import { NewInterestCreation } from "../../../types/dto";
import { interestSchema } from "../../../schemas/interest/create-interest-schema";
import useGetAllOfficeAccount from "../../../api/admin/interest/get-all-office-account.api";

const AddInterest = ({ callBack }: any) => {
  const { mutateAsync, isPending } = createNewInterestRate();
  const { data, isLoading } = useGetAllOfficeAccount();

  const querryClient = useQueryClient();
  const { register, handleSubmit, getValues, control, reset } =
    useForm<NewInterestCreation>({
      resolver: zodResolver(interestSchema),
      defaultValues: {
        accountId: "1",
      },
      mode: "onChange",
    });
  const value = getValues();

  const onSubmit = async (data: any) => {
    try {
      const response = await mutateAsync({
        ...data,
        accountId: Number(value.accountId),
      });
      if (response.status === 200) {
        querryClient.invalidateQueries({
          queryKey: ["GET_ALL_INTEREST"],
        });
        callBack();
        toast.success(response.data);
        reset();
      } else {
        toast.error(response.data);
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
                  placeholder="Enter Name"
                  {...register("name")}
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
                  {...register("description")}
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
                  {...register("minimumTenure", {
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
                  {...register("maximumTenure", {
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
                  {...register("interestRate", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Interest Rate"
                  className="border-none outline-none text-sm focus:ring-0 focus:border-none w-full"
                />
              </div>
            </div>
            {/* Disscription end */}

            <div className="flex w-[70%] items-center justify-start pl-2 rounded-md border border-gray-300 w-full">
              <div className="w-[30%] border-r border-gray-300 ">
                <Label className="font-semibold">Account Manager</Label>
              </div>
              <div className="w-[70%]">
                <Controller
                  control={control}
                  name="accountId"
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger
                        className="border-none outline-none focus:outline-none px-2 py-2"
                        style={{ outline: "none", boxShadow: "none" }}
                      >
                        <SelectValue
                          placeholder={`${
                            isLoading ? "Please Wait" : "Select Account Manager"
                          }`}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.map((item) => (
                          <SelectItem key={item.id} value={item.id + ""}>
                            {item?.customer?.customerDetail?.firstName +
                              "  " +
                              item?.customer?.customerDetail?.lastName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {/* {errors.accountManager && (
                  <p className="text-red-500">
                    {errors.accountManager.message}
                  </p>
                )} */}
              </div>
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
