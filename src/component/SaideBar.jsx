import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import OverlayMenu from "./OverlayMenu";

function SaideBar({ gallery, setFilteredGallery }) {
  const [showContent, setShowContent] = useState(true);

  // Filter by Name
  const handleFilterByName = () => {
    const sortedByName = [...gallery].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredGallery(sortedByName);
  };

  // Filter by Rating
  const handleFilterByRating = () => {
    const sortedByRating = [...gallery].sort((a, b) => b.rating - a.rating);
    setFilteredGallery(sortedByRating);
  };

  // Filter by Price (Descending)
  const handleFilterByPrice = () => {
    const sortedByPrice = [...gallery].sort((a, b) => b.price - a.price);
    setFilteredGallery(sortedByPrice);
  };

  // Filter by Price (Ascending)
  const handleFilterByPrices = () => {
    const sortedByPrice = [...gallery].sort((a, b) => a.price - b.price);
    setFilteredGallery(sortedByPrice);
  };

  return (
    <>
      <OverlayMenu 
        onFilterByName={handleFilterByName}
        onFilterByRating={handleFilterByRating}
        onFilterByPrice={handleFilterByPrice}
        onFilterByPrices={handleFilterByPrices}
      />

      {showContent && (
        <div className="mt-[40px] hidden md:block">
          <p className="font-bold text-black dark:text-white ml-[40px]">Filter On Page</p>
          <div className="flex flex-col">
            <div className="flex justify-center items-center cursor-pointer" onClick={handleFilterByName}>
              <FaChevronRight className="text-black dark:text-white mt-2" />
              <p className="text-black dark:text-white ml-3">By Name</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer" onClick={handleFilterByRating}>
              <FaChevronRight className="text-black dark:text-white mt-2" />
              <p className="text-black dark:text-white ml-3">By Rating</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer" onClick={handleFilterByPrices}>
              <FaChevronRight className="text-black dark:text-white mt-2" />
              <p className="text-black dark:text-white ml-3">Price (A)</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer" onClick={handleFilterByPrice}>
              <FaChevronRight className="text-black dark:text-white mt-2" />
              <p className="text-black dark:text-white ml-3">Price (D) </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SaideBar;
