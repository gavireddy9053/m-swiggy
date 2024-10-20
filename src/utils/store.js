import {configureStore} from '@reduxjs/toolkit'
import { reducer } from './slice'
export let webStore = configureStore({
  reducer:{
    cart:reducer
  }
})