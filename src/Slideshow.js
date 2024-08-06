import { useEffect, useState } from "react";

export default function Slideshow({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images, interval]);

  return (
    <div className="w-full h-full overflow-hidden relative ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } duration-1000 p-8`}
        >
          <img src={image} alt="slide" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
