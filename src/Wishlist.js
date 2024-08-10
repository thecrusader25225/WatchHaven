import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function Wishlist({
  wishlistItems,
  setWishlistItems,
  setIsWishlistOpen,
  setIsCartOpen,
  addItemToCart,
  cartItems,
  setCurrentItem,
  isDarkMode,
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
    <div
      className={`w-[calc(40%)] min-w-96 h-full top-0 right-0 absolute bg-opacity-60 backdrop-blur-3xl p-4 flex flex-col pt-24 ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <span className="flex justify-between items-center">
        <p className="subhead">Wishlist</p>
        <CgClose className="sbtn" onClick={() => setIsWishlistOpen(false)} />
      </span>
      <div className="w-full min-h-0.5 p-0.5 my-2 bg-white rounded-full" />
      <span className="h-auto overflow-y-auto w-full overflow-x-hidden">
        {wishlistItems.map((item) => (
          <div className="w-full h-auto my-2 py-2 flex items-center justify-between bg-white bg-opacity-10 rounded-xl">
            <span
              className="flex items-center cursor-pointer hover:underline"
              onClick={() => {
                navigate("/inspect");
                setCurrentItem(item);
                setIsWishlistOpen(false);
              }}
            >
              <img
                src={item.img}
                alt="img"
                className="cardImg mx-2 w-20 h-20 min-w-20 min-h-20"
              />
              <span className="flex flex-col">
                <p>{item.name}</p>
                <p>Rs. {item.price} /-</p>
              </span>
            </span>
            <span className="flex items-center ">
              {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsWishlistOpen(false);
                  }}
                >
                  <AddToCart text={"Go To Cart"} />
                </button>
              ) : (
                <button onClick={() => addItemToCart(item)}>
                  <AddToCart text={"Add To Cart"} />
                </button>
              )}
              <CgClose className="sbtn" onClick={() => handleUnlist(item)} />
            </span>
          </div>
        ))}
      </span>
      {wishlistItems.length <= 0 && <p>Add items to Wishlist!</p>}
    </div>
  );
}
