import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './pages/Home'

const App = () => {
  const [bgColor, setBgColor] = useState('#124D83')

  return (
    <div>
      <ThemeContext.Provider value={{ bgColor, setBgColor }}>
        <Home />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
