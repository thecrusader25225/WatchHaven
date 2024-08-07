import { GrReturn } from "react-icons/gr";
import Cart from "./Cart";
import { BsBack } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useRef } from "react";
export default function Inspect({
  item,
  isCartOpen,
  setIsCartOpen,
  cartItems,
  setCartItems,
  allItems,
  currentItem,
  addItemToCart,
  subtotal,
  setSubtotal,
  isWishlistOpen,
  wishlistItems,
  setWishlistItems,
  setIsWishlistOpen,
  setCurrentItem,
  addItemToWishlist,
}) {
  const navigate = useNavigate();
  const inspectRef = useRef(null);
  const scrollUp = () => {
    inspectRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
      <div ref={inspectRef} />
      <div className="w-full px-4 xl:px-[16%] justify-center items-center h-full pt-28  flex flex-col overflow-y-auto">
        <div className="w-full h-full flex flex-col">
          <span className="flex items-center" onClick={() => navigate("/")}>
            <IoReturnUpBack className="  text-white" />
            <p>Back</p>
          </span>
          <div className="flex  items-center border p-4 w-full h-auto min-h-[calc(400px)]  ">
            <img src={item.img} alt="img" className="cardImg mx-2" />
            <span className="flex flex-col w-full h-full items-start justify-center">
              <p className="text-4xl">{item.name}</p>
              <p className="font-mono text-lg font-thin italic">
                Brand: {item.brand}
              </p>
              <p className="italic font-semibold text-3xl">
                Price: Rs. {item.price} /-
              </p>
              <p className="italic font-thin text-sm">"{item.description}"</p>
              <p className="text-3xl ">Details</p>
              <p className="font-serif">Style: {item.style}</p>
              <p className="font-serif">Type: {item.type}</p>
              <p className="font-serif">
                Features:{" "}
                {item.features.map((feature, index) => (
                  <p className="inline">
                    {index === item.features.length - 1
                      ? feature + " ."
                      : feature + " , "}{" "}
                  </p>
                ))}
              </p>
              <span className="flex justify-between w-full h-16 border">
                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                  <button onClick={() => setIsCartOpen(true)}>
                    Go to Cart
                  </button>
                ) : (
                  <button onClick={() => addItemToCart(item)}>
                    Add To Cart
                  </button>
                )}
                {wishlistItems.some(
                  (wishlistItem) => wishlistItem.id === item.id
                ) ? (
                  <button
                    onClick={() =>
                      setWishlistItems(
                        wishlistItems.filter(
                          (wishlistItem) => wishlistItem.id !== item.id
                        )
                      )
                    }
                  >
                    Cancel
                  </button>
                ) : (
                  <button onClick={() => addItemToWishlist(item)}>
                    Add To Wishlist
                  </button>
                )}
              </span>
            </span>
          </div>
          {/* more */}
          <div className="flex flex-col justify-center items-center w-full h-auto border ">
            <p className="text-4xl">More from {item.brand}</p>
            <span className="flex flex-col justify-center w-full h-full">
              {allItems.map(
                (item) =>
                  item.brand === currentItem.brand &&
                  item !== currentItem && (
                    <button
                      className="flex justify-between items-center p-2 border"
                      onClick={() => {
                        setCurrentItem(item);
                        scrollUp();
                      }}
                    >
                      <span className="flex items-center">
                        <img
                          src={item.img}
                          alt="img"
                          className="cardImg mx-2 w-20 h-20 min-w-20 min-h-20"
                        />
                        <span className="flex flex-col items-start">
                          <p className="name text-center break-words">
                            {item.name}
                          </p>
                          <p className="brand">{item.brand}</p>
                          <p className="type">{item.type}</p>
                        </span>
                      </span>
                      <p className="price text-xl">Rs. {item.price} /-</p>
                    </button>
                  )
              )}
            </span>
          </div>
        </div>
        {isCartOpen && (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            setIsCartOpen={setIsCartOpen}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
          />
        )}
        {isWishlistOpen && (
          <Wishlist
            wishlistItems={wishlistItems}
            setWishlistItems={setWishlistItems}
            setIsWishlistOpen={setIsWishlistOpen}
            setIsCartOpen={setIsCartOpen}
            addItemToCart={addItemToCart}
            cartItems={cartItems}
          />
        )}
      </div>
    </>
  );
}
