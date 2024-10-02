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

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState<String>("home");

  const handleTabChange = (tab: String) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-gray-900 w-16 flex flex-col justify-between items-center p-4">
      <div className="flex flex-col items-center space-y-6">
        <button
          className={`text-white`}
          onClick={() => handleTabChange("home")}
        >
          <FaHome size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("clients")}
        >
          <FaUsers size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("products")}
        >
          <FaBox size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("orders")}
        >
          <FaShoppingCart size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("analytics")}
        >
          <FaChartLine size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("settings")}
        >
          <FaCog size={24} />
        </button>
        <button
          className={`text-white`}
          onClick={() => handleTabChange("messages")}
        >
          <FaComments size={24} />
        </button>
        <button
          className={`text-white`}
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
  );
};
