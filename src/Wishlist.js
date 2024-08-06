import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Wishlist({
  wishlistItems,
  setWishlistItems,
  setIsWishlistOpen,
  setIsCartOpen,
  addItemToCart,
  cartItems,
}) {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let cost = 0;
    wishlistItems.forEach((item) => (cost += item.price * item.count));
    const calculateCost = cost;
    setSubtotal(calculateCost);
  }, [wishlistItems]);

  const handleUnlist = (item) => {
    const updatedCart = wishlistItems.filter((cartItem) => cartItem !== item);
    setWishlistItems(updatedCart);
  };

  console.log("Subtotal: ", subtotal);
  return (
    <div className="w-1/3 min-w-96 h-full top-0 right-0 absolute border backdrop-blur-sm p-4 flex flex-col pt-24">
      <span className="flex justify-between">
        <p>Wishlist</p>
        <CgClose onClick={() => setIsWishlistOpen(false)} />
      </span>
      <span className="h-auto overflow-y-auto w-full">
        {wishlistItems.map((item) => (
          <div className="w-full h-16 flex items-center justify-between border">
            <p>{item.name}</p>
            <p>Rs. {item.price} /-</p>
            {cartItems.some((cartItem) => cartItem.id === item.id) ? (
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsWishlistOpen(false);
                }}
              >
                Go to Cart
              </button>
            ) : (
              <button onClick={() => addItemToCart(item)}>Add To Cart</button>
            )}
            <CgClose onClick={() => handleUnlist(item)} />
          </div>
        ))}
      </span>
      {wishlistItems.length <= 0 && <p>Add items to Wishlist!</p>}
    </div>
  );
}
