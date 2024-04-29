import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

        <div className="flex flex-wrap mt-5 min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme button */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card/>
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
