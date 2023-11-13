import '../App.css';
import '../Components/TextSpan';
import React from 'react'
import TextSpan from '../Components/TextSpan';

function SpecialText() {
    const sentence = 'Welcome To Our Sunrise Survey'.split('');
  return (
    <div style={{marginTop: '1rem', fontSize: '3rem', display: 'inline-block'}}>{sentence.map((letter, index) =>{
        return(
            <TextSpan key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </TextSpan>
        )
    })}</div>
  )
}

export default SpecialText