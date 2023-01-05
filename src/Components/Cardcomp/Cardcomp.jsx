import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserInfoQuery } from '../../Services/CardApi';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Cardcomp = () => {

  //fetching state of which button has clicked 
  const {button} = useSelector((state) => state.buttonClicked);

  //fetching data from api using RTK Query
  const { data,error } = useGetUserInfoQuery(button);
  const UserData = data?.data;

  if(error){

    //Display Skeleton card is no button has clicked yet
    return(
      <Card sx={{height:'250px', width:'400px',margin:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h3' color="#ccccca">Click any Button</Typography>
      </Card>
    )
  }

  return (
    <Card sx={{height:'250px', width:'400px',display:'flex',flexDirection:'row',margin:'auto'}}>

      <CardContent sx={{maxWidth:'200px'}}>

        <Typography gutterBottom variant="h5" component="div" sx={{marginBottom:'30px',fontWeight:'Bold'}}>
          {UserData?.first_name}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          First Name : {UserData?.first_name } 
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last Name : {UserData?.last_name } 
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Email :  {UserData?.email}
        </Typography>

      </CardContent>

      <div>
        <img src={UserData?.avatar} style={{height:'100%',width:'100%'}} />
      </div>

    </Card>
  )
}

export default Cardcomp