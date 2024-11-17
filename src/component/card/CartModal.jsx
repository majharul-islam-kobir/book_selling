import { FaCartPlus, FaTrash } from "react-icons/fa";

function CartModal({ show, onClose, gallery, updateCartItemQuantity, removeFromCart }) {
  if (!show) return null;

  // Calculate total price
  const getTotalPrice = () => {
    return gallery.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 max-w-4xl relative h-auto max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-400"
        >
          X
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {/* Cart Content */}
        {gallery.length === 0 ? (
          <>
            <FaCartPlus
              className="cursor-pointer mx-auto mt-2 rounded-md p-1 text-[#0AD08B] text-8xl hover:text-green-600 transition-colors duration-300"
            />
            <p className="text-center">Your cart is empty</p>
          </>
        ) : (
          <div>
            {/* Table */}
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Price</th>
                  <th className="text-center py-2">Quantity</th>
                  <th className="text-left py-2 hidden sm:block">Total</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {gallery.map((item, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    {/* Product Info */}
                    <td className="flex items-center py-2">
                      <img
                        src={item.image} // Fixed from item.getImage to item.image
                        alt={item.name}
                        className="w-10 h-10 rounded-md mr-2"
                      />
                      <div className="flex flex-col sm:flex-row">
                        <p className="font-bold sm:block hidden">{item.name}</p>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="py-2">${item.price.toFixed(2)}</td>

                    {/* Quantity */}
                    <td className="text-center py-2">
                      <button
                        className="bg-gray-500 text-white sm:px-2 sm:py-1 p-1 sm:rounded rounded-full hover:bg-gray-600"
                        onClick={() => updateCartItemQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-500 text-white sm:px-2 sm:py-1 p-1 sm:rounded rounded-full hover:bg-gray-600"
                        onClick={() => updateCartItemQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </td>

                    {/* Total Price */}
                    <td className="py-2 mt-0 mb-4 hidden sm:block">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    {/* Remove Item */}
                    <td className="py-2">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Total Price and Checkout */}
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-xl">Total: ${getTotalPrice().toFixed(2)}</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
