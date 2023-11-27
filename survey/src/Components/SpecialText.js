import '../App.css';
import SecConfig from './SecConfig.json';
import NewConfig from './NewConfig.json';
import '../Components/TextSpan';
import React from 'react'
import TextSpan from '../Components/TextSpan';

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