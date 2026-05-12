
import { CakeModel } from "./CakeModel";
import { OrbitControls } from "@react-three/drei";

const CakeCanvas = () => {
  return (
    <>
    <ambientLight intensity={1}/>
     <OrbitControls 
      enableZoom={false} 
      maxPolarAngle={Math.PI / 3 }
      minPolarAngle={Math.PI / 3 }
      />
      <CakeModel scale={1.1} position={[0, -4.25, 0]}/>

    </>
  );
};

export default CakeCanvas