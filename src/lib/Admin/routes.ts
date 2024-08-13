import DashboardIcon from "../../assets/icons/Vector (6).svg";
import { AdminRoute } from "../../utils/types/admin/admin.types";


export const adminRoutes: AdminRoute[] = [
    {
        icon: DashboardIcon,
        page: "Dashboard",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Branch",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Teller",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Interest rate",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Manage users",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Manage roles",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "License",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Reports",
        route: "/admin/dashboard"
    },
    {
        icon: DashboardIcon,
        page: "Settings",
        route: "/admin/dashboard"
    }
]