import React from 'react'
// import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      className="bg-slate-800 py-16"
      sx={{
        width: '100%',
        height: 'auto',
        //  backgroundColor: 'primary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              Task Master App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | © Task Master`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
