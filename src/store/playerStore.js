import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false, 
    currentMusic: { playlist: null, song: null, songs: [] },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setCurrentMusic: (currentMusic) => set({ currentMusic })
}))