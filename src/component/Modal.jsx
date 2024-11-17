import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import getImage from "./getImage";
import AddToCard from "./card/AddToCard";

function Modal({ show, onClose, gallery }) {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(gallery);
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = gallery.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  const handleFavoriteToggle = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const addToCart = (item) => {
    if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg max-w-md w-full mx-auto relative h-[300px] overflow-y-auto">
        
        <div className="w-8 h-8" onClick={onClose}>
          <button className="absolute top-6 right-4 text-black dark:text-white h-9">
            Close
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-4 sticky">
          <label className="text-2xl font-semibold text-gray-700 dark:text-white">
            Search
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search..."
            className=" pl-10 p-3 w-full border shadow-lg bg-white dark:bg-gray-900 rounded-lg mt-2 text-black dark:text-white"
          />
          <FaSearch className="absolute left-3 top-[65px] transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Dynamic Content */}
        {filteredResults.length === 0 && (
          <p className="text-gray-500 text-center">No items found</p>
        )}
        
        {filteredResults.length > 0 && (
          filteredResults.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-2 border-b dark:border-gray-600 cursor-pointer"
              onClick={() => handleOpen(item)}
            >
              <img
                src={getImage(`../assets/image/${item.image}`)}
                alt={item.name}
                className="w-10 h-10 mr-3 rounded-full"
              />
              <p className="text-black dark:text-white">{item.name}</p>
            </div>
          ))
        )}

        {/* AddToCard Modal */}
        {selectedItem && (
          <AddToCard
            show={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            item={selectedItem}
            addToCart={addToCart}
            isAddedToCart={cartItems.some((cartItem) => cartItem.id === selectedItem.id)}
            setIsAddedToCart={(value) => {
              if (!value) {
                setCartItems(cartItems.filter((cartItem) => cartItem.id !== selectedItem.id));
              }
            }}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.includes(selectedItem)}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
