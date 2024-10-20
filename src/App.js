import Header from './components/Header'
import React , {Suspense} from 'react'
// import Body from './components/Body'
import {createBrowserRouter,Outlet} from 'react-router-dom'
import './App.css'
// import Offers from './components/Offers'
import Help from './components/Help'
import Cart from './components/Cart'
import RestaurantsMenu from './components/RestaurantsMenu'
import { createContext } from 'react'

let Body = React.lazy(()=>import('./components/Body'))
let Offers = React.lazy(()=>import('./components/Offers'))

export let context = createContext()
console.log(context)
function App(){
 
  
   console.log(context)
    return(
      <div>
       <Header />
       <Outlet />
    </div>
    ) 
  
}
export default App
let name ='Swiggy'
export let router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:
      <Suspense fallback={<div>Loading...</div>}><context.Provider value={name}><Body/></context.Provider></Suspense>
     
      },
      {
        path:'/offers',
        element:<Suspense fallback={<div>Loading...</div>}><Offers /></Suspense>
      },
      {
        path:'/help',
        element:<Help />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/restaurants/:restId',
        element:<RestaurantsMenu />
      }
    ]
  }

])
