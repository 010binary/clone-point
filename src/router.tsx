import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./pages/onboarding/fotgot-password/ForgotPassword";
import VerifyEmailAccount from "./pages/onboarding/fotgot-password/VerifyEmail";
import ResetPassword from "./pages/onboarding/reset-password/ResetPassword";
import SignIn from "./pages/onboarding/sign-in/SiginIn";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
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
