import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Slideshow({
  images,
  interval = 3500,
  setCurrentItem,
  currentItem,
  allItems,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images, interval]);

  const handleClick = (index) => {
    if (index === 0) {
      setCurrentItem(allItems[1]);
      navigate(
        `/inspect/${"Rolex"}?item=${btoa(
          unescape(encodeURIComponent(JSON.stringify(allItems[1])))
        )}`
      );
    } else if (index === 1) {
      setCurrentItem(allItems[6]);
      navigate(
        `/inspect/${"Omega"}?item=${btoa(
          unescape(encodeURIComponent(JSON.stringify(allItems[6])))
        )}`
      );
    } else {
      setCurrentItem(allItems[20]);
      navigate(
        `/inspect/${"Fossil"}?item=${btoa(
          unescape(encodeURIComponent(JSON.stringify(allItems[20])))
        )}`
      );
    }
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } duration-1000`}
        >
          <img
            src={image}
            alt="slide"
            className="w-full h-full object-cover hover:scale-105 duration-200 cursor-pointer"
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-600"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
