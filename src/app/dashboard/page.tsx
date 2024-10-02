"use client";
import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaChartLine,
  FaCog,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-gradient-to-b bg-oceanBlue to-blue-800">
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-rows-4 grid-cols-2 gap-4 h-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Sekcja {index + 1}</h2>
              <p className="text-gray-600">Dane analityczne...</p>
            </div>
          ))}
        </div>
      </main>

      <nav className="bg-gray-900 w-16 flex flex-col justify-between items-center p-4">
        <div className="flex flex-col items-center space-y-6">
          <button
            className={`text-white ${activeTab === "home" ? "bg-steelBlue rounded" : ""}`}
            onClick={() => handleTabChange("home")}
          >
            <FaHome size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "clients" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("clients")}
          >
            <FaUsers size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "products" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("products")}
          >
            <FaBox size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "orders" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("orders")}
          >
            <FaShoppingCart size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "analytics" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("analytics")}
          >
            <FaChartLine size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "settings" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("settings")}
          >
            <FaCog size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "messages" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("messages")}
          >
            <FaComments size={24} />
          </button>
          <button
            className={`text-white ${activeTab === "logout" ? "bg-purple-700 rounded" : ""}`}
            onClick={() => handleTabChange("logout")}
          >
            <FaSignOutAlt size={24} />
          </button>
        </div>

        <div className="mt-4">
          <img
            src="/path-to-your-avatar.png"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
      </nav>
    </div>
  );
}
