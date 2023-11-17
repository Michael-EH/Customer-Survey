import { Container } from '@mui/material'
import React from 'react'
import '../App.css'

function ErrorScreen() {
  return (
    <div>
        <Container>
        {/*<h1 className='glitch'>
            <span span aria-hidden="true">ERROR 404</span>
            ERROR 404
            <span span aria-hidden="true">ERROR 404</span>
        </h1>
        <h3>We couldn't load this page</h3>
  <p>Record Id is Not Valid With The Supplied Email Address </p>*/}
        <h1 className="glitch" data-text="ERROR 404">ERROR 404</h1>
        <h3>We couldn't load this page</h3>
  <p>Record Id is Not Valid With The Supplied Email Address </p>
        </Container>
    </div>
  )
}

export default ErrorScreen