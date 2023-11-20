import { Container } from '@mui/material'
import React from 'react'
import '../App.css'

function SecondErrorScreen() {
  return (
    <div>
        <Container>
        <h1 className="glitch" data-text="ERROR 202">ERROR 202</h1>
        <h3>We couldn't load this page</h3>
  <p>Record Id is Not Valid With The Supplied Email Address </p>
        </Container>
    </div>
  )
}

export default SecondErrorScreen