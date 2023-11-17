import React from "react";
import img7 from "../images/kisspng-check-mark-computer-icons-clip-art-green-tick-5ac5328dc281d0.2372707915228729737967.png";
import "../App.css";

{
  /*const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 16)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}*/
}

function ThankScreen() {
  return (
    <div className="ThankDiv">
      <h1 className="Hyper" data-value="Thank You For Participating">
        Thank You For Participating In Our Survey
      </h1>
      <p>
        we hope to see you again soon
      </p>
      <img src={img7} />
    </div>
  );
}

export default ThankScreen;
