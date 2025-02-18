import { Box } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "../store/useStore";

export interface Wall {
    start: THREE.Vector3
    end: THREE.Vector3
    height: number
}

interface WallProps {
    wall: Wall
    ghost?: boolean;
}

export default function Wall({ wall, ghost = false }: WallProps) {
    const wallVector = new THREE.Vector3().subVectors(wall.end, wall.start); // Vetor direção da parede
    const wallLength = wallVector.length(); // Comprimento correto da parede
    const wallPosition = new THREE.Vector3()
        .addVectors(wall.start, wall.end)
        .multiplyScalar(0.5); // Posição central da parede

    const rotationY = Math.atan2(wallVector.z, wallVector.x); // Corrigido para alinhar no plano XZ

    return (
        <Box
            position={[wallPosition.x, wall.height / 2, wallPosition.z]} // Posição no meio da altura
            args={[wallLength, wall.height, 0.2]} // Comprimento correto, altura fixa, espessura fixa
            rotation={[0, -rotationY, 0]} // Ajuste da rotação apenas no eixo Y
            material={new THREE.MeshBasicMaterial({ color: ghost ? "lightgray" : "gray" })}
        />
    );
}
