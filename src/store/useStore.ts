import { create } from "zustand";
import * as THREE from "three";
import { Wall } from "../components/Wall";

interface StoreState {
    hovered: boolean;
    eyeOpened: boolean;
    isDrawing: boolean;
    walls: Wall[];
    setHovered: (value: boolean) => void;
    setEyeOpened: (value: boolean) => void;
    setDrawing: (value: boolean) => void;
    addWall: (start: THREE.Vector3, end: THREE.Vector3) => void;
}

export const useStore = create<StoreState>((set) => ({
    hovered: false,
    eyeOpened: false,
    isDrawing: false,
    walls: [],
    
    setHovered: (value) => set({ hovered: value }),
    setEyeOpened: (value) => set({ eyeOpened: value }),
    setDrawing: (value) => set({ isDrawing: value }),   
    addWall: (start, end) =>
        set((state) => ({
            walls: [...state.walls, { start, end, height: 3 }],
        })), 
}));
