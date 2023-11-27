import React, {useState} from 'react';
import NewConfig from './NewConfig.json';
import '../App.css';
import SpecialText from './SpecialText';
import img6 from '../images/sunrise-software-logo-pos.jpg'
import { Container, Grid, Paper, Box, Typography, TextField, Button, Tooltip } from "@mui/material";
import {motion} from 'framer-motion'
import ThankScreen from './ThankScreen';
import ErrorScreen from './ErrorScreen';
import SecondErrorScreen from './SecondErrorScreen';
//this is the importing of Material UI
//this is the importing of all the images
//imported framer motion
//This is the initial screen page in the components folder


function InitialScreen() {
  const [showComment, setShowComment] = useState(false);
  function toggle() {
    setShowComment((showComment) => !showComment);
  }
  const [showContainer, setShowContainer] = useState(true);
  function throttle() {
    setShowContainer((showContainer) => !showContainer)
  }
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  function congratulate() {
    setShowThanksMessage((showThanksMessage) => !showThanksMessage)
  }
  const [showError404, setShowError404] = useState(false);
  function error() {
    setShowError404((showError404) => !showError404)
  }
  const [showError202, setShowError202] = useState(false);
  function error202() {
    setShowError202((showError202) => !showError202)
  }

  return (
    <div>
        {/*The container is an MuI component that contains the rest of the code inside and applies a certain width and height to the page, akin to a div element*/}
      <img className='logo' src={img6} alt=''/>
        <Container>
        <Box className='specbox' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/*The Typography element is the header and paragraph wrapped in one, this particular line is for the title of the survey on the page */}
        {showContainer && <Typography xs={12} sm={6} md={2} variant='h3' sx={{my:6, mx: 6}}><SpecialText /></Typography>}
        </Box>
        {showContainer && <hr style={{color:'black', border: '1px solid black'}}/>}
        {/*This is the short paragraph that uses lorem ipsum. Just do ctrl+shift+p to open the command pallete and type in ">lorem ipsum" */}
        {showContainer && <div> 
            <h3 className='ipsum' xs={12} sm={6} md={2} paragraph sx={{my:2, mx: 2}}>{
        NewConfig.summaryLine
      }</h3> 
          </div>}
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
{/* The Grid element from MuI is also like the regular Grid element which ceates columns to organise the placement of the faces */}
{/* Re-implemented Paper element and figured out how to connect muI with framer motion for the emotive faces the user will pick */}
{/* Implemented Framer Motion for hover effects */}
{/* The Textfield element is meant for the user to type in their response. "Full width" is to extend the box since its short in width by default */}
      <Paper className='cardcontainer' elevation={3} style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)', padding: '30px 40px', width: '100%'}}>
      {showContainer && <Grid container direction='row' className='grid-container'>

  {NewConfig.FaceDetails && NewConfig.FaceDetails.map(face => (
     <motion.div whileTap={{scale:0.9}} className="IScard" onClick={toggle}>
    <Tooltip title={face.tooltip} enterDelay={500} leaveDelay={300}>
    <img className='faces' src={face.ImageUrl}  alt=''/>
    </Tooltip>
    <div class="dimmer"></div>
    <div className="ISgo-corner">
      <div className="ISgo-arrow">
        →
      </div>
    </div>
    </motion.div>
  ))}

        </Grid>}
        {showComment && showContainer && <TextField sx={{mt: -2}} id="outlined-basic" label="Write your review here" variant="outlined" fullWidth />}
        {showError404 && <ErrorScreen/>}
        {showError202 && <SecondErrorScreen/>}
        <div className='button-container'>
        <div className='button-div bd1'>
        {showComment && showContainer && <Button className='button-design' variant="outlined" sx={{mt: 2}} onClick={() => {throttle(); error202();}}>error 202</Button>}
        </div>
        <div className='button-div bd2'>
        {showComment && showContainer && <Button className='button-design' variant="outlined" sx={{mt: 2, mx: 2}} onClick={() => {throttle(); congratulate();}}>SUBMIT</Button>}
        </div>
        <div className='button-div bd3'>
        {showComment && showContainer && <Button className='button-design' variant="outlined" sx={{mt: 2}} onClick={() => {throttle(); error();}}>error 404</Button>}
        </div>
        </div>
      {showThanksMessage && <ThankScreen />}
      </Paper>
    </Box>
        </Container>
    </div>
  )
}

export default InitialScreen