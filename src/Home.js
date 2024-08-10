import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Slideshow from "./Slideshow";
import Heart from "./Heart";
import AddToCart from "./AddToCart";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
export default function Home({
  cartItems,
  setCartItems,
  allItems,
  addItemToCart,
  styles,
  brands,
  setCurrentItem,
  isCartOpen,
  setIsCartOpen,
  currentParam,
  setCurrentParam,
  isWishlistOpen,
  setIsWishlistOpen,
  wishlistItems,
  setWishlistItems,
  addItemToWishlist,
  subtotal,
  setSubtotal,
  adImages,
  isDarkMode,
}) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 xl:px-[16%] mx-auto h-full pt-24 flex flex-col overflow-y-auto">
      <div className=" w-full min-h-[calc(600px)]">
        <Slideshow
          images={adImages}
          setCurrentItem={setCurrentItem}
          allItems={allItems}
        />
      </div>

      {/* show styles */}
      <div className="section">
        <p className="subhead">
          Discover Perfect Watches for Every Style and Occasion
        </p>
        <div className="hbar" />
        <span className="flex w-full h-full overflow-x-auto">
          {styles.map((style, index) => (
            <button
              key={index}
              className="card btn"
              onClick={() => {
                setCurrentParam((prev) => ({ ...prev, style: style }));
                navigate(`/category/style/${style}`);
              }}
            >
              <img
                src={allItems.find((item) => item.style === style)?.img || "#"}
                className="cardImg"
                alt={style}
              />
              <p className="text-3xl font-thin">{style}</p>
            </button>
          ))}
        </span>
      </div>

      {/* show brands */}
      <div className="section">
        <p className="subhead">Iconic Watches from the Best Brands</p>
        <div className="hbar" />
        <span className="w-full h-full overflow-x-auto flex">
          {brands.map((brand, index) => (
            <button
              key={index}
              className="card btn"
              onClick={() => {
                setCurrentParam((prev) => ({ ...prev, brand: brand }));
                navigate(`/category/brand/${brand}`);
              }}
            >
              <img
                src={allItems.find((item) => item.brand === brand)?.img || "#"}
                className="cardImg"
                alt={brand}
              />
              <p className="text-3xl font-thin">{brand}</p>
            </button>
          ))}
        </span>
      </div>

      {/* show sports watch */}
      <div className="section">
        <p className="subhead">Conquer Every Challenge With Our Sports Watch</p>
        <div className="hbar" />
        <span className="w-full h-full flex overflow-x-auto">
          {allItems.map(
            (item, index) =>
              item.style === "Sports" && (
                <span className="card btn" key={index}>
                  <button
                    className="flex flex-col justify-center items-center"
                    onClick={() => {
                      setCurrentItem(item);
                      navigate("/inspect");
                    }}
                  >
                    <img src={item.img} alt="img" className="cardImg" />
                    <p className="name text-center break-words">{item.name}</p>
                    <p className="brand">{item.brand}</p>
                    <p className="type">{item.type}</p>
                    <p className="price">Rs. {item.price} /-</p>
                  </button>
                  <span className="flex justify-between w-full h-16 ">
                    {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                      <span
                        onClick={() => {
                          setIsCartOpen(true);
                          setIsWishlistOpen(false);
                        }}
                      >
                        <AddToCart text={"Go To Cart"} />
                      </span>
                    ) : (
                      <span onClick={() => addItemToCart(item)}>
                        <AddToCart text={"Add To Cart"} />
                      </span>
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
              )
          )}
        </span>
      </div>
      {/* Show Luxurious watches*/}
      <div className="section">
        <p className="subhead">Timeless Elegance on your Wrist</p>
        <div className="hbar" />
        <span className="w-full h-full flex overflow-x-auto">
          {allItems.map(
            (item, index) =>
              item.style === "Luxury" && (
                <span className="card btn" key={index}>
                  <button
                    className="flex flex-col justify-center items-center"
                    onClick={() => {
                      setCurrentItem(item);
                      navigate("/inspect");
                    }}
                  >
                    <img src={item.img} alt="img" className="cardImg" />{" "}
                    <p className="name text-center break-words">{item.name}</p>
                    <p className="brand">{item.brand}</p>
                    <p className="type">{item.type}</p>
                    <p className="price">Rs. {item.price} /-</p>
                  </button>
                  <span className="flex justify-between w-full h-16  ">
                    {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                      <span
                        onClick={() => {
                          setIsCartOpen(true);
                          setIsWishlistOpen(false);
                        }}
                      >
                        <AddToCart text={"Go To Cart"} />
                      </span>
                    ) : (
                      <span onClick={() => addItemToCart(item)}>
                        <AddToCart text={"Add To Cart"} />
                      </span>
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
              )
          )}
        </span>
      </div>

      {/* casual watch */}
      <div className="section">
        <p className="subhead">Casual vibes, classic Time</p>
        <div className="hbar" />
        <span className="w-full h-full flex overflow-x-auto">
          {allItems.map(
            (item, index) =>
              item.style === "Casual" && (
                <span className="card btn" key={index}>
                  <button
                    className="flex flex-col justify-center items-center"
                    onClick={() => {
                      setCurrentItem(item);
                      navigate("/inspect");
                    }}
                  >
                    <img src={item.img} alt="img" className="cardImg" />{" "}
                    <p className="name text-center break-words">{item.name}</p>
                    <p className="brand">{item.brand}</p>
                    <p className="type">{item.type}</p>
                    <p className="price">Rs. {item.price} /-</p>
                  </button>
                  <span className="flex justify-between w-full h-16  ">
                    {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                      <span
                        onClick={() => {
                          setIsCartOpen(true);
                          setIsWishlistOpen(false);
                        }}
                      >
                        <AddToCart text={"Go To Cart"} />
                      </span>
                    ) : (
                      <span onClick={() => addItemToCart(item)}>
                        <AddToCart text={"Add To Cart"} />
                      </span>
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
              )
          )}
        </span>
      </div>
      <div className="hbar" />
      <div className="w-5/6 min-h-0.5 bg-white p-0.5 self-center mb-4" />
      {/* credits */}
      <div
        className={`p-4  text-center flex flex-col items-center space-y-2 text-sm`}
      >
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Designed and developed by{" "}
          <span className="font-semibold">Debangshu Nath</span>.
        </p>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Your feedback and contributions are welcome! View the project and
          contribute on{" "}
          <a
            href="https://github.com/thecrusader25225/WatchHaven"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/thecrusader25225"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:thecrusader.25225@gmail.com"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://t.me/shane25225"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            <BsTelegram size={24} />
          </a>
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
  );
}
