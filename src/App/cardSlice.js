import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'buttonClicked',
    initialState : {
        button: '0',
        page : '1',
        usersData: {},
    },
    reducers: {
        setButton: (state,action) => {
            state.button = action.payload;
        },
        setusersData: (state,action) => {
            state.usersData = action.payload;
        },
        setPage: (state,action)=>{
            state.page = action.payload;
        }
    }
});

export const { setButton,setusersData,setPage } = cardSlice.actions;

export default cardSlice.reducer;