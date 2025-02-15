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
        const { eyeOpened } = useStore()
        const wallVector = new THREE.Vector3().subVectors(wall.end, wall.start);
        const wallLength = wallVector.length();
        const wallPosition = new THREE.Vector3()
            .addVectors(wall.start, wall.end);
        const wallHeight = eyeOpened ? wall.height : 0.1
        
        return (
            <Box
                position={[wallPosition.x, wallHeight/2, wallPosition.z]} 
                args={[wallLength, wallHeight, 0.2]} 
                rotation={[0, Math.atan2(wallVector.x, wallVector.z), 0]}
                material={new THREE.MeshBasicMaterial({color: ghost ? "lightgray": "gray"})}
            />
        );
    }
