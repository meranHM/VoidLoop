import { createStore } from "zustand/vanilla"

type PlayerState = {
    isPlaying: boolean
    currentTrackId: string | null
}

type PlayerActions = {
    play: () => void
    pause: () => void
    end: () => void
    setTrackId: (id: string | null) => void
}

export type PlayerStore = PlayerState & PlayerActions

export const defaultPlayerState: PlayerState = {
    isPlaying: false,
    currentTrackId: null,
}

export const createPlayerStore = (initState: PlayerState = defaultPlayerState) =>{
    return createStore<PlayerStore>()((set) => ({
        ...initState,
        play: () => set({ isPlaying: true }),
        pause: () => set({ isPlaying: false }),
        end: () => set({ isPlaying: false }),
        setTrackId: (id) => set({ currentTrackId: id }),
    }))
}