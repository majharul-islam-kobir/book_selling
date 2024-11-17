import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function OverlayMenu({ onFilterByName, onFilterByRating, onFilterByPrice, onFilterByPrices }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button onClick={toggleSidePanel} className="block md:hidden">
        <div className="w-[30px] sm:w-[40px] h-[2px] mt-5 bg-black dark:bg-white "></div>
        <div className="w-[17px] sm:w-[24px] h-[2px] mt-4 bg-black dark:bg-white "></div>
      </button>
      {/* Sidebar */}
      <div
        className={`sidepanel fixed top-[60px] right-0 h-[400px] bg-gray-900 transition-all duration-500 ease-in-out overflow-hidden z-10 ${
          isOpen ? "w-[250px]" : "w-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidePanel}
          className="closebtn absolute top-0 left-6 text-4xl text-gray-400"
        >
          &times;
        </button>

        {/* Sidebar Links */}
        <div className="mt-[40px]">
          <p className="font-bold text-white ml-[40px]">Filter On Page</p>

          <div className="flex ml-[40px] items-center cursor-pointer" onClick={onFilterByName}>
            <FaChevronRight className="text-white mt-2" />
            <p className="text-white ml-3">By Name</p>
          </div>
          <div className="flex ml-[40px] items-center cursor-pointer" onClick={onFilterByRating}>
            <FaChevronRight className="text-white mt-2" />
            <p className="text-white ml-3">By Rating</p>
          </div>
          <div className="flex ml-[40px] items-center cursor-pointer" onClick={onFilterByPrices}>
            <FaChevronRight className="text-white mt-2" />
            <p className="text-white ml-3">By Price (Asc)</p>
          </div>
          <div className="flex ml-[40px] items-center cursor-pointer" onClick={onFilterByPrice}>
            <FaChevronRight className="text-white mt-2" />
            <p className="text-white ml-3">By Price (Desc)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverlayMenu;
