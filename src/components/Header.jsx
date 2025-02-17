import './Header.css';
import Logo from '../img/Logo.svg';
import Search from '../img/Search.svg';
import Cart from '../img/cart.svg';

export default function Header() {
  return (
    <div className='header-bg'>
        <div className='wrapper header'>
            <a href='#'><img src={Logo} alt='Logo'></img></a>
            <nav className='header-links'>
                <a href='#'>Home</a>
                <a href='#'>Profucts</a>
                <a href='#'>About us</a>
                <a href='#'>Contact us</a>
            </nav>
            <div className='header-right'>
                <div className='header-search'>
                    Search
                    <img src={Search} alt='search icon'></img>
                </div>
                <div>
                    <a href='#'><img src={Cart} alt='cart icon'></img>3</a>
                </div>
                   
            </div>
        </div>
    </div>
  );
}