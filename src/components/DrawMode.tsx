import { Box, Plane } from "@react-three/drei"
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useStore } from "../store/useStore";
import { useEffect, useRef, useState } from "react";
import Wall from "./Wall";
import type { Wall as WallType } from "./Wall";
interface BoxProps {
    position: THREE.Vector3;
    mouse: THREE.Vector3;
}

export default function DrawMode() {
    const { isDrawing, setDrawing } = useStore()
    const [previewWall, setPreviewWall] = useState<WallType>()
    
    function handlePointerMove(e: ThreeEvent<PointerEvent>) {
        if (!isDrawing || !previewWall) return;
        const { point } = e.intersections[0];
        setPreviewWall({
            ...previewWall,
            end: new THREE.Vector3(point.x, previewWall.start.y, point.z)
        });
    }

    function handlePointerDown(e: ThreeEvent<PointerEvent>) {
        console.log("Click Start");
        setDrawing(true);

        const { point } = e.intersections[0];

        setPreviewWall({
            start: new THREE.Vector3(point.x, 1.5, point.z),
            height: 3,
            end: new THREE.Vector3(point.x, 1.5, point.z)
        });
    }

    function handlePointerUp(e: ThreeEvent<PointerEvent>) {
        setDrawing(false)
    }

    return <Plane
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        args={[100, 100]}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })}
    >
        {previewWall && <Wall wall={previewWall}/>}
    </Plane>
}
