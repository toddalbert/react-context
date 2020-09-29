import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Welcome from './Welcome'

function Home() {
  return (
    <Jumbotron fluid>
      <Container>
        <Welcome />
        <p>React Context is amazing!</p>
      </Container>
    </Jumbotron>
  )
}

export default Home