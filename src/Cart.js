import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Cart({
  cartItems,
  setCartItems,
  setIsCartOpen,
  subtotal,
  setSubtotal,
  setCurrentItem,
  isDarkMode,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    let cost = 0;
    cartItems.forEach((item) => (cost += item.price * item.count));
    const calculateCost = cost;
    setSubtotal(calculateCost);
  }, [cartItems]);

  const handleAddItemCount = (item) => {
    const updatedCart =
      cartItems &&
      cartItems.length > 0 &&
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id)
          return { ...cartItem, count: cartItem.count + 1 };
        else return cartItem;
      });
    setCartItems(updatedCart);
    // console.log(item.count);
    console.log("1 Item added");
  };

  const handleSubtractItemCount = (item) => {
    const updatedCart =
      cartItems &&
      cartItems.length > 0 &&
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count - 1 };
        } else return cartItem;
      });
    const removedItems = updatedCart.filter((item) => item.count !== 0);

    setCartItems(removedItems);
    console.log("1 Item removed");
  };

  const handleUnlist = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
  };

  console.log("Subtotal: ", subtotal);
  return (
    <div
      className={`w-[calc(40%)] min-w-96 h-full top-0 right-0 absolute border backdrop-blur-3xl p-4 flex flex-col pt-24 bg-opacity-60 ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <span className="flex justify-between">
        <p className="subhead">Cart</p>
        <CgClose onClick={() => setIsCartOpen(false)} />
      </span>
      <div className="w-full min-h-0.5 p-0.5 my-2 bg-white rounded-full" />
      <span className="h-auto overflow-y-auto w-full">
        {cartItems.map((item) => (
          <div className="w-full h-auto flex items-center justify-between  my-2 bg-white bg-opacity-10 rounded-xl py-4">
            <span
              className="flex items-center justify-between  w-2/3"
              onClick={() => {
                navigate("/inspect");
                setCurrentItem(item);
                setIsCartOpen(false);
              }}
            >
              <span className="flex items-center">
                <img
                  src={item.img}
                  alt="img"
                  className="cardImg mx-2 w-16 h-16 min-w-16 min-h-16"
                />
                <span className="flex flex-col justify-center">
                  <p>{item.name}</p>
                  <p>Rs. {item.price * item.count} /-</p>
                </span>
              </span>
              <p className="p-2 font-bold "> x{item.count}</p>
            </span>
            <span className="flex">
              <GrSubtract onClick={() => handleSubtractItemCount(item)} />
              <GrAdd onClick={() => handleAddItemCount(item)} />
              <CgClose onClick={() => handleUnlist(item)} />
            </span>
          </div>
        ))}
      </span>
      {cartItems.length > 0 ? (
        <span className="flex">
          <p>Subtotal: Rs. {subtotal} /-</p>{" "}
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </span>
      ) : (
        <p>Add items to Cart!</p>
      )}
    </div>
  );
}
