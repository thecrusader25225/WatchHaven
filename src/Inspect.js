import { GrReturn } from "react-icons/gr";
import Cart from "./Cart";
import { BsBack } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useRef } from "react";
import Heart from "./Heart";
import AddToCart from "./AddToCart";
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
  isDarkMode,
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
          <div className="flex  items-center bg-white bg-opacity-10 rounded-xl my-2 p-4 w-full h-auto min-h-[calc(400px)]  ">
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
              <div className="hbar" />
              <span className="flex justify-between w-full my-2 ">
                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                  <button onClick={() => setIsCartOpen(true)}>
                    <AddToCart text={"Go To Cart"} />
                  </button>
                ) : (
                  <button onClick={() => addItemToCart(item)}>
                    <AddToCart text={"Add To Cart"} />
                  </button>
                )}
                {wishlistItems.some(
                  (wishlistItem) => wishlistItem.id === item.id
                ) ? (
                  <Heart
                    isChecked={true}
                    item={item}
                    setWishlistItems={setWishlistItems}
                    addItemToWishList={addItemToWishlist}
                    wishlistItems={wishlistItems}
                  />
                ) : (
                  <Heart
                    isChecked={false}
                    item={item}
                    setWishlistItems={setWishlistItems}
                    addItemToWishList={addItemToWishlist}
                    wishlistItems={wishlistItems}
                  />
                )}
              </span>
            </span>
          </div>
          {/* more */}
          <div className="flex flex-col justify-center items-center w-full h-auto bg-white bg-opacity-10 rounded-xl  ">
            <p className="text-4xl">More from {item.brand}</p>
            <span className="flex flex-col justify-center w-full h-full">
              {allItems.map(
                (item) =>
                  item.brand === currentItem.brand &&
                  item !== currentItem && (
                    <button
                      className="flex justify-between items-center p-2 bg-white bg-opacity-10 rounded-xl m-2"
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
            setCurrentItem={setCurrentItem}
            isDarkMode={isDarkMode}
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
            setCurrentItem={setCurrentItem}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </>
  );
}
