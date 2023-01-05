import React,{useState,useEffect} from 'react';
import Eachbutton from '../Button/Eachbutton';
import {CircularProgress,Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../../Services/CardApi';
import { setusersData } from '../../App/cardSlice';

const Buttonlist = () => {
    
     
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    //dispatch(setusersData(data?.data));

    useEffect(() => {
        setLoading(true);
        fetch(`https://reqres.in/api/users?page=${page}`)
          .then(response => response.json())
          .then(data => {
            dispatch(setusersData(data.data));
            setdata(data.data);
            setLoading(false);
        });
          
      }, [page]);
    
      function handleNextPage() {
        setPage(2);
      }
    
      function handlePrevPage() {
        setPage(1);
      }

  return (
    <div style={{marginTop:'50px',display:'flex',flexDirection:"row",justifyContent:'center'}}>

        <Button onClick={ handlePrevPage } >Prev</Button>
        <div>
            { !loading ? (
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'70%',margin:'auto',overflow:'auto'}}>
                        {   
                            data.map((item,key)=>{
                            return <Eachbutton id={item.id} key={item.id} />
                            })
                        }
                    </div>
                ) : (
                    <div >
                        <CircularProgress/>
                    </div>
                )
            }
        </div>
        <Button onClick={ handleNextPage }>Next</Button>
    </div>
    
  )
}

export default Buttonlist