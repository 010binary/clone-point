import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./pages/onboarding/fotgot-password/ForgotPassword";
import VerifyEmailAccount from "./pages/onboarding/fotgot-password/VerifyEmail";
import ResetPassword from "./pages/onboarding/reset-password/ResetPassword";
import SignIn from "./pages/onboarding/sign-in/SiginIn";
import SignUp from "./pages/onboarding/sign-up/SignUp";
import Branch from "./pages/dashboard/admin/Branch";
import ViewBranch from "./pages/dashboard/admin/ViewBranch";
import AddBranch from "./pages/dashboard/admin/AddBranch";
import EditBranch from "./pages/dashboard/admin/EditBranch";
import Teller from "./pages/dashboard/admin/Teller";
import ViewTeller from "./pages/dashboard/admin/ViewTeller";
import InterestRate from "./pages/dashboard/admin/InterestRate";
import ViewInterestRate from "./pages/dashboard/admin/ViewInterestRate";

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
      {
        path: "/admin/branch",
        element: <Branch />,
      },
      {
        path: "/admin/view-branch",
        element: <ViewBranch />,
      },
      {
        path: "/admin/add-branch",
        element: <AddBranch />,
      },
      {
        path: "/admin/edit-branch",
        element: <EditBranch />,
      },
      {
        path: "/admin/teller",
        element: <Teller />,
      },
      {
        path: "/admin/view-teller",
        element: <ViewTeller />,
      },
      {
        path: "/admin/interest-rate",
        element: <InterestRate />,
      },
      {
        path: "/admin/view-interest-rate",
        element: <ViewInterestRate />,
      },
    ],
  },
]);
