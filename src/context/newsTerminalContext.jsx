import { createContext, useContext, useState } from 'react'

const NewsTerminalContext = createContext(null)

export function NewsTerminalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const openTerminal = () => setIsOpen(true)
    const closeTerminal = () => setIsOpen(false)

    return (
        <NewsTerminalContext.Provider value={{ isOpen, openTerminal, closeTerminal }}>
            {children}
        </NewsTerminalContext.Provider>
    )
}

export function useNewsTerminal() {
    return useContext(NewsTerminalContext)
}
