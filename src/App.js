import React, { createContext, useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css'

export const AuthContext = createContext(null)

function App() {
  let [user, setUser] = useState(null)
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </AuthContext.Provider>
  )
}

export default App
