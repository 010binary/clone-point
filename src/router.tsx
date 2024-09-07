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
import ViewDetails from "./pages/crm/ViewDetails";
import PostTransaction from "./pages/operations/PostTransaction";
import AuthorizeTransaction from "./pages/operations/AuthorizeTransactions";
import ViewAuthorizedTransaction from "./pages/operations/ViewAuthorizedTransaction";
import TellerTransaction from "./pages/operations/TellerTransactions";
import ViewTellerTransaction from "./pages/operations/ViewTellerTransaction";
import ViewTransactionReport from "./pages/operations/ViewTransactionReport";
import TransactionsReport from "./pages/operations/TransactionsReport";
import OperationsDashboard from "./pages/operations/MainDashboard";
import LoanDashboard from "./pages/loans/LoanDashboard";
import ApprovedLoans from "./pages/loans/ApprovedLoans";
import LoanStatement from "./pages/loans/LoanStatement";
import ActiveLoans from "./pages/loans/ActiveLoans";
import ViewActiveLoan from "./pages/loans/ViewActiveLoan";
import ViewApprovedLoan from "./pages/loans/ViewApprovedLoan";
import ViewCompletedLoan from "./pages/loans/ViewCompletedLoan";
import ViewDeclinedLoan from "./pages/loans/ViewDeclinedLoan";
import ViewDueLoan from "./pages/loans/ViewDueLoan";
import ManagerAccount from "./pages/crm/ManagerAccount";
import Report from "./pages/dashboard/admin/Report";
import TrialBalance from "./pages/dashboard/admin/TrialBalance";
import AccountReport from "./pages/dashboard/admin/AccountReport";
import TransactionReport from "./pages/dashboard/admin/TransactionReport";
import TransactionReportView from "./pages/dashboard/admin/TransactionReportView";
import LoanReport from "./pages/dashboard/admin/LoanReport";
import LoanReportDetails from "./pages/dashboard/admin/LoanReportDetails";
import ViewTrialBalance from "./pages/dashboard/admin/ViewTrialBalance";

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
        path: "/admin/reports",
        element: <Report />,
      },
      {
        path: "/admin/reports/trial-balance",
        element: <TrialBalance />,
      },
      {
        path: "/admin/reports/account-report",
        element: <AccountReport />,
      },
      {
        path: "/admin/reports/transaction-report",
        element: <TransactionReport />,
      },
      {
        path: "/admin/reports/transaction-report/view",
        element: <TransactionReportView />,
      },
      {
        path: "/admin/reports/loan-report",
        element: <LoanReport />,
      },
      {
        path: "/admin/reports/loan-report-details",
        element: <LoanReportDetails />,
      },
      {
        path: "/admin/reports/view-trial-balance",
        element: <ViewTrialBalance />,
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
      },
      {
        path: "/admin/crm/view-details",
        element: <ViewDetails />,
      },
      {
        path: "/admin/crm/client-manger",
        element: <ManagerAccount />,
      },
      {
        path: "/admin/operation/post-transactions",
        element: <PostTransaction />,
      },
      {
        path: "/admin/operation/authorize-transactions",
        element: <AuthorizeTransaction />,
      },
      {
        path: "/admin/operation/view-authorized-transaction",
        element: <ViewAuthorizedTransaction />,
      },
      {
        path: "/admin/operation/teller-transactions",
        element: <TellerTransaction />,
      },
      {
        path: "/admin/operation/view-teller-transactions",
        element: <ViewTellerTransaction />,
      },
      {
        path: "/admin/operation/transactions-report",
        element: <TransactionsReport />,
      },
      {
        path: "/admin/operation/view-transactions-report",
        element: <ViewTransactionReport />,
      },
      {
        path: "/admin/operation",
        element: <OperationsDashboard />,
      },
      {
        path: "/admin/operation/loan-manager/loans",
        element: <LoanDashboard />,
      },
      {
        path: "/admin/operation/loan-manager/approved-loans",
        element: <ApprovedLoans />,
      },
      {
        path: "/admin/operation/loan-manager/loan-statement",
        element: <LoanStatement />,
      },
      {
        path: "/admin/operation/loan-manager/active",
        element: <ActiveLoans />,
      },
      {
        path: "/admin/operation/loan-manager/view-active",
        element: <ViewActiveLoan />,
      },
      {
        path: "/admin/operation/loan-manager/view-approved",
        element: <ViewApprovedLoan />,
      },
      {
        path: "/admin/operation/loan-manager/view-completed",
        element: <ViewCompletedLoan />,
      },
      {
        path: "/admin/operation/loan-manager/view-declined",
        element: <ViewDeclinedLoan />,
      },
      {
        path: "/admin/operation/loan-manager/view-due",
        element: <ViewDueLoan />,
      },
    ],
  },
]);
