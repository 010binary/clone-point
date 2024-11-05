/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stepper } from "../../../components/ui/stepper/stepper";
// import { relationship } from "../../../lib/Onboarding";
// import { employmentStatus, workSector } from "../../../lib/Onboarding";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import moment from "moment";
// import { title } from "../../../lib/Onboarding/signup";
// import BaseButton from "../../../components/ui/base-button/BaseButton";
// import SelectInput from "../../../components/ui/select-input/SelectInput";
import { toast } from "react-toastify";
// import TextInput from "../../../components/ui/text-input/TextInput";
// import { identification } from "../../../lib/Onboarding";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
// import { Input } from "../../../components/ui/input/input";

import useCreateCustomer from "../../../api/crm/create-customer";
import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
import { payloadSchema } from "../../../api/crm/create-payload";

//

//
const CreateCustomerAccount = ({ onClose }: any) => {
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

  type FormData = z.infer<typeof payloadSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,

    // formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(payloadSchema),
    mode: "onChange",
  });

  const maxValue = 4;
  const values = watch();

  const canProceed = () => {
    const {
      firstName,
      lastName,
      middleName,
      bvn,
      accountType,
      gender,
      maritalStatus,
      mobilePhone,
      citizenship,
      levelOfEducation,
    } = values.customerDetail || {};
    const {
      expirationDate,
      identificationNumber,
      identificationType,
      issueDate,
      other,
      backOfIdCardLinkBase64String,
      frontOfIdCardImageBase64String,
    } = values.identification || {};

    const {
      address1,
      city,
      country,
      email,
      homePhone,
      lga,

      proofOfAddressBase64String,
      residentialStatus,
      state,
    } = values.address || {};
    const {
      address,
      email: nextkinemail,
      firstName: nextkinfirstName,
      lastName: nextkinlastName,
      phone,
      relationship,
      title,
    } = values.nextOfKin || {};

    if (
      step === 0 &&
      (firstName ||
        lastName ||
        middleName ||
        mobilePhone ||
        bvn ||
        accountType ||
        gender ||
        maritalStatus ||
        citizenship ||
        levelOfEducation)
    )
      return true;
    if (
      step === 1 &&
      (expirationDate ||
        identificationNumber ||
        identificationType ||
        issueDate ||
        other ||
        backOfIdCardLinkBase64String ||
        frontOfIdCardImageBase64String)
    )
      return true;

    if (
      step === 2 &&
      (address1 ||
        city ||
        country ||
        email ||
        homePhone ||
        lga ||
        proofOfAddressBase64String ||
        residentialStatus ||
        state ||
        address ||
        nextkinemail ||
        nextkinfirstName ||
        nextkinlastName ||
        phone ||
        relationship ||
        title)
    )
      return true;
  };
  const nextStep = () => {
    console.log("Current step:", step);
    console.log("Can proceed:", canProceed());

    if (!isNaN(step) && step < maxValue && canProceed()) {
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
          setValue(
            "identification.frontOfIdCardImageBase64String",
            base64Image as string
          );
          break;
        case "backFile":
          setPreviewBackImage(base64Image as string);
          setValue(
            "identification.backOfIdCardLinkBase64String",
            base64Image as string
          );
          break;
        case "utilityBill":
          setPreviewUtilityBill(base64Image as string);
          setValue("address.proofOfAddressBase64String", base64Image as string);
          break;
        case "cacDocument":
          setPreviewCACDocument(base64Image as string);
          setValue("employment.cacDocumentBase64String", base64Image as string);
          break;
        case "passport":
          setPreviewPassport(base64Image as string);
          setValue(
            "employment.passportPhotographBase64String",
            base64Image as string
          );
          break;
        case "signature":
          setPreviewSignature(base64Image as string);
          setValue(
            "employment.signDocumentBase64String",
            base64Image as string
          );
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
  const formatAndSetDate = (dateValue: any, setValue: any, fieldName: any) => {
    const formattedDate = moment(dateValue).format("DD-MM-YYYY");
    setValue(fieldName, formattedDate); // Store the formatted date in the specified field
  };
  const handleDateChange = (e: any) => {
    formatAndSetDate(e.target.value, setValue, "customerDetail.dateOfBirth");
  };

  const handleDateChange1 = (e: any) => {
    formatAndSetDate(e.target.value, setValue, "identification.issueDate");
  };
  const handleDateChange2 = (e: any) => {
    formatAndSetDate(e.target.value, setValue, "identification.expirationDate");
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await mutateAsync(data);
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
                        onValueChange={(value) =>
                          setValue("customerDetail.title", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mr">Mr</SelectItem>
                          <SelectItem value="Ms">Mrs</SelectItem>
                          <SelectItem value="Dr">Dr</SelectItem>
                          <SelectItem value="Prof">Prof</SelectItem>
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
                        {...register("customerDetail.firstName")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Middle Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("customerDetail.middleName")}
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
                        {...register("customerDetail.lastName")}
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
                        {...register("customerDetail.mobilePhone")}
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
                        // {...register("customerDetail.dateOfBirth")}
                        onChange={handleDateChange}
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
                        {...register("customerDetail.bvn")}
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
                        onValueChange={(value) =>
                          setValue("customerDetail.accountType", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select account type " />
                        </SelectTrigger>
                        <SelectContent>
                          {/* <SelectItem value="Saving">Saving</SelectItem> */}
                          <SelectItem value="Current">Current</SelectItem>
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
                        onValueChange={(value) =>
                          setValue("customerDetail.gender", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select  Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Marital Status
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("customerDetail.maritalStatus", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select martial status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Single">Single</SelectItem>
                          <SelectItem value="Married">Married</SelectItem>
                          <SelectItem value="Divorce">Divorced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Citizenship
                        </Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("customerDetail.citizenship", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
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
                        onValueChange={(value) =>
                          setValue("customerDetail.levelOfEducation", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bsc">BSC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

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
                        onValueChange={(value) =>
                          setValue("identification.identificationType", value)
                        }
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
                        {...register("identification.other")}
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
                        {...register("identification.identificationNumber")}
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
                        // {...register("identification.issueDate")}
                        onChange={handleDateChange1}
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
                        // {...register("identification.expirationDate")}
                        onChange={handleDateChange2}
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
                          Address
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("address.address1")}
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
                        onValueChange={(value) =>
                          setValue("address.residentialStatus", value)
                        }
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
                        {...register("address.state")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          City
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("address.city")}
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
                        {...register("address.lga")}
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
                        {...register("address.country")}
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
                        {...register("address.homePhone")}
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
                        {...register("address.email")}
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
                          setValue("nextOfKin.title", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mr">Mr</SelectItem>
                          <SelectItem value="Mrs">Mrs</SelectItem>
                          <SelectItem value="Dr">Dr</SelectItem>
                          <SelectItem value="Prof">Prof</SelectItem>
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
                          First Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextOfKin.firstName")}
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
                          Last Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextOfKin.lastName")}
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
                          Address
                        </Label>
                      </div>
                      <Input
                        type="text"
                        {...register("nextOfKin.address")}
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
                        {...register("nextOfKin.phone")}
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
                        {...register("nextOfKin.email")}
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
                          setValue("nextOfKin.relationship", value)
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
                          setValue("employment.employmentStatus", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Employed">Employed</SelectItem>
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
                        {...register("employment.state")}
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
                          Net Monthly Income
                        </Label>
                      </div>
                      <Input
                        type="number"
                        {...register("employment.netMonthlyIncome", {
                          valueAsNumber: true,
                        })}
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
                        {...register("employment.currentEmployer")}
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
                        onValueChange={(value) =>
                          setValue("employment.sector", value)
                        }
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Banking">Banking</SelectItem>
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
                        {...register("employment.officeEmail")}
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
                        {...register("employment.taxNumber")}
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
                        {...register("employment.pensionNumber")}
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
                        {...register("employment.officeAddress")}
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

                    <h4 className=" mt-2 text-[#404B7C] font-semibold">
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

                    <h4 className="mt-2 text-[#404B7C] text-lg font-semibold">
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
