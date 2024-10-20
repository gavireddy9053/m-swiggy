import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { router } from './App'
import './index.css'
import { webStore } from './utils/store'

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(
    
<RouterProvider router={router}>
    <Provider store={webStore}></Provider>
</RouterProvider>
)