/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import useCreateNewAccount from "../../../api/crm/create-account";

// Define the validation schema with Zod
// const customerSignatorySchema = z.object({
//   id: z.number().nonnegative(),
// });
// Define the validation schema without using enums and without deprecated methods
const accountSchema = z.object({
  accountNumber: z.string(),
  accountOwner: z.string(), // Assuming this value is a constant string
  accountType: z.string(), // Assuming this value is a constant string
  customerId: z.number().nonnegative(),
  // customerSignatories: z.array(customerSignatorySchema),
  mandateBase64String: z.string(),
  netMonthlyIncome: z.number().nonnegative(),
  notes: z.string(),
  pndStatus: z.string(), // Assuming this value is a constant string
  status: z.string(), // Assuming this value is a constant string
});
type AccountFormValues = z.infer<typeof accountSchema>;

const CreateNewAccount = ({ callBack, customerData }: any) => {
  const { mutateAsync, isPending } = useCreateNewAccount();
  const [previewFrontImage, setPreviewFrontImage] = useState<string | null>(
    null
  );

  console.log(customerData);

  const querryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
  });

  // const selectedSignatories = watch("customerSignatories") || [];

  // const handleCheckboxChange = (value: number[]) => {
  //   const currentIndex = selectedSignatories.indexOf(value);
  //   const newSignatories = [...selectedSignatories];

  //   if (currentIndex === -1) {
  //     newSignatories.push(value); // Checkbox checked
  //   } else {
  //     newSignatories.splice(currentIndex, 1); // Checkbox unchecked
  //   }
  //   setValue("customerSignatories", newSignatories);
  // };

  const handleDelete = () => {
    reset();
    callBack();
  };

  const handleCategory = (name: string, value: string) => {
    if (name === "customerId") {
      setValue("customerId", Number(value));
    }
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image: unknown = await convertImageToFormattedBase64(file);

      switch (key) {
        case "MandateFile":
          setPreviewFrontImage(base64Image as string);
          setValue("mandateBase64String", base64Image as string);
          break;

        default:
          break;
      }
    }
  };

  function convertImageToFormattedBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Get the Base64 string and remove any `data:image/...` prefix
        const base64String = (reader.result as string).split(",")[1];
        // Add line breaks every 76 characters for formatting
        const formattedBase64 = base64String.replace(/(.{76})/g, "$1\n");

        resolve(formattedBase64);
      };

      reader.onerror = () => {
        reject(new Error("Failed to convert image to Base64."));
      };

      reader.readAsDataURL(file);
    });
  }

  const onSubmit = async (data: AccountFormValues) => {
    console.log(data);

    try {
      const response = await mutateAsync(data);
      console.log(response);

      if (response.statusCode === "CREATED") {
        toast.success(response?.message);
        callBack();
        reset();
        querryClient.invalidateQueries({
          queryKey: ["GET_ALL_ACCOUNT"],
        });
      } else {
        toast.error(response?.message);
      }
    } catch (error: any) {
      toast.error("Customer Creation Failed");
    }
  };

  return (
    <div className="md:w-[580px] w-full max-w-[560px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">CREATE NEW ACCOUNT</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-4 py-6">
        <h3 className="font-bold text-lg mb-4">Account Details</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Account Number */}
          <div>
            <Label>Account Number</Label>
            <Input
              className="w-full"
              placeholder="Enter account number"
              {...register("accountNumber")}
            />
            {errors.accountNumber && (
              <p className="text-red-500">{errors.accountNumber.message}</p>
            )}
          </div>

          {/* Account Owner */}
          <div>
            <Label>Account Owner</Label>
            <Select
              onValueChange={(value) => setValue("accountOwner", value)}
              value={watch("accountOwner")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Account Owner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Customer_Account">
                  Customer_Account
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.accountOwner && (
              <p className="text-red-500">{errors.accountOwner.message}</p>
            )}
          </div>

          {/* Account Type */}
          <div>
            <Label>Account Type</Label>
            <Select
              onValueChange={(value) => setValue("accountType", value)}
              value={watch("accountType")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Account Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fixed_Deposit">Fixed_Deposit</SelectItem>
                <SelectItem value="Saving">Saving</SelectItem>
                <SelectItem value="Current">Current</SelectItem>
              </SelectContent>
            </Select>
            {errors.accountType && (
              <p className="text-red-500">{errors.accountType.message}</p>
            )}
          </div>

          {/* Customer */}
          {/* <div>
            <Label>Customer</Label>
            <Select
              onValueChange={(value) => handleCategory("customerId", value)}
              value={String(watch("customerId"))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Customer" />
              </SelectTrigger>
              <SelectContent>
                {customerData?.map((customer: any) => (
                  <SelectItem key={customer.id} value={customer?.id}>
                    {customer?.customerDetail?.firstName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.customerId && (
              <p className="text-red-500">{errors.customerId.message}</p>
            )}
          </div> */}
          <div>
            <Label>Customer</Label>
            <Select
              onValueChange={(value) => {
                handleCategory("customerId", value); // Ensure this correctly sets the value
              }}
              value={watch("customerId") ? String(watch("customerId")) : ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Customer">
                  {customerData?.find(
                    (customer: any) =>
                      String(customer.id) === String(watch("customerId"))
                  )?.customerDetail?.firstName || "Select Customer"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {customerData?.map((customer: any) => (
                  <SelectItem key={customer.id} value={String(customer?.id)}>
                    {customer?.customerDetail?.firstName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Account Status */}
          <div>
            <Label>Account Status</Label>
            <Select
              onValueChange={(value) => setValue("status", value)}
              value={watch("status")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Account Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-red-500">{errors.status.message}</p>
            )}
          </div>

          {/* PND Status */}
          <div>
            <Label>PND Status</Label>
            <Select
              onValueChange={(value) => setValue("pndStatus", value)}
              value={watch("pndStatus")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select PND Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
            {errors.pndStatus && (
              <p className="text-red-500">{errors.pndStatus.message}</p>
            )}
          </div>

          {/* Bank Branch */}
          {/* <div className="hiddem">
            <Label>Bank Branch</Label>
            <Select  onValueChange={(value) => setValue("", value)}
              value={watch("pndStatus")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Bank Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="branch1">Branch 1</SelectItem>
                <SelectItem value="branch2">Branch 2</SelectItem>
              </SelectContent>
            </Select>
            {errors.bankBranch && (
              <p className="text-red-500">{errors.bankBranch.message}</p>
            )}
          </div> */}

          {/* Account Manager */}
          {/* <div>
            <Label>Account Manager</Label>
            <Select {...register("accountManager")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Account Manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager1">Manager 1</SelectItem>
                <SelectItem value="manager2">Manager 2</SelectItem>
              </SelectContent>
            </Select>
            {errors.accountManager && (
              <p className="text-red-500">{errors.accountManager.message}</p>
            )}
          </div> */}

          {/* Notes */}
          <div>
            <Label>Notes</Label>
            <Input
              className="w-full"
              placeholder="Enter Note"
              {...register("notes")}
            />
            {errors.notes && (
              <p className="text-red-500">{errors.notes.message}</p>
            )}
          </div>

          {/* Monthly Net Income */}
          <div>
            <Label>Monthly Net Income</Label>
            <Input
              className="w-full"
              placeholder="Enter Monthly Net Income"
              {...register("netMonthlyIncome", {
                valueAsNumber: true,
              })}
            />
            {errors.netMonthlyIncome && (
              <p className="text-red-500">{errors.netMonthlyIncome.message}</p>
            )}
          </div>

          <h4 className="text-[#404B7C] font-semibold">Mandate</h4>
          <div className="flex items-end gap-3">
            <div className="">
              <label htmlFor="Mandate-upload" className="cursor-pointer">
                <input
                  type="file"
                  id="Mandate-upload"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "MandateFile")}
                />
                <div
                  id="drop-area-front"
                  className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                >
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-primary text-center">Upload Mandate</h1>
                    <h1 className="text-[#938373] text-center text-sm">
                      Supported formats: JPEG, JPG, or PNG
                    </h1>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex gap-3 mt-5">
              {previewFrontImage && (
                <div>
                  <h2 className="text-center">Mandate file</h2>
                  <img
                    src={previewFrontImage}
                    alt="Mandate file"
                    className="w-32 h-20 object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Signatories */}

          <h4 className="text-[#404B7C] font-semibold">Signatories</h4>
          <div className="flex items-center gap-3 mt-4">
            <Checkbox
              id="signatory1"
              value="Uche Madguagwu Olochi"
              // checked={selectedSignatories.includes("Uche Madguagwu Olochi")}
              // onChange={() => handleCheckboxChange("Uche Madguagwu Olochi")}
            />
            <p className="font-bold">Uche Madguagwu Olochi</p>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="signatory2"
              value="Blessed Okonette Okon"
              // checked={selectedSignatories.includes("Blessed Okonette Okon")}
              // onChange={() => handleCheckboxChange("Blessed Okonette Okon")}
            />
            <p className="font-bold">Blessed Okonette Okon</p>
          </div>
          {/* {errors.customerSignatories. && (
            <p className="text-red-500">{errors.signatories.message}</p>
          )} */}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Button size="lg" type="submit" className="bg-[#1A88E1] w-[48%]">
              {/* {isPending ? "Submitting..." : "Save"} */}
              {isPending ? (
                <>
                  <span
                    className="w-4 h-4 border-4 border-t-4 border-t-white border-gray-300 rounded-full animate-spin mr-2"
                    aria-hidden="true"
                  />
                  <span>Submitting...</span>
                </>
              ) : (
                "Save"
              )}
            </Button>
            <Button
              onClick={handleDelete}
              size="lg"
              type="button"
              className="bg-[#1A88E1] w-[48%]"
            >
              {/* {isPending ? "Deleting.." : "Delete"} */}
              Delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewAccount;
