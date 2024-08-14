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
        route: "/admin/dashboard"
    },
    {
        icon: InterestRateIcon,
        page: "Interest rate",
        route: "/admin/dashboard"
    },
    {
        icon: UsersIcon,
        page: "Manage users",
        route: "/admin/dashboard"
    },
    {
        icon: RolesIcon,
        page: "Manage roles",
        route: "/admin/dashboard"
    },
    {
        icon: LincenseIcon,
        page: "License",
        route: "/admin/dashboard"
    },
    {
        icon: ReportIcon,
        page: "Reports",
        route: "/admin/dashboard"
    },
    {
        icon: SettingsIcon,
        page: "Settings",
        route: "/admin/dashboard"
    }
]