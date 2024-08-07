import Cart from "./Cart";
import Category from "./Category";
import Checkout from "./Checkout";
import Home from "./Home";
import Inspect from "./Inspect";
import Navbar from "./Navbar";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ad1 from "./Images/ad/ad1.png";
import ad2 from "./Images/ad/ad2.png";
import ad3 from "./Images/ad/ad3.png";

import id0 from "./Images/id0.png";
import id1 from "./Images/id1.png";
import id2 from "./Images/id2.png";
import id3 from "./Images/id3.png";
import id4 from "./Images/id4.png";
import id5 from "./Images/id5.png";
import id6 from "./Images/id6.png";
import id7 from "./Images/id7.png";
import id8 from "./Images/id8.png";
import id9 from "./Images/id9.png";
import id10 from "./Images/id10.png";
import id11 from "./Images/id11.png";
import id12 from "./Images/id12.png";
import id13 from "./Images/id13.png";
import id14 from "./Images/id14.png";
import id15 from "./Images/id15.png";
import id16 from "./Images/id16.png";
import id17 from "./Images/id17.png";
import id18 from "./Images/id18.png";
import id19 from "./Images/id19.png";
import id20 from "./Images/id20.png";
import id21 from "./Images/id21.png";
import id22 from "./Images/id22.png";
import id23 from "./Images/id23.png";
import id24 from "./Images/id24.png";

const defaultItems = [
  {
    id: 0,
    name: "Rolex Submariner Date",
    type: "Automatic",
    brand: "Rolex",
    style: "Sports",
    features: ["Water-Resistant", "Date Display"],
    price: 712500,
    description:
      "An iconic diver's watch known for its robustness and water resistance. Perfect for underwater adventures and everyday elegance.",
    img: id0,
  },
  {
    id: 1,
    name: "Rolex Day-Date 40",
    type: "Automatic",
    brand: "Rolex",
    style: "Luxury",
    features: ["Day and Date Display", "18K Gold"],
    price: 2625000,
    description:
      "The ultimate status symbol featuring an 18K gold case and bracelet. Displays both day and date, exuding timeless luxury.",
    img: id1,
  },
  {
    id: 2,
    name: "Rolex Oyster Perpetual",
    type: "Automatic",
    brand: "Rolex",
    style: "Casual",
    features: ["Water-Resistant", "Sapphire Crystal"],
    price: 450000,
    description:
      "A classic and versatile timepiece with a water-resistant design and scratch-resistant sapphire crystal. Ideal for everyday wear.",
    img: id2,
  },
  {
    id: 3,
    name: "Rolex GMT-Master II",
    type: "Automatic",
    brand: "Rolex",
    style: "Sports",
    features: ["Dual Time Zone", "Ceramic Bezel"],
    price: 825000,
    description:
      "A robust sports watch with dual time zone functionality and a durable ceramic bezel. Perfect for travelers and adventurers.",
    img: id3,
  },
  {
    id: 4,
    name: "Rolex Explorer",
    type: "Automatic",
    brand: "Rolex",
    style: "Sports",
    features: ["Water-Resistant", "Luminous Hands"],
    price: 615000,
    description:
      "Designed for extreme conditions, the Explorer features luminous hands and water resistance, making it perfect for explorers.",
    img: id4,
  },
  {
    id: 5,
    name: "Omega Seamaster Diver 300M",
    type: "Automatic",
    brand: "Omega",
    style: "Sports",
    features: ["Water-Resistant", "Helium Escape Valve"],
    price: 390000,
    description:
      "A professional diver’s watch with helium escape valve and exceptional water resistance. Ideal for diving enthusiasts.",
    img: id5,
  },
  {
    id: 6,
    name: "Omega Speedmaster Professional Moonwatch",
    type: "Manual Winding",
    brand: "Omega",
    style: "Sports",
    features: ["Chronograph", "Tachymeter"],
    price: 487500,
    description:
      "The legendary Moonwatch, worn by astronauts. Features a chronograph and tachymeter, embodying Omega’s pioneering spirit.",
    img: id6,
  },
  {
    id: 7,
    name: "Omega Constellation Co-Axial",
    type: "Automatic",
    brand: "Omega",
    style: "Dress",
    features: ["Date Display", "Stainless Steel"],
    price: 337500,
    description:
      "A sophisticated dress watch with a co-axial movement and date display. Crafted in stainless steel for a sleek look.",
    img: id7,
  },
  {
    id: 8,
    name: "Omega De Ville Prestige",
    type: "Automatic",
    brand: "Omega",
    style: "Dress",
    features: ["Date Display", "Sapphire Crystal"],
    price: 300000,
    description:
      "Elegance and simplicity define this timepiece, featuring a date display and sapphire crystal. Perfect for formal occasions.",
    img: id8,
  },
  {
    id: 9,
    name: "Omega Seamaster Aqua Terra",
    type: "Automatic",
    brand: "Omega",
    style: "Casual",
    features: ["Water-Resistant", "Co-Axial Movement"],
    price: 412500,
    description:
      "Combines sophistication with ruggedness. Features a water-resistant design and co-axial movement for precise timekeeping.",
    img: id9,
  },
  {
    id: 10,
    name: "Casio G-Shock DW-5600E",
    type: "Digital",
    brand: "Casio",
    style: "Sports",
    features: ["Shock Resistant", "Water-Resistant"],
    price: 3750,
    description:
      "A tough and durable sports watch, known for its shock resistance and water resistance. Ideal for active lifestyles.",
    img: id10,
  },
  {
    id: 11,
    name: "Casio Edifice EQB-800DB",
    type: "Quartz",
    brand: "Casio",
    style: "Sports",
    features: ["Chronograph", "Bluetooth"],
    price: 22500,
    description:
      "Combines sporty design with advanced technology, featuring a chronograph and Bluetooth connectivity for smart functions.",
    img: id11,
  },
  {
    id: 12,
    name: "Casio Pro Trek PRW-3500",
    type: "Digital",
    brand: "Casio",
    style: "Outdoor",
    features: ["Triple Sensor", "Solar-Powered"],
    price: 15000,
    description:
      "Built for the outdoors, featuring triple sensor technology and solar power. Ideal for hiking and adventure enthusiasts.",
    img: id12,
  },
  {
    id: 13,
    name: "Casio Vintage A168WA-1",
    type: "Digital",
    brand: "Casio",
    style: "Casual",
    features: ["Electro-luminescent Backlight", "Stopwatch"],
    price: 1500,
    description:
      "A retro-style digital watch with an electro-luminescent backlight and stopwatch functionality. Perfect for vintage lovers.",
    img: id13,
  },
  {
    id: 14,
    name: "Casio Baby-G BGA-250",
    type: "Digital",
    brand: "Casio",
    style: "Sports",
    features: ["Water-Resistant", "World Time"],
    price: 7500,
    description:
      "A stylish and durable watch for active women. Features water resistance and world time functionality for global travelers.",
    img: id14,
  },
  {
    id: 15,
    name: "Seiko Prospex SRP777",
    type: "Automatic",
    brand: "Seiko",
    style: "Sports",
    features: ["Water-Resistant", "Day and Date Display"],
    price: 33750,
    description:
      "A robust diver’s watch with day and date display, designed for underwater adventures. Known for its reliability.",
    img: id15,
  },
  {
    id: 16,
    name: "Seiko Presage Cocktail Time",
    type: "Automatic",
    brand: "Seiko",
    style: "Dress",
    features: ["Date Display", "Sapphire Crystal"],
    price: 37500,
    description:
      "Inspired by cocktail bars, this dress watch features a beautiful dial and sapphire crystal. Perfect for formal events.",
    img: id16,
  },
  {
    id: 17,
    name: "Seiko 5 SNK809",
    type: "Automatic",
    brand: "Seiko",
    style: "Casual",
    features: ["Day and Date Display", "Exhibition Case Back"],
    price: 7500,
    description:
      "A reliable everyday watch with day and date display and an exhibition case back. Offers great value and durability.",
    img: id17,
  },
  {
    id: 18,
    name: "Seiko Astron GPS Solar",
    type: "Solar",
    brand: "Seiko",
    style: "Luxury",
    features: ["GPS", "World Time"],
    price: 127500,
    description:
      "Combines solar power with GPS functionality, offering world time features. A high-tech luxury watch for global travelers.",
    img: id18,
  },
  {
    id: 19,
    name: "Seiko Coutura SSC714",
    type: "Solar",
    brand: "Seiko",
    style: "Dress",
    features: ["Chronograph", "Sapphire Crystal"],
    price: 45000,
    description:
      "A solar-powered dress watch with chronograph functionality and sapphire crystal. Perfect for both work and formal occasions.",
    img: id19,
  },
  {
    id: 20,
    name: "Fossil Gen 5 Smartwatch",
    type: "Smartwatch",
    brand: "Fossil",
    style: "Casual",
    features: ["Heart Rate Monitor", "GPS"],
    price: 22125,
    description:
      "A versatile smartwatch with heart rate monitor and GPS. Combines modern technology with Fossil’s signature style.",
    img: id20,
  },
  {
    id: 21,
    name: "Fossil Townsman Automatic",
    type: "Automatic",
    brand: "Fossil",
    style: "Dress",
    features: ["Skeleton Dial", "Stainless Steel"],
    price: 24375,
    description:
      "A sophisticated dress watch featuring a skeleton dial and stainless steel case. Perfect for showcasing your unique style.",
    img: id21,
  },
  {
    id: 22,
    name: "Fossil Grant Chronograph",
    type: "Quartz",
    brand: "Fossil",
    style: "Casual",
    features: ["Chronograph", "Leather Strap"],
    price: 11250,
    description:
      "A casual yet elegant watch with chronograph functionality and a comfortable leather strap. Ideal for everyday wear.",
    img: id22,
  },
  {
    id: 23,
    name: "Fossil Neutra Chronograph",
    type: "Quartz",
    brand: "Fossil",
    style: "Dress",
    features: ["Chronograph", "Date Display"],
    price: 13125,
    description:
      "A refined dress watch featuring chronograph and date display. Combines functionality with a sophisticated design.",
    img: id23,
  },
  {
    id: 24,
    name: "Fossil Jacqueline Watch",
    type: "Quartz",
    brand: "Fossil",
    style: "Women's",
    features: ["Date Display", "Stainless Steel"],
    price: 8625,
    description:
      "A stylish and elegant watch for women, featuring a date display and stainless steel case. Perfect for daily wear.",
    img: id24,
  },
];

const brands = ["Rolex", "Fossil", "Seiko", "Casio", "Omega"];
const styles = ["Sports", "Luxury", "Casual", "Dress", "Outdoor", "Women's"];
const adImages = [ad1, ad2, ad3]; //advertisement images for slideshow

export default function App() {
  const [cartItems, setCartItems] = useState(getLocalStorage("cartItems", []));
  const [wishlistItems, setWishlistItems] = useState(
    getLocalStorage("wishlistItems", [])
  );
  const [allItems, setAllItems] = useState([...defaultItems]);
  const [currentItem, setCurrentItem] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [currentParam, setCurrentParam] = useState({ brand: "", style: "" });
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const updatedCart = getLocalStorage("cartItems", defaultItems);
    if (!updatedCart) setCartItems([]);
    else setCartItems(updatedCart);
  }, []);

  useEffect(() => {
    //to sync cartItems and wishlistItems with localStorage whenever new item is added or changed
    setLocalStorage("cartItems", cartItems);
    setLocalStorage("wishlistItems", wishlistItems);
  }, [cartItems, wishlistItems]);

  const addItemToCart = (item) => {
    // item.count++; //increasing item count when added
    const updatedItem = { ...item, count: 1 };
    setCartItems([...cartItems, updatedItem]);
    console.log("1 new item added to cart");
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const addItemToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
    console.log("1 new item added to wishlist");
  };

  const removeItemFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
  };
  console.log(cartItems);

  return (
    <>
      <BrowserRouter>
        <div className="w-screen h-screen bg-black text-white">
          <Navbar
            cartItems={cartItems}
            setIsCartOpen={setIsCartOpen}
            setIsWishlistOpen={setIsWishlistOpen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  allItems={allItems}
                  addItemToCart={addItemToCart}
                  removeItemFromCart={removeItemFromCart}
                  styles={styles}
                  brands={brands}
                  setCurrentItem={setCurrentItem}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                  currentParam={currentParam}
                  setCurrentParam={setCurrentParam}
                  isWishlistOpen={isWishlistOpen}
                  setIsWishlistOpen={setIsWishlistOpen}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  addItemToWishlist={addItemToWishlist}
                  subtotal={subtotal}
                  setSubtotal={setSubtotal}
                  adImages={adImages}
                />
              }
            />
            <Route
              path="/inspect"
              element={
                <Inspect
                  item={currentItem}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  allItems={allItems}
                  currentItem={currentItem}
                  addItemToCart={addItemToCart}
                  isWishlistOpen={isWishlistOpen}
                  setIsWishlistOpen={setIsWishlistOpen}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  subtotal={subtotal}
                  setSubtotal={setSubtotal}
                  setCurrentItem={setCurrentItem}
                  addItemToWishlist={addItemToWishlist}
                />
              }
            />
            <Route
              path="/category/styles"
              element={
                <Category
                  prop="style"
                  allItems={allItems}
                  cartItems={cartItems}
                  addItemToCart={addItemToCart}
                  setCurrentItem={setCurrentItem}
                  setIsCartOpen={setIsCartOpen}
                  currentParam={currentParam}
                  setCartItems={setCartItems}
                  isCartOpen={isCartOpen}
                  isWishlistOpen={isWishlistOpen}
                  setIsWishlistOpen={setIsWishlistOpen}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  subtotal={subtotal}
                  setSubtotal={setSubtotal}
                />
              }
            />
            <Route
              path="/category/brands"
              element={
                <Category
                  prop="brand"
                  allItems={allItems}
                  cartItems={cartItems}
                  addItemToCart={addItemToCart}
                  setCurrentItem={setCurrentItem}
                  setIsCartOpen={setIsCartOpen}
                  currentParam={currentParam}
                  setCartItems={setCartItems}
                  isCartOpen={isCartOpen}
                />
              }
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} subtotal={subtotal} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
