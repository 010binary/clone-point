// import DashboardIcon from "../../assets/icons/Vector (6).svg";
// import TellerIcon from "../../assets/icons/Vector (7).svg";
// import InterestRateIcon from "../../assets/icons/Vector (8).svg";
// import BranchIcon from "../../assets/icons/Vector (9).svg";
import RolesIcon from "../../assets/icons/Vector (10).svg";
// import LincenseIcon from "../../assets/icons/Vector (11).svg";
// import ReportIcon from "../../assets/icons/Vector (12).svg";
import UsersIcon from "../../assets/icons/manage_accounts_FILL1_wght400_GRAD0_opsz24 1 (1).svg";
// import SettingsIcon from "../../assets/icons/Group.svg";
import { AdminRoute } from "../../utils/types/admin/admin.types";
import Types from "../../assets/icons/types.svg";
import Titles from "../../assets/icons/titles.svg";
import Activity from "../../assets/icons/activity.svg";
import OtherUsers from "../../assets/icons/other-users.svg";
// import PostTransactionIcon from "../../assets/icons/post-transactions.svg";
// import AuthorizeTransactionIcon from "../../assets/icons/4.svg";
// import TellerTransactionIcon from "../../assets/icons/5.svg";
import TransactionIconReport from "../../assets/icons/6.svg";
import LoanManager from "../../assets/icons/7.svg";
// import Investment from "../../assets/icons/8.svg";

export const adminRoutes: AdminRoute[] = [
  {
    id: "crm",
    icon: UsersIcon,
    page: "CRM",
    route: "#",
    subRoutes: [
      {
        page: "Account Management",
        route: "/admin/crm/client-manger",
      },
      {
        page: "Customer Management",
        route: "/admin/crm/customer-creation",
      },
    ],
  },
  {
    id: "admin",
    icon: OtherUsers,
    page: "Admin",
    route: "#",
    subRoutes: [
      {
        page: "Branch",
        route: "/admin/branch",
      },
      {
        page: "Teller",
        route: "/admin/teller",
      },
      {
        page: "Interest rate",
        route: "/admin/interest-rate",
      },
      {
        page: "Manage users",
        route: "/admin/manage-users",
      },
      {
        page: "Manage roles",
        route: "/admin/manage-roles",
      },
      {
        page: "License",
        route: "/admin/license",
      },

      {
        page: "Settings",
        route: "/admin/settings",
      },
    ],
  },
  {
    id: "operation",
    icon: RolesIcon,
    page: "Operations",
    route: "#",
    subRoutes: [
      {
        page: "Post Transactions",
        route: "/admin/operation/post-transactions",
      },
      {
        page: "Authorize Transactions",
        route: "/admin/operation/authorize-transactions",
      },
      {
        page: "Teller Transactions",
        route: "/admin/operation/teller-transactions",
      },
    ],
  },
  {
    id: "loan",
    icon: LoanManager,
    page: "Loans",
    route: "#",
    subRoutes: [
      {
        page: "Loans",
        route: "/admin/operation/loan-manager/loans",
      },
      {
        page: "Active Loans",
        route: "/admin/operation/loan-manager/active",
      },
      {
        page: "Loan Statement",
        route: "/admin/operation/loan-manager/loan-statement",
      },
    ],
  },
  {
    id: "report",
    icon: TransactionIconReport,
    page: "Reports",
    route: "#",
    subRoutes: [
      {
        page: "Transactions Report",
        route: "/admin/operation/transactions-report",
      },
      {
        page: "Reports",
        route: "/admin/reports",
      },
    ],
  },
];

export const adminSettingsRoutes: AdminRoute[] = [
  {
    id: "types",
    icon: Types,
    page: "Types",
    route: "/admin/settings",
  },
  {
    id: "users",
    icon: OtherUsers,
    page: "Other users",
    route: "/admin/settings/users",
  },
  {
    id: "activity",
    icon: Activity,
    page: "Activity log",
    route: "/admin/settings/activity-log",
  },
  {
    id: "title",

    icon: Titles,
    page: "Titles",
    route: "/admin/settings/titles",
  },
];

// export const CRMRoutes: AdminRoute[] = [
//   {
//     icon: DashboardIcon,
//     page: "Dashboard",
//     route: "/admin/crm",
//   },
//   {
//     icon: OtherUsers,
//     page: "Account Generator",
//     route: "/admin/crm/account-generator",
//   },
//   {
//     icon: OtherUsers,
//     page: "Client manager",
//     route: "#",
//     subRoutes: [
//       {
//         page: "Account",
//         route: "/admin/crm/client-manger",
//       },
//     ],
//   },
// ];

// export const OperationRoutes: AdminRoute[] = [
//   {
//     icon: DashboardIcon,
//     page: "Dashboard",
//     route: "/admin/operation",
//   },

//   {
//     icon: Investment,
//     page: "Investments",
//     route: "/admin/operation/teller-transactions",
//   },
// ];
