import { create } from "zustand";
import * as THREE from "three";
import type { Wall } from "../components/Wall";

interface StoreState {
    hovered: boolean;
    eyeOpened: boolean;
    isDrawing: boolean;
    walls: Wall[];
    setHovered: (value: boolean) => void;
    setEyeOpened: (value: boolean) => void;
    setDrawing: (value: boolean) => void;
    addWall: (wall: Wall) => void;
}

export const useStore = create<StoreState>((set) => ({
    hovered: false,
    eyeOpened: false,
    isDrawing: false,
    walls: [],
    
    setHovered: (value) => set({ hovered: value }),
    setEyeOpened: (value) => set({ eyeOpened: value }),
    setDrawing: (value) => set({ isDrawing: value }),   
    addWall: (wall) =>
        set((state) => ({
            walls: [...state.walls, wall],
        })), 
}));
