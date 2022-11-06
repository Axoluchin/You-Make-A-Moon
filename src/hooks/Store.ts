import create from "zustand"

interface modalProps {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const useLoginModal = create<modalProps>(set => ({
    isOpen: false,
    openModal: () => set(state => ({isOpen: true})),
    closeModal: () => set(state => ({isOpen: false}))
}))

export const useSingUpModal = create<modalProps>(set => ({
    isOpen: false,
    openModal: () => set(state => ({isOpen: true})),
    closeModal: () => set(state => ({isOpen: false}))
}))