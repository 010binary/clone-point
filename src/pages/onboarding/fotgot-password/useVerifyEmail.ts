import { object, string } from "yup";
import { useForm } from "../../../utils/hooks/useForm";
import { toast } from "react-toastify";
import { UserAPI } from "../../../http/api/auth/auth.types";
import { VerifyEmail } from "../../../http/api/auth/auth.index";
import { useState } from "react";

export default function useVerifyEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<UserAPI.VerifyEmailDTO>({
    initialFormData: {
      otp: "",
    },

    validationSchema: object({
      otp: string().required("This field is required"),
    }),

    async onSubmit(formData) {
      setIsLoading(true);
      const { data, error } = await VerifyEmail(formData);
      if (data) {
        toast.success(data.message || "Account verified sucessfully.");
        setTimeout(() => setIsLoading(false), 60000);
      }
      if (error) {
        toast.error(error.message || "Invalid otp code.");
        setIsLoading(false);
      }
    },
  });

  return { ...form, isLoading };
}
