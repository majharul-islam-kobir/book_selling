import { FaCartPlus } from "react-icons/fa";
import Logo from "../assets/image/logo.png";
import DarkMode from "./DarkMde";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header({ onCartIconClick, cartItemsCount }) {
  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-500 dark:bg-black shadow-2xl z-50">
      <div className="w-10/12 mx-auto flex justify-between">
        <img className="w-[50px] rounded-full" src={Logo} alt="Logo" />
        <div className="flex justify-center items-center mb-2">
          <IoIosNotificationsOutline className="cursor-pointer mt-2 rounded-md border-green-500 border-2 bg-green-900 mx-3 p-1 text-[#0AD08B] text-3xl hover:text-red-600 transition-colors duration-300" />
          <DarkMode className="mt-2 rounded-md border-green-500 border-2 bg-green-900 mx-3 p-1 text-[#0AD08B] text-3xl hover:text-green-600 transition-colors duration-300" />
          
          <div className="relative">
            <FaCartPlus
              className="cursor-pointer mt-2 rounded-md border-green-500 border-2 bg-green-900 mx-3 p-1 text-[#0AD08B] text-3xl hover:text-green-600 transition-colors duration-300"
              onClick={onCartIconClick} // Opens CartModal
            />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
