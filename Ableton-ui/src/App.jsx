import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './pages/Page'
import MainContent from './Component/MainContent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page></Page>
    </>
  )
}

export default App
