import DashboardIcon from "../../assets/icons/Vector (6).svg";
import TellerIcon from "../../assets/icons/Vector (7).svg";
import InterestRateIcon from "../../assets/icons/Vector (8).svg";
import BranchIcon from "../../assets/icons/Vector (9).svg";
import RolesIcon from "../../assets/icons/Vector (10).svg";
import LincenseIcon from "../../assets/icons/Vector (11).svg";
import ReportIcon from "../../assets/icons/Vector (12).svg";
import UsersIcon from "../../assets/icons/manage_accounts_FILL1_wght400_GRAD0_opsz24 1 (1).svg";
import SettingsIcon from "../../assets/icons/Group.svg";
import { AdminRoute } from "../../utils/types/admin/admin.types";
import Types from "../../assets/icons/types.svg";
import Titles from "../../assets/icons/titles.svg";
import Activity from "../../assets/icons/activity.svg";
import OtherUsers from "../../assets/icons/other-users.svg";
import PostTransactionIcon from "../../assets/icons/post-transactions.svg";
import AuthorizeTransactionIcon from "../../assets/icons/4.svg";
import TellerTransactionIcon from "../../assets/icons/5.svg";
import TransactionIconReport from "../../assets/icons/6.svg";
import LoanManager from "../../assets/icons/7.svg";
import Investment from "../../assets/icons/8.svg";


export const adminRoutes: AdminRoute[] = [
    {
        icon: DashboardIcon,
        page: "Dashboard",
        route: "/admin/dashboard"
    },
    {
        icon: BranchIcon,
        page: "Branch",
        route: "/admin/branch"
    },
    {
        icon: TellerIcon,
        page: "Teller",
        route: "/admin/teller"
    },
    {
        icon: InterestRateIcon,
        page: "Interest rate",
        route: "/admin/interest-rate"
    },
    {
        icon: UsersIcon,
        page: "Manage users",
        route: "/admin/manage-users"
    },
    {
        icon: RolesIcon,
        page: "Manage roles",
        route: "/admin/manage-roles"
    },
    {
        icon: LincenseIcon,
        page: "License",
        route: "/admin/license"
    },
    {
        icon: ReportIcon,
        page: "Reports",
        route: "/admin/reports"
    },
    {
        icon: SettingsIcon,
        page: "Settings",
        route: "/admin/settings"
    }
]


export const adminSettingsRoutes: AdminRoute[] = [
    {
        icon: Types,
        page: "Types",
        route: "/admin/settings"
    },
    {
        icon: OtherUsers,
        page: "Other users",
        route: "/admin/settings/users"
    },
    {
        icon: Activity,
        page: "Activity log",
        route: "/admin/settings/activity-log"
    },
    {
        icon: Titles,
        page: "Titles",
        route: "/admin/settings/titles"
    }
]

export const CRMRoutes: AdminRoute[] = [
    {
        icon: DashboardIcon,
        page: "Dashboard",
        route: "/admin/crm"
    },
    {
        icon: OtherUsers,
        page: "Account Generator",
        route: "/admin/crm/account-generator"
    },
    {
        icon: OtherUsers,
        page: "Client manager",
        route: "/admin/crm/client-manger"
    }
]


export const OperationRoutes: AdminRoute[] = [
    {
        icon: DashboardIcon,
        page: "Dashboard",
        route: "/admin/operation"
    },
    {
        icon: PostTransactionIcon,
        page: "Post Transactions",
        route: "/admin/operation/post-transactions"
    },
    {
        icon: AuthorizeTransactionIcon,
        page: "Authorize Transactions",
        route: "/admin/operation/authorize-transactions"
    },
    {
        icon: TellerTransactionIcon,
        page: "Teller Transactions",
        route: "/admin/operation/teller-transactions"
    },
    {
        icon: TransactionIconReport,
        page: "Transactions Report",
        route: "/admin/operation/transactions-report"
    },
    {
        icon: LoanManager,
        page: "Loan Manager",
        route: "/admin/operation/teller-transactions"
    },
    {
        icon: Investment,
        page: "Investments",
        route: "/admin/operation/teller-transactions"
    }
]