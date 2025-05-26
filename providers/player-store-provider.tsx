"use client"

import { createContext, useRef, useContext, type ReactNode } from "react"
import { useStore } from "zustand"
import { createPlayerStore, type PlayerStore } from "@/stores/player-store"

export type PlayerStoreApi = ReturnType<typeof createPlayerStore>

export const PlayerStoreContext= createContext<PlayerStoreApi | undefined>(undefined)


export const PlayerStoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef= useRef<PlayerStoreApi | null>(null)

    if (!storeRef.current) {
        storeRef.current = createPlayerStore()
    }

    return (
        <PlayerStoreContext.Provider value={storeRef.current}>
            {children}
        </PlayerStoreContext.Provider>
    )
}

export const usePlayerStore = <T,>(selector: (state: PlayerStore) => T,): T => {
    const playerStoreContext = useContext(PlayerStoreContext)

    if (!playerStoreContext) {
        throw new Error("usePlayerStore must be used within PlayerStoreProvider")
    }
    return useStore(playerStoreContext, selector)
}