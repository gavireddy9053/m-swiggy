import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse,faPercent} from '@fortawesome/free-solid-svg-icons'
function Header(props){
    
    return (
        <div className='flex justify-between border-gray-200 border-2 m-2 p-2 bg-black text-white'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWu-RoOKRvoPjZMzjA3q-EzZKxqu1bwIli0g&s' className=" h-10 w-10"/>
        <ul className='flex '>
        <FontAwesomeIcon icon={faHouse} className="pt-2.5"/>
            <li className='p-2 hover:underline hover:text-pink-300'><Link to='/'>Home</Link></li>
            <FontAwesomeIcon icon={faPercent} className='pt-2.5'/>
            <li className='p-2 hover:underline hover:text-pink-300'><Link to='/offers'>offers</Link></li>
            <li className='p-2 hover:underline hover:text-pink-300'><Link to='/help'>help</Link></li>
            <li className='p-2 hover:underline hover:text-pink-300'><Link to='/cart'>cart</Link></li>
        </ul>
        </div>
    )
}

export default Header