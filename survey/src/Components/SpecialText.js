import '../App.css';
import SecConfig from './SecConfig.json';
import '../Components/TextSpan';
import React from 'react'
import TextSpan from '../Components/TextSpan';

function SpecialText() {
  return (
    <div className='SpecText'>
      <h2>
      {
        SecConfig[2].title
      }
      </h2>
    </div>
  )
}

export default SpecialText