import React from 'react';
import {Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';


const App = () => {

  return (
     <Container maxWidth="lg">
      {/* "sx" prop allows developers to define styles using a concise syntax */}
      <AppBar  position='static' color="inherit" sx={{ display: 'flex', flexDirection: 'row' }} >
          <Typography variant='h2' align='center'>Instraverse</Typography>
          <img src={instraverse} alt='Instraverse' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
        <Grid2 container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid2 item xs={12} sm={7}>
              <Posts/>
            </Grid2>            
            <Grid2 item xs={12} sm={4}>
              <Form/>
            </Grid2>
          </Grid2>
        </Container>

      </Grow>
     </Container>
  )
}

export default App;
