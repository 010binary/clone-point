import {
  CreditIcon,
  AccountIcon,
  AdministrationIcon,
  CustomerIcon,
  OperationIcon,
  SettingsIcon,
  CorporateIcon,
} from "@/assets";

export const sideBarLinks = [
  {
    id: 2,
    name: "Customer Management",
    path: "/customer-management",
    icon: CustomerIcon,
  },
  {
    id: 3,
    name: "Account Management",
    path: "/account-management",
    icon: AccountIcon,
  },
  {
    id: 4,
    name: "Operation",
    path: "/operation",
    icon: OperationIcon,
  },
  {
    id: 5,
    name: "Credit",
    path: "/credit",
    icon: CreditIcon,
  },
  {
    id: 6,
    name: "Administration",
    path: "/administration",
    icon: AdministrationIcon,
  },
  {
    id: 7,
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];

export const customerLinks = [
  {
    id: 1,
    name: "Individual Customer",
    path: "/customer-management/individual",
    icon: AccountIcon,
  },
  {
    id: 2,
    name: "Corporate Customer",
    path: "/customer-management/corporate",
    icon: CorporateIcon,
  },
];
