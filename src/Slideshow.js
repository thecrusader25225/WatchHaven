import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Slideshow({
  images,
  interval = 3500,
  setCurrentItem,
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
    navigate("/inspect");

    if (index === 0) {
      setCurrentItem(allItems[1]);
    } else if (index === 1) {
      setCurrentItem(allItems[3]);
    } else {
      setCurrentItem(allItems[20]);
    }
  };

  return (
    <div className="w-full h-full overflow-hidden relative ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } duration-1000 p-8 cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <img
            src={image}
            alt="slide"
            className="w-full h-full object-cover  hover:scale-105 duration-200"
          />
        </div>
      ))}
    </div>
  );
}
