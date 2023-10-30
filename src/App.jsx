import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <div>
        <Todos/>
       </div>
    </>
  )
}

export default App
// step-1 : instal pack
// step-2 : constants define
// step-3: async action creator
// st-4 : reducer
// st-5 : create  store
// st-6 : provide it by react redux
//st-7 : use store eg: useSelector

