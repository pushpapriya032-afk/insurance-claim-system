import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CustomerDashboard from "../pages/customer/Dashboard";
import NewClaim from "../pages/customer/NewClaim";

import OfficerDashboard from "../pages/officer/Dashboard";
import SurveyorDashboard from "../pages/surveyor/Dashboard";
import ManagerDashboard from "../pages/manager/Dashboard";
import FinanceDashboard from "../pages/finance/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/new-claim" element={<NewClaim />} />

        <Route path="/officer-dashboard" element={<OfficerDashboard />} />
        <Route path="/surveyor-dashboard" element={<SurveyorDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/finance-dashboard" element={<FinanceDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;