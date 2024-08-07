import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Slideshow from "./Slideshow";
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
}) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 xl:px-[16%] mx-auto h-full pt-24 flex flex-col overflow-y-auto">
      <div className="border w-full min-h-[calc(600px)]">
        <Slideshow images={adImages} />
      </div>
      {/* show styles */}
      <div className="section">
        <p className="subhead">
          Discover Perfect Watch for Every Style and Occasion
        </p>
        <span className="flex w-full h-full overflow-x-auto">
          {styles.map((style) => (
            <button
              className="card"
              onClick={() => {
                setCurrentParam((prev) => ({ ...prev, style: style }));
                navigate("/category/styles");
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
        <span className="w-full h-full overflow-x-auto flex">
          {brands.map((brand) => (
            <button
              className="card"
              onClick={() => {
                setCurrentParam((prev) => ({ ...prev, brand: brand }));
                navigate("/category/brands");
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
        <span className="w-full h-full flex overflow-x-auto">
          {allItems.map(
            (item) =>
              item.style === "Sports" && (
                <span className="card">
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
                  <span className="flex justify-between w-full h-16 border">
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
                        Cancel{" "}
                      </button>
                    ) : (
                      <button onClick={() => addItemToWishlist(item)}>
                        Add To Wishlist
                      </button>
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
        <span className="w-full h-full flex overflow-x-auto">
          {allItems.map(
            (item) =>
              item.style === "Luxury" && (
                <span className="card">
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
                  <span className="flex justify-between w-full h-16 border">
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
              )
          )}
        </span>
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
  );
}
