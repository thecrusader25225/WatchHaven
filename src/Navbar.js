import { BiCart } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import CartButton from "./CartButton";
import ThemeButton from "./ThemeButton";
export default function Navbar({
  setIsCartOpen,
  cartItems,
  setIsWishlistOpen,
  isWishlistOpen,
  setIsDarkMode,
  isDarkMode,
}) {
  return (
    <div className="w-full h-24  fixed top-0 left-0 backdrop-blur-2xl flex items-center justify-center z-50">
      <BsWatch className="text-3xl" />
      <p className=" text-center text-4xl font-semibold">WatchHaven</p>
      <span className="absolute flex items-center text-3xl right-0">
        <ThemeButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <HiHeart
          className={isWishlistOpen ? `text-red-500` : `text-white`}
          onClick={() => {
            setIsCartOpen(false);
            setIsWishlistOpen(true);
            console.log("Wishlist open");
          }}
        />
        <CartButton
          cartItems={cartItems}
          setIsCartOpen={setIsCartOpen}
          setIsWishlistOpen={setIsWishlistOpen}
        />
      </span>
    </div>
  );
}
