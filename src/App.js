import React from 'react'
import { Container } from 'react-bootstrap'
import Options from './components/Options'
import Start from './components/Start'
import './App.css'

export default () => {
  return (
    <Container className="App">
      <header className="App-header">
        <p>The dad game</p>
      </header>
      <Start />
      <Options />
    </Container>
  )
}
