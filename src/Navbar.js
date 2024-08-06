import { BiCart } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
export default function Navbar({ setIsCartOpen, setIsWishlistOpen }) {
  return (
    <div className="w-full h-24 border fixed top-0 left-0 backdrop-blur-md flex items-center justify-center z-50">
      <BsWatch className="text-3xl" />
      <p className=" text-center text-4xl font-semibold">WatchHaven</p>
      <span className="absolute flex text-3xl right-0">
        <HiHeart
          onClick={() => {
            setIsCartOpen(false);
            setIsWishlistOpen(true);
            console.log("Wishlist open");
          }}
        />
        <BiCart
          onClick={() => {
            setIsCartOpen(true);
            setIsWishlistOpen(false);
            console.log("Cart open");
          }}
        />
      </span>
    </div>
  );
}
