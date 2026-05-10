import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./components/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { UserAccessPage } from "./pages/UserAccessPage";
import { ProductManagementPage } from "./pages/ProductManagementPage";
import { BranchManagementPage } from "./pages/BranchManagementPage";
import { EmployeeManagementPage } from "./pages/EmployeeManagementPage";
import { ShiftManagementPage } from "./pages/ShiftManagementPage";
import { AttendanceManagementPage } from "./pages/AttendanceManagementPage";
import { DailySalesPage } from "./pages/DailySalesPage";
import { InventoryMonitoringPage } from "./pages/InventoryMonitoringPage";
import { ReportingAnalyticsPage } from "./pages/ReportingAnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "users", Component: UserAccessPage },
      { path: "master-data/products", Component: ProductManagementPage },
      { path: "master-data/branches", Component: BranchManagementPage },
      { path: "master-data/employees", Component: EmployeeManagementPage },
      { path: "master-data/shifts", Component: ShiftManagementPage },
      { path: "attendance", Component: AttendanceManagementPage },
      { path: "daily-sales", Component: DailySalesPage },
      { path: "inventory", Component: InventoryMonitoringPage },
      { path: "reports", Component: ReportingAnalyticsPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
