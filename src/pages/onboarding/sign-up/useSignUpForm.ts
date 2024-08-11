import { object, string } from "yup";
import { useForm } from "../../../utils/hooks/useForm";
import { toast } from "react-toastify";
import { UserAPI } from "../../../http/api/auth/auth.types";
import { SignInExistingUser } from "../../../http/api/auth/auth.index";
import { useState } from "react";

export default function useSignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<UserAPI.SignUpUserDTO>({
    initialFormData: {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      userName: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      bankBranch: "",
      staffID: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: object({
      title: string().required("This field is required"),
      firstName: string().required("This field is required"),
      lastName: string().required("This field is required"),
      email: string().required("This field is required"),
      gender: string().required("This field is required"),
      userName: string().required("This field is required"),
      address: string().required("This field is required"),
      city: string().required("This field is required"),
      country: string().required("This field is required"),
      zipCode: string().required("This field is required"),
      bankBranch: string().required("This field is required"),
      staffID: string().required("This field is required"),
      password: string().required("This field is required"),
      confirmPassword: string().required("This field is required"),
    }),

    async onSubmit(formData) {
      setIsLoading(true);
      const { data, error } = await SignInExistingUser(formData);
      if (data) {
        toast.success(
          data.message ||
            "A reset email has been sent. Please check your inbox."
        );
        setTimeout(() => setIsLoading(false), 60000);
      }
      if (error) {
        toast.error(
          error.message ||
            "This email does not exist in our database. Please sign up."
        );
        setIsLoading(false);
      }
    },
  });

  return { ...form, isLoading };
}
