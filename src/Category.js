import { useNavigate, useParams } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Heart from "./Heart";
import AddToCart from "./AddToCart";
import { FaAngleLeft } from "react-icons/fa";
export default function Category({
  allItems,
  setCurrentItem,
  cartItems,
  setIsCartOpen,
  addItemToCart,
  currentParam,
  setCartItems,
  isCartOpen,
  subtotal,
  setSubtotal,
  isWishlistOpen,
  setIsWishlistOpen,
  wishlistItems,
  setWishlistItems,
  addItemToWishlist,
  isDarkMode,
}) {
  console.log(cartItems);
  const navigate = useNavigate();
  const { prop, type } = useParams();
  console.log(prop);
  return (
    <div className="w-full px-4 xl:px-[16%] mx-auto h-full pt-24 flex flex-col overflow-y-auto">
      <button
        className="text-xl flex items-center hover:underline"
        onClick={() => navigate("/")}
      >
        <FaAngleLeft />
        <p>Back</p>
      </button>
      <p className="subhead">
        Showing results for "{type}" {prop}
      </p>
      {allItems.map(
        (item, index) =>
          item[prop] === type && (
            <span
              key={index}
              className="w-full h-auto p-4 flex justify-between items-center bg-white bg-opacity-10 rounded-xl my-2"
            >
              <button
                className="flex items-center w-3/4 "
                onClick={() => {
                  setCurrentItem(item);
                  navigate(
                    `/inspect/${item.brand}?item=${btoa(
                      unescape(encodeURIComponent(JSON.stringify(item)))
                    )}`
                  );
                }}
              >
                <img
                  src={item.img}
                  alt="img"
                  className="cardImg mx-2 w-24 h-24 min-w-24 min-h-24"
                />
                <span className="flex flex-col justify-center items-start hover:underline">
                  <p className="name text-start break-words">{item.name}</p>
                  <span>
                    <p className="inline">
                      {prop === "style"
                        ? `Brand: ${item.brand}`
                        : `Style: ${item.style}`}{" "}
                      |{" "}
                    </p>
                    <p className="type inline">Type: {item.type}</p>
                  </span>
                  <p className="price text-2xl">Rs. {item.price} /-</p>
                </span>
              </button>
              <span className="flex justify-between w-40">
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
                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                  <span onClick={() => setIsCartOpen(true)}>
                    <AddToCart text={"Go To Cart"} />
                  </span>
                ) : (
                  <span onClick={() => addItemToCart(item)}>
                    <AddToCart text={"Add To Cart"} />
                  </span>
                )}
              </span>
            </span>
          )
      )}
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
