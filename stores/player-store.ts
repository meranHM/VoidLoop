import { createStore } from "zustand/vanilla"

type PlayerState = {
    currentTrackId: string | null
}

type PlayerActions = {
    setCurrentTrackId: (id: string | null) => void
}

export type PlayerStore = PlayerState & PlayerActions

export const defaultPlayerState: PlayerState = {
    currentTrackId: null,
}

export const createPlayerStore = (initState: PlayerState = defaultPlayerState) =>{
    return createStore<PlayerStore>()((set) => ({
        ...initState,
        setCurrentTrackId: (id) => set({ currentTrackId: id }),
    }))
}