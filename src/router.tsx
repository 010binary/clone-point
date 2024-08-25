import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./pages/onboarding/fotgot-password/ForgotPassword";
import VerifyEmailAccount from "./pages/onboarding/fotgot-password/VerifyEmail";
import ResetPassword from "./pages/onboarding/reset-password/ResetPassword";
import SignUp from "./pages/onboarding/sign-up/SignUp";
import Branch from "./pages/dashboard/admin/Branch";
import ViewBranch from "./pages/dashboard/admin/ViewBranch";
import AddBranch from "./pages/dashboard/admin/AddBranch";
import EditBranch from "./pages/dashboard/admin/EditBranch";
import Teller from "./pages/dashboard/admin/Teller";
import ViewTeller from "./pages/dashboard/admin/ViewTeller";
import InterestRate from "./pages/dashboard/admin/InterestRate";
import ViewInterestRate from "./pages/dashboard/admin/ViewInterestRate";
import ManageRoles from "./pages/dashboard/admin/ManageRoles";
import Dashboard from "./pages/dashboard/admin/Dashboard";
import User from "./pages/dashboard/admin/Users";
import { Router } from "@remix-run/router";
import ViewUser from "./pages/dashboard/admin/ViewUser";
import EditUser from "./pages/dashboard/admin/EditUser";
import Lincense from "./pages/dashboard/admin/Lincense";
import Index from "./pages/Index";
import Settings from "./pages/dashboard/admin-settings/Settings";
import ActivityLog from "./pages/dashboard/admin-settings/ActivityLog";
import Titles from "./pages/dashboard/admin-settings/Titles";
import Users from "./pages/dashboard/admin-settings/Users";
import ManageAccesibility from "./pages/dashboard/admin-settings/ManageAccesibility";
import AccountGenerator from "./pages/crm/AccountGenerator";
import CRMDashboard from "./pages/crm/Dashboard";
import OfficeData from "./pages/crm/OfficeData";

export const router: Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
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
      {
        path: "/admin/manage-roles",
        element: <ManageRoles />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/manage-users",
        element: <User />,
      },
      {
        path: "/admin/view-user",
        element: <ViewUser />,
      },
      {
        path: "/admin/edit-user",
        element: <EditUser />,
      },
      {
        path: "/admin/license",
        element: <Lincense />,
      },
      {
        path: "/admin/settings",
        element: <Settings />,
      },
      {
        path: "/admin/settings/activity-log",
        element: <ActivityLog />,
      },
      {
        path: "/admin/settings/titles",
        element: <Titles />,
      },
      {
        path: "/admin/settings/users",
        element: <Users />,
      },
      {
        path: "/admin/settings/accesibility",
        element: <ManageAccesibility />,
      },
      {
        path: "/admin/crm",
        element: <CRMDashboard />,
      },
      {
        path: "/admin/crm/account-generator",
        element: <AccountGenerator />,
      },
      {
        path: "/admin/crm/client-manager",
        element: <ManageAccesibility />,
      },
      {
        path: "/admin/crm/office-data",
        element: <OfficeData />,
      }
    ],
  },
]);
