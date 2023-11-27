import '../App.css';
import NewConfig from './NewConfig.json';
import '../Components/TextSpan';
import React from 'react'

function SpecialText() {
  return (
    <div className='SpecText'>
      <h2>
      {
        NewConfig.title
      }
      </h2>
    </div>
  )
}

export default SpecialText