import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#FAF7F2]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
