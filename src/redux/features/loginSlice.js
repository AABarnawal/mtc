import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value : ''
};


export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        changeLogin : (state, action) =>{
            console.log(action);
            state.value = action.payload
            console.log("state : ", state.value);
        }
    }
})

export const { changeLogin } = loginSlice.actions

export default loginSlice.reducer