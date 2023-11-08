import React from 'react'
import { Container, Grid, Paper } from "@mui/material";

function InitialScreen() {
  return (
    <div>
        <Container>
        <Grid container>
            <Grid item xs={12} sm={6} md={2}>
                <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper>4</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Paper>5</Paper>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default InitialScreen