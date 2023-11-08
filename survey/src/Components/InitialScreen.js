import React from 'react'
import { Container, Grid, Paper, Box, Typography, TextField } from "@mui/material";
//this is the importing of Material UI
//This is the initial screen page in the components folder

function InitialScreen() {
  return (
    <div>
        {/*The container is an MuI component that contains the rest of the code inside and applies a certain width and height to the page, akin to a div element*/}
        <Container>
        {/*The Typography element is the header and paragraph wrapped in one, this particular line is for the title of the survey on the page */}
        <Typography variant='h3' sx={{my:4}}>Welcome to Our Sunrise Survey</Typography>
        <hr/>
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
          justifyContent: 'space-between'
        },
      }}
    >
{/* The Paper element creates square like designs. These will be used for the box that acts as the background for the faces and submit button */}
      <Paper elevation={3} sx={{p:3, width: 1028,
          height: 328,}}>
        <Grid container sx={{m:3, gap:4, pb: 3}}>
{/* The Grid element from MuI is also like the regular Grid element which ceates columns to organise the placement of the faces */}
{/* The Paper element here is for the emotive faces the user will pick */}
{/* The Textfield element is meant for the user to type in their response. "Full width" is to extend the box since its short in width by default */}
            <Grid item xs={12} sm={6} md={2}>
                <Paper sx={{height:158, width:170}}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper sx={{height:158, width:170}}>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper sx={{height:158, width:170}}>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper sx={{height:158, width:170}}>4</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper sx={{height:158, width:170}}>5</Paper>
            </Grid>
        </Grid>
        <TextField id="outlined-basic" label="Write your review here" variant="outlined" fullWidth />
      </Paper>
    </Box>
           
        </Container>
    </div>
  )
}

export default InitialScreen