import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Search, Plus, TrendingDown, TrendingUp, Package } from "lucide-react";

const inventoryData = [
  {
    id: "PRD-001",
    product: "Classic Glazed Donut",
    category: "Donuts",
    stockIn: 500,
    usage: 450,
    available: 50,
    status: "Normal",
  },
  {
    id: "PRD-002",
    product: "Chocolate Donut",
    category: "Donuts",
    stockIn: 400,
    usage: 325,
    available: 75,
    status: "Normal",
  },
  {
    id: "PRD-003",
    product: "Premium Coffee Beans",
    category: "Beverages",
    stockIn: 100,
    usage: 95,
    available: 5,
    status: "Low",
  },
  {
    id: "PRD-004",
    product: "Croissant Dough",
    category: "Pastries",
    stockIn: 200,
    usage: 198,
    available: 2,
    status: "Critical",
  },
  {
    id: "PRD-005",
    product: "Sugar",
    category: "Ingredients",
    stockIn: 500,
    usage: 320,
    available: 180,
    status: "Normal",
  },
];

const columns = [
  { key: "id", label: "Product ID", width: "10%" },
  { key: "product", label: "Product Name", width: "22%" },
  { key: "category", label: "Category", width: "12%" },
  { key: "stockIn", label: "Stock In Total", width: "12%" },
  { key: "usage", label: "Usage Total", width: "12%" },
  { key: "available", label: "Available Stock", width: "12%" },
  { key: "status", label: "Stock Status", width: "12%" },
  { key: "actions", label: "Actions", width: "8%" },
];

export function InventoryMonitoringPage() {
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      const typeMap: Record<string, any> = {
        Normal: "success",
        Low: "warning",
        Critical: "danger",
      };
      return <StatusBadge status={value} type={typeMap[value] || "neutral"} />;
    }
    if (key === "category") {
      const colors: Record<string, string> = {
        Donuts: "bg-[#622F1E] text-white",
        Beverages: "bg-blue-100 text-blue-700",
        Pastries: "bg-orange-100 text-orange-700",
        Ingredients: "bg-green-100 text-green-700",
      };
      return (
        <span className={`px-3 py-1 rounded-lg text-xs ${colors[value] || "bg-gray-100 text-gray-700"}`}>
          {value}
        </span>
      );
    }
    if (key === "actions") {
      return (
        <button className="px-3 py-1 rounded-lg bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors text-xs">
          View
        </button>
      );
    }
    return value;
  };

  return (
    <div>
      <Header
        title="Inventory & Stock Monitoring"
        breadcrumbs={["Home", "Inventory"]}
      />

      <div className="p-8 space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search inventory..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Categories</option>
              <option>Donuts</option>
              <option>Beverages</option>
              <option>Pastries</option>
              <option>Ingredients</option>
            </select>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Status</option>
              <option>Normal</option>
              <option>Low</option>
              <option>Critical</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Record Stock-In</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Total Stock Received</p>
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-3xl text-[#2d2d2d]">1,700</p>
            <p className="text-xs text-green-600 mt-1">+250 this week</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Total Stock Used</p>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl text-[#2d2d2d]">1,388</p>
            <p className="text-xs text-[#6b6b6b] mt-1">81.6% usage rate</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Remaining Stock</p>
              <div className="w-10 h-10 rounded-xl bg-[#622F1E] bg-opacity-10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#622F1E]" />
              </div>
            </div>
            <p className="text-3xl text-[#622F1E]">312</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Available items</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Low Stock Items</p>
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <p className="text-3xl text-red-600">5</p>
            <p className="text-xs text-red-600 mt-1">Action required</p>
          </div>
        </div>

        {/* Inventory Table */}
        <DataTable columns={columns} data={inventoryData} renderCell={renderCell} />

        {/* Stock Movement & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Critical Items Alert */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-4">Critical Stock Items</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-red-50">
                <div>
                  <p className="text-sm text-[#2d2d2d]">Croissant Dough</p>
                  <p className="text-xs text-[#6b6b6b]">Only 2 units remaining</p>
                </div>
                <StatusBadge status="Critical" type="danger" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-50">
                <div>
                  <p className="text-sm text-[#2d2d2d]">Premium Coffee Beans</p>
                  <p className="text-xs text-[#6b6b6b]">Only 5 units remaining</p>
                </div>
                <StatusBadge status="Low" type="warning" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
                <span className="text-sm text-[#2d2d2d]">View Stock-In History</span>
                <span className="text-xs text-[#6b6b6b]">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
                <span className="text-sm text-[#2d2d2d]">View Usage History</span>
                <span className="text-xs text-[#6b6b6b]">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
                <span className="text-sm text-[#2d2d2d]">Generate Stock Report</span>
                <span className="text-xs text-[#6b6b6b]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
