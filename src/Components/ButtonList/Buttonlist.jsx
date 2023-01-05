import React,{useState} from 'react'
import Eachbutton from '../Button/Eachbutton'
import {CircularProgress} from '@mui/material'

const Buttonlist = () => {
    const [isFetch,setFetch] = useState(false);
  return (
    <div>
        { !isFetch ? (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',margin:'auto',overflow:'auto'}}>
                    <Eachbutton id='1'/>
                    <Eachbutton id='2'/>
                    <Eachbutton id='3'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                    <Eachbutton id='4'/>
                </div>
            ) : (
                <CircularProgress/>
            )

        }
    </div>
    
  )
}

export default Buttonlist