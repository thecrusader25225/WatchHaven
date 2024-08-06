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
    <div className="w-1/3 min-w-96 h-full top-0 right-0 absolute border backdrop-blur-sm p-4 flex flex-col pt-24">
      <span className="flex justify-between">
        <p>Cart</p>
        <CgClose onClick={() => setIsCartOpen(false)} />
      </span>
      <span className="h-auto overflow-y-auto w-full">
        {cartItems.map((item) => (
          <div className="w-full h-16 flex items-center justify-between border">
            <p>{item.name}</p>
            <p>Rs. {item.price * item.count} /-</p>
            <span className="flex">
              <p>{item.count}</p>
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
