import { Canvas } from "@react-three/fiber";
import "./App.css";
import CakeCanvas from "./CakeCanvas";
import { useState, Suspense, useEffect } from "react";
import CanvasLoader from "./CanvasLoader";
import ScrollReveal from "scrollreveal";

function Light({ brightness, color }) {

  return (
    <directionalLight
      castShadow={true}
      receiveShadow={0.2}
      width={2}
      height={2}
      color={color}
      intensity={brightness}
      position={[1, 1, 4.5]}
    />
  );
}

function Home({ startAnimation } ) {
   const [openLetter, setOpenLetter] = useState(false);

    useEffect(() => {
      if (!startAnimation) return;

      ScrollReveal({
        mobile: false,
        reset: false,
        distance: "60px",
        duration: 1500,
      });

      ScrollReveal().reveal(".3d", { delay: 200, origin: "left" });
      ScrollReveal().reveal(".letter", { delay: 500, origin: "right" });
      ScrollReveal().reveal(".bday", { delay: 500, origin: "top" });
    }, [startAnimation]);

  return (
    <div name="Home">
      <section className="mx-auto w-full">
        <div className="flex flex-col md:flex-row md:flex-nowrap w-full mx-auto items-center justify-center min-h-screen gap-10 px-4 3d">

          {/* 🎂 3D CAKE */}
          <div className="w-[240px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[480px] md:h-[600px] lg:w-[660px] lg:h-[800px]">
            <Canvas
              frameloop="demand"
              shadows
              camera={{ position: [30, 20, 20], fov: 25 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <Light brightness={0.2} />
                <ambientLight intensity={0.4} />
                <pointLight intensity={0.2} />
                <CakeCanvas />
              </Suspense>
            </Canvas>
          </div>

          {/* 💌 ENVELOPE SECTION */}
         <div className="flex justify-center items-center py-10 letter md:flex-shrink-0">
            <div
              className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] cursor-pointer"
              onClick={() => setOpenLetter(!openLetter)}
            >
              {/* TITLE */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-center bday">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl text-pink-500 whitespace-nowrap drop-shadow-sm"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  Happy Birthday Kass 💖
                </h1>

                <p className="text-pink-300 text-xs sm:text-sm pt-3 tracking-[0.2em] sm:tracking-[0.3em]">
                  I hope this simple surprise makes you happy 💕
                </p>
              </div>

              {/* LETTER */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[220px] sm:w-[240px] md:w-[260px]
                bg-white rounded-2xl shadow-xl border border-pink-100
                p-5 transition-all duration-700 ease-in-out
                ${
                  openLetter
                    ? "top-[20px] opacity-100 z-20"
                    : "top-[120px] opacity-0 z-0"
                }`}
              >
                <h2
                  className="text-pink-500 text-xl sm:text-2xl mb-3"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  Hello jeje ✨
                </h2>

                <p className="text-gray-600 text-xs sm:text-sm leading-6 sm:leading-7">
                  Happy birthday, Kass 💖 I hope this year brings you genuine
                  happiness, peaceful days, and more reasons to smile. Sana
                  matupad mo lahat ng pangarap mo and ma-achieve mo lahat ng
                  goals mo sa life. You deserve all the good things and I’ll
                  always wish the best for you ✨
                </p>

                <div className="flex justify-end mt-4 text-pink-400 text-lg">
                  💌
                </div>
              </div>

              {/* ENVELOPE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] h-[150px] sm:w-[280px] sm:h-[180px] md:w-[300px] md:h-[190px] letter">
                {/* BACK */}
                <div className="absolute inset-0 bg-pink-300 rounded-2xl shadow-lg" />

                {/* LEFT FLAP */}
                <div
                  className="absolute left-0 bottom-0 w-1/2 h-full bg-pink-200"
                  style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  }}
                />

                {/* RIGHT FLAP */}
                <div
                  className="absolute right-0 bottom-0 w-1/2 h-full bg-pink-200"
                  style={{
                    clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                  }}
                />

                {/* BOTTOM FLAP */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-pink-400"
                  style={{
                    clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                  }}
                />

                {/* TOP FLAP */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 bg-pink-500 origin-top transition-transform duration-700"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    transform: openLetter
                      ? "rotateX(180deg)"
                      : "rotateX(0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />

                {/* SEAL */}
                <div className="absolute left-1/2 top-[55px] sm:top-[60px] md:top-[65px] -translate-x-1/2 z-30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-pink-200">
                    💖
                  </div>
                </div>

                {/* OPEN TEXT */}
                {!openLetter && (
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <span className="text-white font-semibold tracking-[0.2em] sm:tracking-[0.25em] mt-10 sm:mt-14 text-sm sm:text-base">
                      OPEN ME
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;