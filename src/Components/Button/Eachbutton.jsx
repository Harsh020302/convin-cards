import React from 'react'
import { Button } from '@mui/material';
const Eachbutton = ({ id }) => {
  const handleClick = (e) => {
    console.log(e.target.innerText);
  }
  return (
    <div>
     <Button sx={{height:'40px',width:'30px',margin:'10px'}} variant='contained' onClick={handleClick}>
        {id}
     </Button>
    </div>
  )
}

export default Eachbutton