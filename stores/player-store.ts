import { createStore } from "zustand/vanilla"

type PlayerState = {
    isPlaying: boolean
}

type PlayerActions = {
    play: () => void
    pause: () => void
    ended: () => void
}

export type PlayerStore = PlayerState & PlayerActions

export const defaultPlayerState: PlayerState = {
    isPlaying: false,
}

export const createPlayerStore = (initState: PlayerState = defaultPlayerState) =>{
    return createStore<PlayerStore>()((set) => ({
        ...initState,
        play: () => set({ isPlaying: true }),
        pause: () => set({ isPlaying: false }),
        ended: () => set({ isPlaying: false }),
    }))
}