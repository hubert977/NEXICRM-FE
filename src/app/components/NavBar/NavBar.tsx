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



  return (
    <nav className="bg-gray-900 w-16 flex flex-col justify-between items-center p-4">
      <div className="flex flex-col items-center space-y-6">
        <button
          className={`text-white`}
        >
          <FaHome size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaUsers size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaBox size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaShoppingCart size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaChartLine size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaCog size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaComments size={24} />
        </button>
        <button
          className={`text-white`}
        >
          <FaSignOutAlt size={24} />
        </button>
      </div>

      <div className="mt-4">
      </div>
    </nav>
  );
};
