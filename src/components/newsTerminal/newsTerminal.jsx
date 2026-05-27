import { useState, useEffect, useRef } from 'react'
import './newsTerminal.css'
import { useNewsTerminal } from '../../context/newsTerminalContext'

function NewsTerminal() {
    const { isOpen, closeTerminal } = useNewsTerminal()
    const [input, setInput] = useState('')
    const [denied, setDenied] = useState(false)
    const inputRef = useRef(null)
    const denyTimer = useRef(null)

    // Focus the input and reset state whenever the terminal opens
    useEffect(() => {
        if (isOpen) {
            setInput('')
            setDenied(false)
            // focus after the element is rendered
            requestAnimationFrame(() => inputRef.current?.focus())
        }
    }, [isOpen])

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => { if (e.key === 'Escape') closeTerminal() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen, closeTerminal])

    // Clean up the deny timer on unmount
    useEffect(() => () => clearTimeout(denyTimer.current), [])

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return
        // No valid passwords yet — every attempt is denied.
        setInput('')
        setDenied(true)
        clearTimeout(denyTimer.current)
        // Revert to the password prompt after the flash, then refocus.
        denyTimer.current = setTimeout(() => {
            setDenied(false)
            requestAnimationFrame(() => inputRef.current?.focus())
        }, 1500)
    }

    return (
        <div className="newsTerminalBackdrop" onMouseDown={closeTerminal}>
            <div
                className="newsTerminal"
                role="dialog"
                aria-label="News terminal"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="newsTerminalScreen">
                    {denied ? (
                        <p className="newsTerminalLine newsTerminalDenied">ACCESS DENIED</p>
                    ) : (
                        <form className="newsTerminalForm" onSubmit={handleSubmit}>
                            <label className="newsTerminalLine newsTerminalPrompt">
                                Password&nbsp;
                                <span className="newsTerminalInputWrap">
                                    <input
                                        ref={inputRef}
                                        type="password"
                                        className="newsTerminalInput"
                                        style={{ width: `calc(${input.length}ch + ${input.length} * 0.3em)` }}
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        autoComplete="off"
                                        spellCheck="false"
                                    />
                                    <span className="newsTerminalCaret" aria-hidden="true">_</span>
                                </span>
                            </label>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsTerminal
