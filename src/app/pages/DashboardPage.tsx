import { Header } from "../components/Header";
import { SummaryCard } from "../components/SummaryCard";
import {
  DollarSign,
  Store,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StatusBadge } from "../components/StatusBadge";

// Sample Data
const salesTrendData = [
  { date: "Mar 17", sales: 45000 },
  { date: "Mar 18", sales: 52000 },
  { date: "Mar 19", sales: 48000 },
  { date: "Mar 20", sales: 61000 },
  { date: "Mar 21", sales: 55000 },
  { date: "Mar 22", sales: 67000 },
  { date: "Mar 23", sales: 72000 },
];

const branchSalesData = [
  { branch: "SM Manila", sales: 85000 },
  { branch: "Makati", sales: 72000 },
  { branch: "BGC", sales: 68000 },
  { branch: "Quezon City", sales: 55000 },
  { branch: "Pasig", sales: 48000 },
];

const productCategoryData = [
  { name: "Donuts", value: 45, color: "#622F1E" },
  { name: "Coffee", value: 30, color: "#8b5234" },
  { name: "Pastries", value: 15, color: "#a67c52" },
  { name: "Beverages", value: 10, color: "#D4C4B0" },
];

const recentReports = [
  {
    id: "RPT-2023-001",
    branch: "SM Manila",
    date: "2026-03-23",
    shift: "Morning",
    sales: "₱25,450",
    status: "Submitted",
  },
  {
    id: "RPT-2023-002",
    branch: "Makati",
    date: "2026-03-23",
    shift: "Afternoon",
    sales: "₱22,800",
    status: "Reviewed",
  },
  {
    id: "RPT-2023-003",
    branch: "BGC",
    date: "2026-03-23",
    shift: "Morning",
    sales: "₱28,300",
    status: "Pending",
  },
  {
    id: "RPT-2023-004",
    branch: "Quezon City",
    date: "2026-03-22",
    shift: "Evening",
    sales: "₱18,900",
    status: "Late",
  },
];

const bestSellingProducts = [
  { product: "Classic Glazed Donut", quantity: 450, revenue: "₱22,500" },
  { product: "Premium Coffee", quantity: 380, revenue: "₱28,500" },
  { product: "Chocolate Donut", quantity: 325, revenue: "₱19,500" },
  { product: "Bavarian Donut", quantity: 290, revenue: "₱17,400" },
  { product: "Iced Coffee", quantity: 275, revenue: "₱20,625" },
];

export function DashboardPage() {
  return (
    <div>
      <Header title="Dashboard" breadcrumbs={["Home", "Dashboard"]} />

      <div className="p-8 space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <SummaryCard
            title="Total Daily Sales"
            value="₱72,450"
            icon={DollarSign}
            trend={{ value: "+12.5%", isPositive: true }}
          />
          <SummaryCard
            title="Active Branches"
            value="12"
            icon={Store}
            trend={{ value: "+2 new", isPositive: true }}
          />
          <SummaryCard
            title="Products Sold Today"
            value="1,234"
            icon={ShoppingBag}
            trend={{ value: "+8.3%", isPositive: true }}
          />
          <SummaryCard
            title="Attendance Rate"
            value="98.5%"
            icon={Users}
            trend={{ value: "+1.2%", isPositive: true }}
          />
          <SummaryCard
            title="Stock Alerts"
            value="5"
            icon={Package}
            trend={{ value: "Low stock", isPositive: false }}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Trend */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-[#2d2d2d]">Sales Trend (Last 7 Days)</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D4C4B0" />
                <XAxis dataKey="date" stroke="#6b6b6b" />
                <YAxis stroke="#6b6b6b" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#622F1E"
                  strokeWidth={3}
                  dot={{ fill: "#622F1E", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Product Category Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-6">Product Category Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Branch Sales Comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-6">Branch Sales Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={branchSalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#D4C4B0" />
              <XAxis dataKey="branch" stroke="#6b6b6b" />
              <YAxis stroke="#6b6b6b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#622F1E" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Row - Tables and Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reports */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-[#2d2d2d]">Recent Submitted Reports</h3>
              <button className="text-sm text-[#622F1E] hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/20 transition-colors"
                >
                  <div>
                    <p className="text-sm text-[#2d2d2d]">{report.branch}</p>
                    <p className="text-xs text-[#6b6b6b]">
                      {report.date} • {report.shift}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#2d2d2d] mb-1">{report.sales}</p>
                    <StatusBadge
                      status={report.status}
                      type={
                        report.status === "Submitted"
                          ? "info"
                          : report.status === "Reviewed"
                          ? "success"
                          : report.status === "Pending"
                          ? "warning"
                          : "danger"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Selling Products */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-[#2d2d2d]">Best-Selling Products</h3>
              <button className="text-sm text-[#622F1E] hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {bestSellingProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#622F1E] bg-opacity-10 flex items-center justify-center">
                      <span className="text-sm text-[#622F1E]">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#2d2d2d]">{product.product}</p>
                      <p className="text-xs text-[#6b6b6b]">{product.quantity} sold</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#622F1E]">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-6">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">Manage Products</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">Manage Branches</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">Manage Employees</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">Stock-In Records</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">Daily Reports</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-[#2d2d2d] text-center">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
