import { Link } from "react-router-dom"
function Header(props){
    
    return (
        <div className='d-flex justify-content-between'>
        <img src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg' height='60px' width='80px'/>
        <ul className='d-flex'>
            <li className='p-2'><Link to='/'>Home</Link></li>
            <li className='p-2'><Link to='/offers'>offers</Link></li>
            <li className='p-2'><Link to='/help'>help</Link></li>
            <li className='p-2'><Link to='/cart'>cart</Link></li>
        </ul>
        </div>
    )
}

export default Header