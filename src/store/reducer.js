import { createSlice } from '@reduxjs/toolkit'

const initialState={
    selectedMovieInfo:null,
    selectedSeats:[]
       
}

export const counterSlice= createSlice({
    name:"dataReducer",
    initialState,
    reducers:{
        setSelectMovieHandler(state, action){
            
           return  {
            ...state,
            selectedMovieInfo:action.payload
            }
        
        },
       
        setSelectedSeatsHandler(state,action){

            return {
                ...state,
                selectedSeats:action.payload
            }
        },
        
       
        

    }
})



export const {setSelectMovieHandler,setSelectedSeatsHandler} = counterSlice.actions


export default counterSlice