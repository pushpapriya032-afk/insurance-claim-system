import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";
import ClaimTable from "../../components/ClaimTable";
import "../../assets/styles/Dashboard.css";
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaFileAlt,
} from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Top Section */}
      
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 rounded-xl text-white shadow-lg">
  <h1 className="text-2xl font-bold">
  Welcome Back 👋
</h1>

<p className="mt-2 text-blue-100">
  Manage your insurance claims quickly and securely.
</p>

<p className="mt-2">
  Policy Number:
  <span className="font-semibold ml-2">
    POL-2026-001
  </span>
</p>
</div>

        {/* Profile Card */}
        
      

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white p-5 rounded-xl shadow border">
    <h3 className="text-xs font-semibold text-gray-500 uppercase">
      Active Claims
    </h3>
    <p className="text-3xl font-bold text-blue-700 mt-2">2</p>
    <p className="text-sm text-green-600 mt-1">
      1 Under Review, 1 Approved
    </p>
  </div>

  <div className="bg-white p-5 rounded-xl shadow border">
    <h3 className="text-xs font-semibold text-gray-500 uppercase">
      Total Coverage
    </h3>
    <p className="text-3xl font-bold text-blue-700 mt-2">$250,000</p>
    <p className="text-sm text-green-600 mt-1">
      Comprehensive Health & Auto
    </p>
  </div>

  <div className="bg-white p-5 rounded-xl shadow border">
    <h3 className="text-xs font-semibold text-gray-500 uppercase">
      Recent Settlement
    </h3>
    <p className="text-3xl font-bold text-blue-700 mt-2">$4,250</p>
    <p className="text-sm text-gray-500 mt-1">
      Disbursed recently
    </p>
  </div>
</div>

      {/* Claim Progress */}
      <div className="bg-white rounded-xl shadow border p-6">
  <h2 className="text-xl font-bold text-blue-700 mb-5">
    Current Claim Progress
  </h2>

  <div className="flex justify-between text-sm text-gray-600 mb-6">
    <span>
      Claim ID: <strong>CLM-2026-8841</strong>
    </span>

    <span>
      Type: <strong>Vehicle Damage</strong>
    </span>

    <span>
      Date Filed: <strong>July 20, 2026</strong>
    </span>
  </div>

  <div className="grid grid-cols-4 gap-5">

    <div className="text-center">
      <div className="h-2 rounded-full bg-green-500 mb-2"></div>
      <p className="text-green-600 font-semibold text-sm">Submitted</p>
    </div>

    <div className="text-center">
      <div className="h-2 rounded-full bg-green-500 mb-2"></div>
      <p className="text-green-600 font-semibold text-sm">Survey Completed</p>
    </div>

    <div className="text-center">
      <div className="h-2 rounded-full bg-blue-600 mb-2"></div>
      <p className="text-blue-600 font-semibold text-sm">
        Manager Approval
      </p>
    </div>

    <div className="text-center">
      <div className="h-2 rounded-full bg-gray-300 mb-2"></div>
      <p className="text-gray-500 font-semibold text-sm">Payout</p>
    </div>

  </div>
</div>

      {/* Recent Claims */}
      <ClaimTable />
    </DashboardLayout>
  );
}

export default Dashboard;