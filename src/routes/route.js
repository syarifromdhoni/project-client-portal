import React from "react";
import { Routes, Route } from "react-router-dom";
// Menu
import Dashboard from "../pages/Dashboard";
import MyTransaction from "../pages/MyTransaction";
import Billing from "../pages/Billing";
import TroubleTicket from "../pages/TroubleTicket";
//==
import ServiceOrder from "../pages/service-order/ServiceOrder";
import ServiceOrderCrossConnect from "../pages/service-order/ServiceOrderCrossConnect";
import ServiceOrderCrossConnectRemoval from "../pages/service-order/ServiceOrderCrossConnectRemoval";
import ServiceOrderEquipment from "../pages/service-order/ServiceOrderEquipment";
import ServiceOrderMeetingRoom from "../pages/service-order/ServiceOrderMeetingRoom";
import ServiceOrderOtherServices from "../pages/service-order/ServiceOrderOtherServices";
import ServiceOrderPatchCable from "../pages/service-order/ServiceOrderPatchCable";
import ServiceOrderPowerManagement from "../pages/service-order/ServiceOrderPowerManagement";
import ServiceOrderRequestDocumentation from "../pages/service-order/ServiceOrderRequestDocumentation";
import ServiceOrderSiteVisit from "../pages/service-order/ServiceOrderSiteVisit";

// Setup
import UserManagement from "../pages/UserManagement";
import RoleManagement from "../pages/RoleManagement";
// Report
import ReportServiceOrder from "../pages/ReportServiceOrder";
import ReportTroubleTicket from "../pages/ReportTroubleTicket";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="my-transaction" element={<MyTransaction />} />
      <Route path="billing" element={<Billing />} />
      <Route path="trouble-ticket" element={<TroubleTicket />} />
      {/* SERVICE ORDER */}
      <Route path="service-order" element={<ServiceOrder />} />
      <Route
        path="service-order/cross-connect"
        element={<ServiceOrderCrossConnect />}
      />
      <Route
        path="service-order/cross-connect-removal"
        element={<ServiceOrderCrossConnectRemoval />}
      />
      <Route
        path="service-order/equipment"
        element={<ServiceOrderEquipment />}
      />
      <Route
        path="service-order/meeting-room"
        element={<ServiceOrderMeetingRoom />}
      />
      <Route
        path="service-order/other-services"
        element={<ServiceOrderOtherServices />}
      />
      <Route
        path="service-order/patch-cable"
        element={<ServiceOrderPatchCable />}
      />
      <Route
        path="service-order/power-management"
        element={<ServiceOrderPowerManagement />}
      />
      <Route
        path="service-order/request-documentation"
        element={<ServiceOrderRequestDocumentation />}
      />
      <Route
        path="service-order/site-visit"
        element={<ServiceOrderSiteVisit />}
      />
      {/* USER MANAGEMENT */}
      <Route path="user-management" element={<UserManagement />} />
      <Route path="role-management" element={<RoleManagement />} />
      <Route path="report-service-order" element={<ReportServiceOrder />} />
      <Route path="report-trouble-ticket" element={<ReportTroubleTicket />} />
      <Route
        path="*"
        element={
          <main>
            <h3>404 - Route not found !</h3>
          </main>
        }
      />
    </Routes>
  );
};

export default AppRoute;
