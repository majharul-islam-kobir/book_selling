import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import AddToCard from "../component/card/AddToCard";
import getImage from "../component/getImage";

function GallaryItem({ gallery, addToCart, cartItems = [], favorites, onFavoriteToggle }) {
  const [showModal, setShowModal] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInCart = cartItems.some((item) => item.id === gallery.id);
    setIsAddedToCart(isInCart);
    const isFav = favorites.some((item) => item.id === gallery.id);
    setIsFavorite(isFav);
  }, [cartItems, favorites, gallery.id]);

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      addToCart(gallery);
      setIsAddedToCart(true);
    }
  };

  const handleFavoriteClick = () => {
    onFavoriteToggle(gallery);
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="border-2 sm:ml-4 my-2  sm:border-gray-500 shadow-slate-600 dark:bg-black rounded-md">
      <div className="md:p-[15px] p-0">
        <img
          src={getImage(`../assets/image/${gallery.image}`)}
          alt={gallery.name}
          onClick={() => setShowModal(true)}
          className="cursor-pointer rounded-md mx-auto "
        />
        <div className="h-[80px]">
        <h4 className="dark:text-white mx-5 text-center sm:text-sm text-xl">{gallery.name}</h4>
        <p className="dark:text-white mx-5 text-center sm:text-sm text-xl">{gallery.author}</p>

        </div>

        <div className="flex justify-between mx-5 my-4 ">
          <div className="flex">
            {[...Array(gallery.rating)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" />
            ))}
          </div>
          <div onClick={handleFavoriteClick}>
            {isFavorite ? (
              <MdFavorite className="text-red-500 text-2xl p-1 border border-green-600 " />
            ) : (
              <MdFavoriteBorder className="text-black dark:text-white text-2xl p-1 border border-green-600" />
            )}
          </div>
        </div>

        <button
          className={`px-2 rounded-sm ${isAddedToCart ? "bg-gray-500" : "bg-[#00D991] mx-5"}`}
          onClick={handleAddToCart}
          disabled={isAddedToCart}
        >
          {isAddedToCart ? "Added to cart" : `$${gallery.price} | Add to cart`}
        </button>
      </div>
      <AddToCard 
        onFavoriteToggle={onFavoriteToggle}
        addToCart={addToCart} 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        item={gallery} 
        isAddedToCart={isAddedToCart} 
        setIsAddedToCart={setIsAddedToCart}
        isFavorite={isFavorite} 
        setIsFavorite={setIsFavorite} 
      />
    </div>
  );
}

export default GallaryItem;
