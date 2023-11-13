import React from "react";
import '../App.css'
import img1 from '../images/really happy.png'
import img2 from '../images/happiness.png'
import img3 from '../images/sceptic.png'
import img4 from '../images/sad-face.png'
import img5 from '../images/angry.png'
import { motion } from "framer-motion";

const SpecialCard = () => {
  return (
    <div className="container">
      <a className="Scard1" href="#">
    <img src={img1} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="asmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  <a className="Scard1" href="#">
    <img src={img2} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="asmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  <a className="Scard1" href="#">
    <img src={img3} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="asmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
    </div>
  )
}

export default SpecialCard