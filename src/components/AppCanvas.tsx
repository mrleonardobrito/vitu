import { Canvas, useThree } from "@react-three/fiber";
import { useStore } from "../store/useStore";
import { useEffect } from "react";
import { Grid, MapControls, OrbitControls } from "@react-three/drei";
import DrawMode from "./DrawMode";

function CameraReset() {
    const { eyeOpened } = useStore();
    const { camera } = useThree();
  
    useEffect(() => {
        if (!eyeOpened) {
            camera.position.set(0, 12, 0); 
            camera.lookAt(0, 0, 0);
        }
    }, [eyeOpened, camera]);
  
    return null;
  }
  
export default function AppCanvas() {
    const { eyeOpened, walls, isDrawing } = useStore();
    
    return (
        <Canvas camera={{ position: [0, 12, 0] }} style={{ opacity: "40%" }}>
            <CameraReset /> 
            <Grid 
                sectionSize={5} 
                sectionColor={"#354ACB"} 
                cellColor={"#354ACB"} 
                infiniteGrid={true}    
                rotation={[0, 0, 0]} 
            />
            {isDrawing && <DrawMode/>}
            {!eyeOpened ? <MapControls maxDistance={32}/> : <OrbitControls />}
        </Canvas>
    )
}