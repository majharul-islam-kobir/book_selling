import { useState } from "react";
import { BiSolidHot } from "react-icons/bi";
import { FiFolderPlus } from "react-icons/fi";
import { MdFavoriteBorder, MdOutlineUpcoming } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal";
import SidePanel from "./Sidepanel";

function MenuBar({ gallery, setFilteredGallery, favorites }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    <>
      <SidePanel
        gallery={gallery}
        setFilteredGallery={setFilteredGallery}
        favorites={favorites}
      />
      <div className="mt-[40px] hidden md:block">
        <Modal show={showModal} onClose={handleCloseModal} gallery={gallery} />

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            onClick={handleClick}
            placeholder="Search..."
            className="bg-gray-950 p-1 border border-green-800 rounded-md w-full text-white"
          />
          <FaSearch className="cursor-pointer absolute md:right-[15px] right-[15px] top-[10px] text-gray-400" />
        </div>

        {/* Menu Items */}
        <div
          className="cursor-pointer mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
          onClick={handleTrendingClick}
        >
          <BiSolidHot className="cursor-pointer text-sm text-black dark:text-white" />
          <p className="md:ml-3 text-md text-black dark:text-white">
            Trending
          </p>
        </div>

        <div
          className="cursor-pointer mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
          onClick={handleNewReleasesClick}
        >
          <FiFolderPlus className="cursor-pointer text-sm text-black dark:text-white" />
          <p className="md:ml-3 text-md text-black dark:text-white">
            New Releases
          </p>
        </div>

        <div
          className="cursor-pointer mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
          onClick={handleComingSoonClick}
        >
          <MdOutlineUpcoming className="text-sm text-black dark:text-white" />
          <p className="md:ml-3 text-md text-black dark:text-white">
            Coming Soon
          </p>
        </div>

        <div
          className="cursor-pointer mt-[20px] flex justify-start items-center hover:bg-green-700 rounded-md transition-all duration-300 ease-linear p-1"
          onClick={handleFavoritesClick}
        >
          <MdFavoriteBorder className="text-sm lg:text-xl text-black dark:text-white" />
          <p className="md:ml-3 text-md text-black dark:text-white">
            Favorites
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
