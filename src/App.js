import Header from './components/Header'
import Body from './components/Body'
import {createBrowserRouter,Outlet} from 'react-router-dom'
import './App.css'
import Offers from './components/Offers'
import Help from './components/Help'
import Cart from './components/Cart'
import RestaurantsMenu from './components/RestaurantsMenu'
function App(){
   
   
    return(
      <div>
       <Header />
       <Outlet />
    </div>
    ) 
  
}
export default App

export let router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/offers',
        element:<Offers />
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
