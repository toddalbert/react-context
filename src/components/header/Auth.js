import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import { AuthContext } from '../../App'

function Auth() {
  let { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext)
  if (isLoggedIn) {
    return (
      <Nav>
        <Nav.Link onClick={() => {
          setIsLoggedIn(false)
          setUser(null)
        }}>Log Out</Nav.Link>
      </Nav>
    )
  }
  return (
    <Nav>
      <Nav.Link onClick={() => {
        setIsLoggedIn(true)
        setUser('Jermbo')
      }}>Log In</Nav.Link>
    </Nav>
  )
}

export default Auth