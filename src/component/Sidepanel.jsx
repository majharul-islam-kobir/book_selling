import { useState } from "react";
import { BiSolidHot } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";
import { MdFavoriteBorder, MdOutlineUpcoming } from "react-icons/md";
import Modal from "./Modal"; // Modal কম্পোনেন্ট ইম্পোর্ট করতে হবে

function SidePanel({ gallery, setFilteredGallery, favorites }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true); // Modal ওপেন করার জন্য showModal true করা
  };

  const handleCloseModal = () => {
    setShowModal(false); // Modal বন্ধ করার জন্য showModal false করা
  };

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleTrendingClick = () => {
    const trendingItems = gallery.filter((item) => item.rating === 5);
    setFilteredGallery(trendingItems);
  };

  const handleNewReleasesClick = () => {
    const newReleaseItems = gallery.filter(
      (item) => item.status === "new_releases"
    );
    setFilteredGallery(newReleaseItems);
  };

  const handleComingSoonClick = () => {
    const comingSoonItems = gallery.filter(
      (item) => item.status === "coming_soon"
    );
    setFilteredGallery(comingSoonItems);
  };

  const handleFavoritesClick = () => {
    setFilteredGallery(favorites);
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal} gallery={gallery}/>
      )}

      {/* Toggle Button */}
      <button onClick={toggleSidePanel} className="md:hidden">
        <div className="w-[30px] sm:w-[40px] h-[2px] mt-5 bg-black dark:bg-white "></div>
        <div className="w-[17px] sm:w-[24px] h-[2px] mt-4 bg-black dark:bg-white "></div>
      </button>

      {/* Sidebar */}
      <div
        className={`sidepanel fixed top-[60px] left-0 h-full bg-gray-900 transition-all duration-500 ease-in-out overflow-hidden z-10 ${
          isOpen ? "w-[250px]" : "w-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidePanel}
          className="closebtn absolute top-0 right-6 text-4xl text-gray-400"
        >
          &times;
        </button>

        <div className="mt-[40px] p-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              onClick={handleClick} // Modal ওপেন করার জন্য
              placeholder="Search..."
              className="bg-gray-950 p-1 border border-green-800 rounded-md w-full text-white"
            />
            <FaSearch className="absolute md:right-[15px] right-[15px] top-[10px] text-gray-400" />
          </div>

          {/* Panel Items */}
          <div
            className="mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
            onClick={handleTrendingClick}
          >
            <BiSolidHot className="text-sm text-white" />
            <p className="ml-6 text-md text-white">Trending</p>
          </div>

          <div
            className="mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
            onClick={handleNewReleasesClick}
          >
            <FiFolderPlus className="text-sm text-white" />
            <p className="ml-6 text-md text-white">New Releases</p>
          </div>

          <div
            className="mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
            onClick={handleComingSoonClick}
          >
            <MdOutlineUpcoming className="text-sm text-white" />
            <p className="ml-6 text-md text-white">Coming Soon</p>
          </div>

          <div
            className="mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
            onClick={handleFavoritesClick}
          >
            <MdFavoriteBorder className="text-sm lg:text-xl text-white" />
            <p className="ml-6 text-md text-white">Favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
