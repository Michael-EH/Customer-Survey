import React, {useState} from 'react';
import '../App.css';
import SpecialText from './SpecialText';
import img1 from '../images/really happy.png'
import img2 from '../images/happiness.png'
import img3 from '../images/sceptic.png'
import img4 from '../images/sad-face.png'
import img5 from '../images/angry.png'
import img6 from '../images/sunrise-software-logo-pos.jpg'
import { Container, Grid, Paper, Box, Typography, TextField, Button } from "@mui/material";
import {motion} from 'framer-motion'
import SpecialCard from './SpecialCard';
//this is the importing of Material UI
//this is the importing of all the images
//imported framer motion
//This is the initial screen page in the components folder



function InitialScreen() {
  const [showComment, setShowComment] = useState(false);
  function toggle() {
    setShowComment((showComment) => !showComment);
  }
  return (
    <div>
        {/*The container is an MuI component that contains the rest of the code inside and applies a certain width and height to the page, akin to a div element*/}
        <Container>
        <Box sx={{display: 'flex'}}>
      <Paper sx={{height:38, width:38}} elevation={3}>
      <img src={img6} style={{height: 38, width: 38}} alt=''/>
      </Paper>
        {/*The Typography element is the header and paragraph wrapped in one, this particular line is for the title of the survey on the page */}
        <Typography variant='h3' sx={{my:6, mx: 6}}><SpecialText /></Typography>
        </Box>
        <hr style={{color:'black', border: '1px solid black'}}/>
        {/*This is the short paragraph that uses lorem ipsum. Just do ctrl+shift+p to open the command pallete and type in ">lorem ipsum" */}
        <Typography paragraph sx={{my:4, mx: 2}}>Ipsum non ex proident elit deserunt laboris sit minim ad eu nostrud officia id voluptate. Et ex ipsum enim consequat. Incididunt ea culpa et tempor officia occaecat et. Dolor nisi irure ullamco id. Nostrud cupidatat tempor mollit irure incididunt qui excepteur incididunt. Irure sit labore consequat labore Lorem velit. Et et nostrud minim minim excepteur tempor.

Voluptate esse reprehenderit proident reprehenderit Lorem consectetur. Sint amet ullamco proident esse non. Excepteur eiusmod minim duis pariatur nulla cupidatat culpa aliqua enim anim do. Ad sit adipisicing adipisicing cillum.

Occaecat consectetur id elit cupidatat occaecat laborum in do enim. Cupidatat quis fugiat sit aute pariatur enim incididunt nisi ex. Aliqua reprehenderit incididunt aliqua voluptate in ullamco aliquip nulla tempor.</Typography>
{/* The Box component is a generic, theme-aware container with access to CSS utilities from MUI System. Its currently wrapping the Paper and Grid elements */}
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          justifyContent: 'space-between',
        },
      }}
    >
{/* The Paper element creates square like designs. These will be used for the box that acts as the background for the faces and submit button */}
      <Paper elevation={3} style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)', padding: '30px 40px', margin: '20px 95px'}}>
        <Grid container sx={{m:3, gap:4, pb: 3}}>
{/* The Grid element from MuI is also like the regular Grid element which ceates columns to organise the placement of the faces */}
{/* Re-implemented Paper element and figured out how to connect muI with framer motion for the emotive faces the user will pick */}
{/* Implemented Framer Motion for hover effects */}
{/* The Textfield element is meant for the user to type in their response. "Full width" is to extend the box since its short in width by default */}
            <Grid item xs={12} sm={6} md={2}>
            <motion.a whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <img src={img1} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="ISsmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="ISgo-corner" href="#">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
  </motion.a>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <motion.a whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <img src={img2} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="ISsmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="ISgo-corner" href="#">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
  </motion.a>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <motion.a whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <img src={img3} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="ISsmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="ISgo-corner" href="#">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
  </motion.a>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <motion.a whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <img src={img4} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="ISsmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="ISgo-corner" href="#">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
  </motion.a>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <motion.a whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <img src={img5} style={{height: 98, width: 100, marginTop: 10}} alt=''/>
    <p className="ISsmall">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div className="ISgo-corner" href="#">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
  </motion.a>
            </Grid>
        </Grid>
        {showComment && <TextField id="outlined-basic" label="Write your review here" variant="outlined" fullWidth />}
        {showComment &&<Button variant="outlined" sx={{mt: 2}}>SUBMIT</Button>}
      </Paper>
      {/*<SpecialCard/>*/}
    </Box>
        </Container>
    </div>
  )
}

export default InitialScreen