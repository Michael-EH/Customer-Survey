import React from 'react'
import { Container, Grid, Paper, Box, Typography, TextField } from "@mui/material";

function InitialScreen() {
  return (
    <div>
        <Container>
        <Typography variant='h3' sx={{my:4}}>Welcome to Our Sunrise Survey</Typography>
        <hr/>
        <Typography paragraph sx={{my:4, mx: 2}}>Ipsum non ex proident elit deserunt laboris sit minim ad eu nostrud officia id voluptate. Et ex ipsum enim consequat. Incididunt ea culpa et tempor officia occaecat et. Dolor nisi irure ullamco id. Nostrud cupidatat tempor mollit irure incididunt qui excepteur incididunt. Irure sit labore consequat labore Lorem velit. Et et nostrud minim minim excepteur tempor.

Voluptate esse reprehenderit proident reprehenderit Lorem consectetur. Sint amet ullamco proident esse non. Excepteur eiusmod minim duis pariatur nulla cupidatat culpa aliqua enim anim do. Ad sit adipisicing adipisicing cillum.

Occaecat consectetur id elit cupidatat occaecat laborum in do enim. Cupidatat quis fugiat sit aute pariatur enim incididunt nisi ex. Aliqua reprehenderit incididunt aliqua voluptate in ullamco aliquip nulla tempor.</Typography>
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
      <Paper elevation={3} sx={{p:3, width: 1028,
          height: 328,}}>
        <Grid container sx={{m:3, gap:4, pb: 3}}>
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