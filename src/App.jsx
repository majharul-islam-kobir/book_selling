import { useState } from "react";
import GallaryItem from './gallery/GallaryItem';
import MenuBar from './component/MenuBar';
import CartModal from "./component/card/CartModal";
import { initialBookData } from './data/inisialBoookData';
import Header from './component/Header';
import SaideBar from './component/SaideBar';
import Footer from './component/Footer';
import Logo from "./component/Logo";

function App() {
  const galleryData = initialBookData();
  const [filteredGallery, setFilteredGallery] = useState(galleryData);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setShowCartModal(false);
  };

  const handleCloseModal = () => {
    setShowCartModal(false);
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleFavoriteToggle = (item) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((favItem) => favItem.id === item.id);
      if (isFavorite) {
        return prevFavorites.filter((favItem) => favItem.id !== item.id);
      }
      return [...prevFavorites, item];
    });
  };

  return (
    <div className="container mx-auto">
      <Header onCartIconClick={() => setShowCartModal(true)} cartItemsCount={cartItems.length} />
      
      {/* Responsive Layout */}
      <div className="w-11/12 mx-auto sm:mt-20">
        <div className="block sm:hidden flex justify-between mt-12">
          <MenuBar
            gallery={galleryData}
            setFilteredGallery={setFilteredGallery}
            favorites={favorites}
          />
          <div className=" mt-4 text-center mb-4 sm:hidden">
           <Logo />
         </div>
          <SaideBar
            gallery={galleryData}
            setFilteredGallery={setFilteredGallery}
            favorites={favorites}
          />
        </div>

        <div className="hidden sm:grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <MenuBar
              gallery={galleryData}
              setFilteredGallery={setFilteredGallery}
              favorites={favorites}
            />
          </div>
          <div className=" col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 text-center border border-gray-500 dark:bg-black shadow-slate-900 p-[20px]">

            {filteredGallery.map((gallery) => (
              <GallaryItem
               
                key={gallery.id}
                gallery={gallery}
                addToCart={addToCart}
                cartItems={cartItems}
                favorites={favorites}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
          <div className="col-span-2">
            <SaideBar
              gallery={galleryData}
              setFilteredGallery={setFilteredGallery}
              favorites={favorites}
            />
          </div>
        </div>

        <div className="block sm:hidden mt-4">
          {filteredGallery.map((gallery) => (
            <GallaryItem
              key={gallery.id}
              gallery={gallery}
              addToCart={addToCart}
              cartItems={cartItems}
              favorites={favorites}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>

      <Footer />

      <CartModal
        show={showCartModal}
        onClose={handleCloseModal}
        gallery={cartItems}
        updateCartItemQuantity={updateCartItemQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
