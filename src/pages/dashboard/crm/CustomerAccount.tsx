/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stepper } from "../../../components/ui/stepper/stepper";
// import { relationship } from "../../../lib/Onboarding";
// import { employmentStatus, workSector } from "../../../lib/Onboarding";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

// import { title } from "../../../lib/Onboarding/signup";
// import BaseButton from "../../../components/ui/base-button/BaseButton";
// import SelectInput from "../../../components/ui/select-input/SelectInput";
import { toast } from "react-toastify";
// import TextInput from "../../../components/ui/text-input/TextInput";
// import { identification } from "../../../lib/Onboarding";
import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
// import { Input } from "../../../components/ui/input/input";
import transformFormDataToApiPayload from "../../../api/crm/create-payload";
import useCreateCustomer from "../../../api/crm/create-customer";
import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";

// const customerSchema = z.object({
//   // title: z.string().min(1, { message: "Title is required" }),
//   firstName: z.string().min(1, { message: "First name is required" }),
//   middleName: z.string().min(1, { message: "Middle name is required" }),
//   lastName: z.string().min(1, { message: "Last name is required" }),
//   phone: z.string().min(1, { message: "Phone number is required" }),
//   dob: z.string().min(1, { message: "Date of birth is required" }),
//   bvn: z.string().min(1, { message: "BVN is required" }),
// });

// Updated Schema
// const identificationSchema = z.object({
//   identificationNumber: z
//     .string()
//     .min(1, { message: "Identification number is required" }),
//   issueDate: z.string().min(1, { message: "Issue date is required" }),
//   expirationDate: z.string().min(1, { message: "Expiration date is required" }),
// });

const CreateCustomerAccount = ({ onClose, customerType }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [previewFrontImage, setPreviewFrontImage] = useState<string | null>(
    null
  );
  const [previewBackImage, setPreviewBackImage] = useState<string | null>(null);
  const [previewUtilityBill, setPreviewUtilityBill] = useState<string | null>(
    null
  );
  const [previewCACDocument, setPreviewCACDocument] = useState<string | null>(
    null
  );
  const [previewPassport, setPreviewPassport] = useState<string | null>(null);
  const [previewSignature, setPreviewSignature] = useState<string | null>(null);
  const step = parseInt(searchParams.get("step") || "0");
  const queryClient = useQueryClient();
  // const schema = step === 0 ? customerSchema : '';
  const { mutateAsync, isPending } = useCreateCustomer();
  const {
    register,
    reset,
    // watch,
    setValue,
    handleSubmit,
    // getValues,
    formState: { errors, isValid },
  } = useForm();

  const maxValue = 4;

  const nextStep = () => {
    if (!isNaN(step) && step < maxValue && isValid) {
      setSearchParams({ step: (step + 1).toString() });
      return;
    }
  };

  // Convert files to Base64
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image: unknown = await convertImageToFormattedBase64(file);

      switch (key) {
        case "frontFile":
          setPreviewFrontImage(base64Image as string);
          setValue("frontImage", base64Image);
          break;
        case "backFile":
          setPreviewBackImage(base64Image as string);
          setValue("backImage", base64Image);
          break;
        case "utilityBill":
          setPreviewUtilityBill(base64Image as string);
          setValue("utilityBill", base64Image);
          break;
        case "cacDocument":
          setPreviewCACDocument(base64Image as string);
          setValue("cacDocument", base64Image);
          break;
        case "passport":
          setPreviewPassport(base64Image as string);
          setValue("passport", base64Image);
          break;
        case "signature":
          setPreviewSignature(base64Image as string);
          setValue("signature", base64Image);
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

  const onSubmit = async (data: any) => {
    const [year, month, day] = data.dob.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    const [years, months, days] = data.issueDate.split("-");
    const issueformattedDate = `${days}-${months}-${years}`;
    const [yearss, monthss, dayss] = data.ExpirationDate.split("-");
    const expiredformattedDate = `${dayss}-${monthss}-${yearss}`;
    data.dob = formattedDate; // Replace with formatted date
    data.ExpirationDate = expiredformattedDate;
    data.issueDate = issueformattedDate;
    console.log(formattedDate);
    const apiPayload = transformFormDataToApiPayload({ ...data, customerType });
    console.log(apiPayload);

    try {
      const response = await mutateAsync(apiPayload);
      console.log(response);
      if (response.statusCode === "CREATED") {
        queryClient.invalidateQueries({
          queryKey: ["GET_ALL_CUSTOMER"],
        });
        toast.success(response?.message);

        reset();
        onClose();
      } else {
        toast.error(response?.message);
      }
    } catch (error: any) {
      toast.error("Customer Creation Failed");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper active={step}>
          <Stepper.Step>
            <div className="md:w-[580px]  w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE INDIVIDUAL CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Customer Details</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    {/* <SelectInput
                      label="Title"
                      options={[{ label: "Select One", value: "" }, ...title]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) => setValue("title", e.target.value)}
                    /> */}
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Title
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr</SelectItem>
                          <SelectItem value="ms">Mrs</SelectItem>
                          <SelectItem value="dr">Dr</SelectItem>
                          <SelectItem value="prof">Prof</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          First Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("firstName")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.firstName && (
                        <p className="text-red-500">
                          {errors.firstName.message as string}
                        </p>
                      )}
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Middle Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("middle Name")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.middleName && (
                        <p className="text-red-500">
                          {errors.middleName.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        MiddleName
                      </label>
                      <Input
                        id="middleName"
                        type="text"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter middle name"
                        {...register("middleName")}
                        // onChange={watch("firstName")}
                      />
                      {errors.middleName && (
                        <p className="text-red-500">
                          {errors.middleName.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Last Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("lastName")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.lastName && (
                        <p className="text-red-500">
                          {errors.lastName.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        LastName
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter last name"
                        {...register("lastName")}
                        // onChange={watch("firstName")}
                      />
                      {errors.lastName && (
                        <p className="text-red-500">
                          {errors.lastName.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Mobile Phone
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("phone")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.phone && (
                        <p className="text-red-500">
                          {errors.phone.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="number"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter phone number"
                        {...register("phone")}
                        // onChange={watch("firstName")}
                      />
                      {errors.phone && (
                        <p className="text-red-500">
                          {errors.phone.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Date of Birth
                        </Label>
                      </div>
                      <Input
                        type="date"
                        {...register("dob")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.dob && (
                        <p className="text-red-500">
                          {errors.dob.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Date of birth
                      </label>
                      <Input
                        id="dob"
                        type="date"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter dob"
                        {...register("dob")}
                        // onChange={watch("firstName")}
                      />
                      {errors.dob && (
                        <p className="text-red-500">
                          {errors.dob.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Bvn
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("bvn")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.bvn && (
                        <p className="text-red-500">
                          {errors.bvn.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Bvn
                      </label>
                      <Input
                        id="bvn"
                        type="number"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter bvn number"
                        {...register("bvn")}
                        // onChange={watch("firstName")}
                      />
                      {errors.bvn && (
                        <p className="text-red-500">
                          {errors.bvn.message as string}
                        </p>
                      )}
                    </div> */}

                    {/* <BaseButton className="hidden mt-2 w-40 bg-primary-dark">
                      <p className="text-white">Validate BVN</p>
                    </BaseButton> */}

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Account Type
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select account type " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saving">Saving</SelectItem>
                          <SelectItem value="current">Current</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Gender
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select  Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Acount Type"
                      options={[
                        { label: "Select One", value: "" },
                        ...accountType,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) => setValue("AcountType", e.target.value)}
                    /> */}

                    {/* <SelectInput
                      label="Gender"
                      options={[{ label: "Select One", value: "" }, ...gender]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) => setValue("Gender", e.target.value)}
                    /> */}

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Martial Status
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select martial status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorce">Divorced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Marital Status"
                      options={[
                        { label: "Select One", value: "" },
                        ...maritalStatus,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      // {...register("MaritalStatus")}
                      onChange={(e) =>
                        setValue("maritalStatus", e.target.value)
                      }
                    /> */}

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Citizenship
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="America">America</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Citizenship"
                      options={[
                        { label: "Select One", value: "" },
                        ...citizenShip,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      // {...register("Citizenship")}
                      onChange={(e) => setValue("citizenShip", e.target.value)}
                    /> */}
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Level of Education
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bsc">BSC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Level of Education"
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      // {...register("LevelOfEducation")}
                      onChange={(e) => setValue("education", e.target.value)}
                      options={[
                        { label: "Select One", value: "" },
                        ...education,
                      ]}
                    /> */}

                    {/* <div style={{ border: "2px solid red" }} className="pr-4">
                      <BaseButton
                        // type="submit"
                        onClick={nextStep}
                        className="mt-2 md:w-full w-[300px] bg-primary"
                      >
                        <p className="md:w-[560px] w-[300px]">Next</p>
                      </BaseButton>
                    </div> */}

                    <Button
                      onClick={nextStep}
                      className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className="md:w-[580px] w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE INDIVIDUAL CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Identification</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[100%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Identification
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="International_Passport">
                            International_Passport
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Identification"
                      options={[
                        { label: "Select One", value: "" },
                        ...identification,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      // onChange={(value)=>setValue('indentification',value)}
                      onChange={(e) =>
                        setValue("indentification", e.target.value)
                      }
                    /> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[100%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Other
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("others")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Others
                      </label>
                      <Input
                        id="others"
                        type="text"
                        // value={formData.password}
                        className="mt-[6px]"
                        placeholder="Enter others"
                        {...register("others")}
                        // onChange={watch("firstName")}
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[100%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Identification Number
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("identificationNumber")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.identificationNumber && (
                        <p className="text-red-500">
                          {errors.identificationNumber.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Identification Number
                      </label>
                      <Input
                        id="dob"
                        type="number"
                        {...register("identificationNumber")}
                        className="mt-[6px]"
                        placeholder="Enter Identification Number"
                      />
                      {errors.identificationNumber && (
                        <p className="text-red-500">
                          {errors.identificationNumber.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[100%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Issue Date
                        </Label>
                      </div>
                      <Input
                        type="date"
                        {...register("issueDate")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.issueDate && (
                        <p className="text-red-500">
                          {errors.issueDate.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Issue Date
                      </label>
                      <Input
                        id="dob"
                        type="date"
                        {...register("issueDate")}
                        className="mt-[6px]"
                      />
                      {errors.issueDate && (
                        <p className="text-red-500">
                          {errors.issueDate.message as string}
                        </p>
                      )}
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[100%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Expiration Date
                        </Label>
                      </div>
                      <Input
                        type="date"
                        {...register("ExpirationDate")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                      {errors.expirationDate && (
                        <p className="text-red-500">
                          {errors.expirationDate.message as string}
                        </p>
                      )}
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Expiration Date
                      </label>
                      <Input
                        id="dob"
                        type="date"
                        {...register("ExpirationDate")}
                        className="mt-[6px]"
                      />
                      {errors.expirationDate && (
                        <p className="text-red-500">
                          {errors.expirationDate.message as string}
                        </p>
                      )}
                    </div> */}
                    <h4 className="text-[#404B7C] font-semibold">
                      Upload identification Card
                    </h4>
                    <div className="flex items-end gap-3">
                      {/* Front Image Upload */}
                      <div className="">
                        <label
                          htmlFor="front-upload"
                          className="cursor-pointer"
                        >
                          <input
                            type="file"
                            id="front-upload"
                            hidden
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "frontFile")}
                          />
                          <div
                            id="drop-area-front"
                            className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                          >
                            <div className="flex flex-col gap-3 items-center justify-center">
                              <h1 className="text-primary text-center">
                                Upload Front of ID
                              </h1>
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
                            <h2 className="text-center">Front of ID</h2>
                            <img
                              src={previewFrontImage}
                              alt="Front of ID"
                              className="w-32 h-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-end gap-3 mt-5">
                      {/* Back Image Upload */}
                      <div className="">
                        <label htmlFor="back-upload" className="cursor-pointer">
                          <input
                            type="file"
                            id="back-upload"
                            hidden
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "backFile")}
                          />
                          <div
                            id="drop-area-back"
                            className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                          >
                            <div className="flex flex-col gap-3 items-center justify-center">
                              <h1 className="text-primary text-center">
                                Upload Back of ID
                              </h1>
                              <h1 className="text-[#938373] text-center text-sm">
                                Supported formats: JPEG, JPG, or PNG
                              </h1>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="flex gap-3 mt-5">
                        {previewBackImage && (
                          <div>
                            <h2 className="text-center">Back of ID</h2>
                            <img
                              src={previewBackImage}
                              alt="Back of ID"
                              className="w-32 h-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <BaseButton
                      onClick={nextStep}
                      className="mt-2 md:w-[560px] w-[300px] bg-primary"
                    >
                      <p className="md:w-[560px] w-[300px]">Next</p>
                    </BaseButton> */}
                    <Button
                      onClick={nextStep}
                      className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className="md:w-[580px] w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE INDIVIDUAL CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Address Details</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Address 1
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("Address 1")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>
                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Address 1
                      </label>
                      <Input
                        id="address"
                        type="text"
                        {...register("Address 1")}
                        className="mt-[6px]"
                        placeholder="Enter address"
                      />
                    </div> */}
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Residential Status
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Provided_by_Employer">
                            Provided_by_Employer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <SelectInput
                      label="Residential Status"
                      options={[
                        { label: "Select One", value: "" },
                        ...residentialType,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) =>
                        setValue("ResidentialStatus", e.target.value)
                      }
                    /> */}

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        State
                      </label>
                      <Input
                        id="state"
                        type="text"
                        {...register("State")}
                        className="mt-[6px]"
                        placeholder="Enter state"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          State
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("State")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        City
                      </label>
                      <Input
                        id="City"
                        type="text"
                        {...register("City")}
                        className="mt-[6px]"
                        placeholder="Enter City"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          L.G.A
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("lga")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>
                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        L.G.A
                      </label>
                      <Input
                        id="lga"
                        type="text"
                        {...register("lga")}
                        className="mt-[6px]"
                        placeholder="Enter LGA"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Country
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("Country")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Country
                      </label>
                      <Input
                        id="Country"
                        type="text"
                        {...register("Country")}
                        className="mt-[6px]"
                        placeholder="Enter Country"
                      />
                    </div> */}
                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Home Phone
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("HomePhone")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>
                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Home Phone
                      </label>
                      <Input
                        id="HomePhone"
                        type="number"
                        {...register("HomePhone")}
                        className="mt-[6px]"
                        placeholder="Enter Home Phone"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Email
                        </Label>
                      </div>
                      <Input
                        type="email"
                        {...register("email")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Email
                      </label>
                      <Input
                        id="HomePhone"
                        type="email"
                        {...register("email")}
                        className="mt-[6px]"
                        placeholder="Enter email"
                      />
                    </div> */}
                    <h4 className=" mt-2 text-[#404B7C] font-semibold">
                      Upload Utility Bill
                    </h4>
                    <div className="flex items-end gap-3">
                      <div className="">
                        <label htmlFor="back-upload" className="cursor-pointer">
                          <input
                            type="file"
                            id="back-upload"
                            hidden
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "utilityBill")}
                          />
                          <div
                            id="drop-area-back"
                            className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                          >
                            <div className="flex flex-col gap-3 items-center justify-center">
                              <h1 className="text-primary text-center">
                                Upload Utility bill
                              </h1>
                              <h1 className="text-[#938373] text-center text-sm">
                                Supported formats: JPEG, JPG, or PNG
                              </h1>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="flex gap-3 mt-5">
                        {previewUtilityBill && (
                          <div>
                            <h2 className="text-center">Utility bill</h2>
                            <img
                              src={previewUtilityBill}
                              alt="utility bill"
                              className="w-32 h-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                      {/* <BaseButton
                        type="button"
                        className="mt-2 w-40 bg-primary-dark"
                      >
                        <p className="text-white">Upload</p>
                      </BaseButton> */}
                    </div>

                    <h4 className="mt-2 text-[#404B7C] text-lg font-semibold">
                      Next of Kin
                    </h4>

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Title
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("nextofkintitle", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr</SelectItem>
                          <SelectItem value="ms">Mrs</SelectItem>
                          <SelectItem value="dr">Dr</SelectItem>
                          <SelectItem value="prof">Prof</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Title"
                      options={[{ label: "Select One", value: "" }, ...title]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) =>
                        setValue("nextofkintitle", e.target.value)
                      }
                    /> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          firstName
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextofkinfirstname")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        firstName
                      </label>
                      <Input
                        id="nextofkinfirstname"
                        type="text"
                        {...register("nextofkinfirstname")}
                        className="mt-[6px]"
                        placeholder="Enter firstName"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          LastName
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextofkinlastname")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        LastName
                      </label>
                      <Input
                        id="nextofkinlastname"
                        type="text"
                        {...register("nextofkinlastname")}
                        className="mt-[6px]"
                        placeholder="Enter lastName"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          address
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextofkinaddress")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        address
                      </label>
                      <Input
                        id="nextofkinaddress"
                        type="text"
                        {...register("nextofkinaddress")}
                        className="mt-[6px]"
                        placeholder="Enter address"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Phone
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("nextofkinphonenumber")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Phone
                      </label>
                      <Input
                        id="nextofkinphone"
                        type="number"
                        {...register("nextofkinphonenumber")}
                        className="mt-[6px]"
                        placeholder="Enter phone number"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Email
                        </Label>
                      </div>
                      <Input
                        type="email"
                        {...register("nextofkinemail")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Email
                      </label>
                      <Input
                        id="nextofkinemail"
                        type="email"
                        {...register("nextofkinemail")}
                        className="mt-[6px]"
                        placeholder="Enter email"
                      />
                    </div> */}
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Relationship
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("nextofkinrelationship", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Father">Father</SelectItem>
                          <SelectItem value="Mother">Mother</SelectItem>
                          <SelectItem value="Brother">Brother</SelectItem>
                          <SelectItem value="Sister">Sister</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Relationship"
                      options={[
                        { label: "Select One", value: "" },
                        ...relationship,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) =>
                        setValue("nextofkinrelationship", e.target.value)
                      }
                    /> */}

                    <Button
                      onClick={nextStep}
                      className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                    >
                      Next
                    </Button>
                    {/* <BaseButton
                      onClick={nextStep}
                      className="mt-2 md:w-[560px] w-[300px] bg-[#1A88E1]"
                    >
                      <p className="md:w-[560px] w-[300px]">Next</p>
                    </BaseButton> */}
                  </div>
                </div>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step>
            <div className="md:w-[580px] w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE INDIVIDUAL CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Employment Details</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Employment Status
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("EmploymentStatus", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=" Employed">Employed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <SelectInput
                      label="Residential Status"
                      options={[
                        { label: "Select One", value: "" },
                        ...residentialType,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) =>
                        setValue("ResidentialStatus", e.target.value)
                      }
                    /> */}

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        State
                      </label>
                      <Input
                        id="state"
                        type="text"
                        {...register("State")}
                        className="mt-[6px]"
                        placeholder="Enter state"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          State
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("State")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <SelectInput
                      label="Employment Status"
                      options={[
                        { label: "Select One", value: "" },
                        ...employmentStatus,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) =>
                        setValue("EmploymentStatus", e.target.value)
                      }
                    /> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Net Montly Income
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("netmonthlyincome")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Net Montly Income
                      </label>
                      <Input
                        id="netmontlyincome"
                        type="number"
                        {...register("netmonthlyincome")}
                        className="mt-[6px]"
                        placeholder="Enter net monthly income"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Current Employee
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("currentEmployee")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Current Employee
                      </label>
                      <Input
                        id="currentemployee"
                        type="text"
                        {...register("currentEmployee")}
                        className="mt-[6px]"
                        placeholder="Enter current Employee"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Sector
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) => setValue("workSector", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=" Banking">Banking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* <SelectInput
                      label="Sector"
                      options={[
                        { label: "Select One", value: "" },
                        ...workSector,
                      ]}
                      width="md:w-[560px] w-[300px]"
                      height="h-10"
                      onChange={(e) => setValue("workSector", e.target.value)}
                    /> */}
                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Office Email
                        </Label>
                      </div>
                      <Input
                        type="email"
                        {...register("officeEmail")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>
                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Office Email
                      </label>
                      <Input
                        id="officeemail"
                        type="email"
                        {...register("officeEmail")}
                        className="mt-[6px]"
                        placeholder="Enter email"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Tax Number
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("TaxNumber")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Tax Number
                      </label>
                      <Input
                        id="Tax Number"
                        type="number"
                        {...register("TaxNumber")}
                        className="mt-[6px]"
                        placeholder="Enter Tax Number"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Pension Number
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("PensionNumber")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Pension Number
                      </label>
                      <Input
                        id="PensionNumber"
                        type="number"
                        {...register("PensionNumber")}
                        className="mt-[6px]"
                        placeholder="Enter Pension Number"
                      />
                    </div> */}

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Office Address
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("OfficeAddress")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Office Address
                      </label>
                      <Input
                        id="OfficeAddress"
                        type="text"
                        {...register("OfficeAddress")}
                        className="mt-[6px]"
                        placeholder="Enter Office Address"
                      />
                    </div> */}

                    <h4 className=" mt-4 text-[#404B7C] font-semibold">
                      Upload CAC Document (For business owner)
                    </h4>
                    <div className=" flex items-end gap-4">
                      <label htmlFor="cac-upload" className="cursor-pointer">
                        <input
                          type="file"
                          id="cac-upload"
                          hidden
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, "cacDocument")}
                        />
                        <div
                          id="drop-area-front"
                          className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                        >
                          <div className="flex flex-col gap-3 items-center justify-center">
                            <h1 className="text-primary text-center">
                              Upload cac document
                            </h1>
                            <h1 className="text-[#938373] text-center text-sm">
                              Supported formats: JPEG, JPG, or PNG
                            </h1>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="flex gap-3 mt-5">
                      {previewCACDocument && (
                        <div>
                          <h2 className="text-center">Cac document</h2>
                          <img
                            src={previewCACDocument}
                            alt="cac document"
                            className="w-32 h-20 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>

                    <h4 className="text-[#404B7C] text-lg font-semibold">
                      Images
                    </h4>

                    <h4 className="text-[#404B7C] font-semibold">
                      Upload Passport Photograph and Signature
                    </h4>
                    <div className="flex items-end gap-3">
                      <div className="">
                        <label
                          htmlFor="passport-upload"
                          className="cursor-pointer"
                        >
                          <input
                            id="passport-upload"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleFileChange(e, "passport")}
                          />
                          <div
                            id="drop-area-back"
                            className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                          >
                            <div className="flex flex-col gap-3 items-center justify-center">
                              <h1 className="text-primary text-center">
                                Upload Passport
                              </h1>
                              <h1 className="text-[#938373] text-center text-sm">
                                Supported formats: JPEG, JPG, or PNG
                              </h1>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="flex gap-3 mt-5">
                        {previewPassport && (
                          <div>
                            <h2 className="text-center">Passport</h2>
                            <img
                              src={previewPassport}
                              alt="passport"
                              className="w-32 h-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                      {/* <BaseButton
                        type="button"
                        className="mt-2 w-40 bg-primary-dark"
                      >
                        <p className="text-white">Upload</p>
                      </BaseButton> */}
                    </div>

                    <div className="flex items-end gap-3">
                      <div className="">
                        <label
                          htmlFor="signature-upload"
                          className="cursor-pointer"
                        >
                          <input
                            id="signature-upload"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleFileChange(e, "signature")}
                          />
                          <div
                            id="drop-area-back"
                            className="border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6 flex flex-col items-center justify-center p-5 bg-gray-200"
                          >
                            <div className="flex flex-col gap-3 items-center justify-center">
                              <h1 className="text-primary text-center">
                                Upload Signature
                              </h1>
                              <h1 className="text-[#938373] text-center text-sm">
                                Supported formats: JPEG, JPG, or PNG
                              </h1>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="flex gap-3 mt-5">
                        {previewSignature && (
                          <div>
                            <h2 className="text-center">Signature</h2>
                            <img
                              src={previewSignature}
                              alt="signature"
                              className="w-32 h-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                      {/* <BaseButton
                        type="button"
                        className="mt-2 w-40 bg-primary-dark"
                      >
                        <p className="text-white">Upload</p>
                      </BaseButton> */}
                    </div>

                    <div className="flex items-end gap-3">
                      {/* <BaseButton
                        type="button"
                        className="mt-2 w-40 bg-primary-dark"
                      >
                        <p className="text-white">Upload</p>
                      </BaseButton> */}
                    </div>
                    {/* <BaseButton
                      type="submit"
                      disabled={isPending}
                      className="mt-2 md:w-[560px] w-[300px] bg-primary flex items-center justify-center"
                    >
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
                    </BaseButton> */}

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                    >
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
                  </div>
                </div>
              </div>
            </div>
          </Stepper.Step>
        </Stepper>
      </form>
    </div>
  );
};

export default CreateCustomerAccount;
