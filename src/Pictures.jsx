import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { photos } from "./data/data";


const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    ScrollReveal({
      mobile: false,
      reset: false,
      distance: "60px",
      duration: 1500,
    });
    ScrollReveal().reveal('.pimages1', {delay:400, origin: 'bottom'})
    ScrollReveal().reveal('.pimages2', {delay:500, origin: 'bottom'})
    ScrollReveal().reveal('.pimages3', {delay:600, origin: 'bottom'})
    ScrollReveal().reveal('.pimages4', {delay:700, origin: 'bottom'})
    ScrollReveal().reveal('.main-title', {delay:500, origin: 'top'})
  }, []);
  return (
    <section
      name="Photobooth"
      className="w-full min-h-screen py-24 px-4 bg-pink-50 images"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14 main-title">
          <h1 className="text-5xl font-bold text-pink-500">
            Photobooth Memories
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Our cute little moments together 📸
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pimages">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(photo.image)}
              className={`bg-white p-3 rounded-3xl shadow-xl hover:scale-105 duration-300 cursor-pointer ${photo.animation}`}
            >
              <img
                src={photo.image}
                alt={`photobooth-${index}`}
                className="w-full h-[420px] object-cover rounded-2xl"
              />

              <p className="text-center p-4 text-gray-600 mt-4 px-2 text-sm leading-relaxed">
                {photo.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 "
        >
          <img
            src={selectedImage}
            alt="expanded"
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Pictures;
