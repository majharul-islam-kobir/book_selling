import { FaStar } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';


function AddToCard({ addToCart, show, onClose, item, isAddedToCart, setIsAddedToCart, onFavoriteToggle, isFavorite, setIsFavorite, cartItems, setCartItems }) {
  
  const handleFavoriteClick = () => {
    onFavoriteToggle(item);
    setIsFavorite((prev) => !prev); // Toggle isFavorite directly
  };
  
  const handleAddToCart = () => {
    if (!isAddedToCart) {
      addToCart(item);
      setIsAddedToCart(true);  
    }
  };

  if (!show) return null; // If show is false, return nothing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg max-w-md mx-auto relative text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>

        {/* Displaying the image */}
        <div className='flex justify-center items-center'>
          <img 
           src={item.image}
            alt={item.name} 
            className="w-[150px] h-[200px] rounded-md mb-4"
          />
        </div>

        {/* Displaying other details */}
        <h3 className="text-2xl font-bold dark:text-white">{item.name}</h3>
        <p className="dark:text-white">{item.author}</p>
        <p className="dark:text-white">When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing...</p>

        <div className='flex justify-between mt-3'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-orange-500 text-xl" />)}
          </div>
         
          <div onClick={handleFavoriteClick}>
            {isFavorite ? (
              <MdFavorite className="text-red-500 text-2xl p-1 border border-green-600" />
            ) : (
              <MdFavoriteBorder className="text-black dark:text-white text-2xl p-1 border border-green-600" />
            )}
          </div>   

          <button
            className={`px-2 rounded-sm ${isAddedToCart ? "bg-gray-500" : "bg-[#00D991]"}`}
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to cart" : `$${item.price} | Add to cart`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCard;
