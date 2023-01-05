import React from 'react'

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setButton } from '../../App/cardSlice.js';

const Eachbutton = ({ id }) => {

  const dispatch = useDispatch();

  //dispatching action that sets which button has been clicked

  const handleClick = (e) => {
    dispatch(setButton(e.target.innerText));
  }

  return (
    <div>
     <Button sx={{height:'40px',width:'20px',margin:'10px'}} variant='contained' size='small' onClick={handleClick}>
        {id}
     </Button>
    </div>
  )
}

export default Eachbutton