import { Box, Plane } from "@react-three/drei"
import { ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"
import { useStore } from "../store/useStore";
import { useRef, useState } from "react";
import Wall from "./Wall";

interface BoxProps {
    position: THREE.Vector3;
    mouse: THREE.Vector3;
}

const DraggableBox: React.FC<BoxProps> = ({ position, mouse }) => {
    const mesh = useRef<THREE.Mesh>(null!);

    return (
        <Box
            ref={mesh}
            position={position}
            args={[position.x, position.y, 4]}
        />
    );
};

export default function DrawMode() {
    const [boxes, setBoxes] = useState<THREE.Vector3[]>([]);
    const mouse = new THREE.Vector3();

    function handlePointerDown(e: ThreeEvent<PointerEvent>) {
        e.stopPropagation();
        const { point } = e.intersections[0];
        setBoxes([...boxes, point]);
    }

    return <Plane
        onPointerDown={handlePointerDown}
        args={[100, 100]}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.2 })}
    >
        {boxes.map((box, index) => (
            <DraggableBox key={index} position={new THREE.Vector3(box.x, -box.z, 2.5)} mouse={mouse} />
        ))}
    </Plane>
}
