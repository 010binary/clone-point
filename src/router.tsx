import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./pages/onboarding/fotgot-password/ForgotPassword";
import VerifyEmailAccount from "./pages/onboarding/fotgot-password/VerifyEmail";
import ResetPassword from "./pages/onboarding/reset-password/ResetPassword";
import SignIn from "./pages/onboarding/sign-in/SiginIn";
import SignUp from "./pages/onboarding/sign-up/SignUp";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmailAccount />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
