import { Canvas } from "@react-three/fiber";
import "./App.css";
import CakeCanvas from "./CakeCanvas";
import { useState, Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

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

function Home() {
  const [openLetter, setOpenLetter] = useState(false);
  return (
    <div name="Home">
      <section className="mx-auto w-full  ">
        {/* <FloatingBackground /> */}
        <div className="flex w-full mx-auto items-center justify-center h-screen ">
          <div className="flex flex-col items-center max-w-[1240px] md:flex-row"></div>
          <div className="w-[300px] h-[400px] md:h-[800px] md:w-[660px]">
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
            {/* <CakeCanvas /> */}
          </div>

          <div className="flex m-7 justify-center items-center">
            <div
              className="relative w-[300px] h-[260px] cursor-pointer"
              onClick={() => setOpenLetter(!openLetter)}
            >
              {/* LETTER */}
              <div
                className={`absolute left-[10px] w-[280px] h-[180px] bg-white rounded-lg shadow-2xl p-5 transition-all duration-700 ease-in-out
                ${
                  openLetter ? "top-[-40px] z-50 opacity-100" : "top-[40px] z-0 opacity-0"
                }`}
              >
                <h1 className="text-pink-500 font-bold text-xl mb-2">
                  Happy Birthday 🎂
                </h1>

                <p className="text-gray-700 text-sm leading-6">
                  Wishing you lots of happiness, love, and blessings on your
                  special day 💖
                </p>
              </div>

              {/* ENVELOPE */}
              <div className="absolute bottom-0 w-full h-[180px]">
                {/* Back */}
                <div className="absolute w-full h-full bg-pink-300 rounded-md z-10"></div>

                {/* Left */}
                <div className="absolute w-0 h-0 border-t-[90px] border-b-[90px] border-r-[150px] border-t-transparent border-b-transparent border-r-pink-400 z-20"></div>

                {/* Right */}
                <div className="absolute right-0 w-0 h-0 border-t-[90px] border-b-[90px] border-l-[150px] border-t-transparent border-b-transparent border-l-pink-400 z-20"></div>

                {/* Bottom */}
                <div className="absolute bottom-0 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[100px] border-l-transparent border-r-transparent border-b-pink-500 z-30"></div>

                {/* TOP FLAP */}
                <div
                  className={`absolute top-0 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[100px] border-l-transparent border-r-transparent border-t-pink-600 origin-top transition-all duration-700
                ${openLetter ? "rotate-x-180 z-0" : "z-40"}`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                ></div>

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold tracking-widest z-40">
                  OPEN ME 💌
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Home;
