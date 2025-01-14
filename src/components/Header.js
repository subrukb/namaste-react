import {HEADER_IMG_URL} from './../utils/constants'
import { Link } from 'react-router-dom';


const Logo = () => {
	return (
	<div className="w-32 logo">
		<img src={HEADER_IMG_URL}/>
	</div>
	)
}

const NavLinks = () => {
	

	return (
		<div className ="flex nav-container">
		 <ul className='flex items-center p-4 m-4'>
			<li className='px-5'>
			<Link to="/">Home </Link></li>	
			<li className='px-5'><Link to="/about">About Us</Link></li>
			<li className='px-5'><Link to="/contact">Contact</Link></li>
			<li className='px-5'>Cart</li>
		</ul>
		</div>
	)
}

const Header = () => {
	return (
	<div className="header flex justify-between align-center shadow-lg bg-slate-200 sticky top-0">
		<Logo/>
		<NavLinks/>
	</div>
	)
}


export default Header;