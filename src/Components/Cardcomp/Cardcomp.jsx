import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const Cardcomp = () => {
  return (
    <Card sx={{height:'250px', width:'400px',display:'flex',flexDirection:'row',margin:'100px' }}>
      <CardContent sx={{maxWidth:'200px'}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          First Name : Harsha <br/>
          <br/>
          Last Name : Vardhan <br/>
          <br/>
          Email : harsha020302@gmail.com 
        </Typography>
      </CardContent>
      <div>
        <img src='https://reqres.in/img/faces/2-image.jpg' style={{height:'100%',width:'100%'}}/>
      </div>
    </Card>
  )
}

export default Cardcomp