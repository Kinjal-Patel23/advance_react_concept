import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import Button from './components/Button'

const App = () => {

  const [bgColor, setBgColor] = useState("#124D83")

  return (
    <>
      <ThemeContext.Provider value={{bgColor, setBgColor}}>
        <Button/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
