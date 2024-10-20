import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:'Cart',
    initialState: {
        cartCount:0
    },
    reducers:{
         increaseCount : (state,action) => {
          state.cartCount += 1
        } 
    }
    
})


export  let {reducer} = cartSlice
export default cartSlice.actions.increaseCount
console.log(cartSlice)
