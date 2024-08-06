import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { IoReturnUpBack } from "react-icons/io5";
export default function Category({
  prop,
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
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 xl:px-[16%] mx-auto h-full pt-24 flex flex-col overflow-y-auto">
      <span className="flex">
        <button>
          <IoReturnUpBack
            className="text-3xl w-12"
            onClick={() => navigate("/")}
          />
        </button>
        <p className="subhead">
          Showing results for "{currentParam[prop]}" {prop}
        </p>
      </span>
      {allItems.map(
        (item) =>
          item[prop] === currentParam[prop] && (
            <span className="w-full h-auto p-4 flex justify-between items-center border">
              <button
                className="flex flex-col"
                onClick={() => {
                  setCurrentItem(item);
                  navigate("/inspect");
                }}
              >
                <p className="name text-center break-words">{item.name}</p>
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
              </button>
              <span className="flex justify-between  h-16 border">
                {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                  <button onClick={() => setIsCartOpen(true)}>
                    Go to Cart
                  </button>
                ) : (
                  <button onClick={() => addItemToCart(item)}>
                    Add To Cart
                  </button>
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
