import React, { useState } from 'react'
import PlayerCard from './components/PlayerCard'
import './App.css'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode()

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className="btn-container"><button data-testid="dark-mode-btn" className="toggle-btn" onClick={toggleDarkMode}>Toggle Dark Mode</button></div>
      <PlayerCard />
    </>
  )
}