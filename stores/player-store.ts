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
    setAudioRef: (id: string, ref: HTMLAudioElement | null) => void
    audioRefs: Record<string, HTMLAudioElement | null>
}

export type PlayerStore = PlayerState & PlayerActions

export const defaultPlayerState: PlayerState = {
    isPlaying: false,
    currentTrackId: null,
}

export const createPlayerStore = (initState: PlayerState = defaultPlayerState) =>{
    return createStore<PlayerStore>()((set) => ({
        ...initState,
        audioRefs: {},
        play: () => set({ isPlaying: true }),
        pause: () => set({ isPlaying: false }),
        end: () => set({ isPlaying: false, currentTrackId: null }),
        setTrackId: (id) => set({ currentTrackId: id }),
        setAudioRef: (id, ref) => set((state) => ({
            audioRefs: { ...state.audioRefs, [id]: ref },
        }))
    }))
}