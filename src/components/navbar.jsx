import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
return (
    <>
        <nav className=" bg-green-900 text-white p-4 rounded-3xl">
            <div className='nav-wrapper flex flex-row justify-evenly'>
                <div className='logo'>
                    <a href="#" className="hover:text-white text-lg">G.F.P.S</a>
                </div>
                <div className='ul-wrapper md:block hidden'>
                    <ul className='nav-links flex flex-auto'>
                        <li>
                            <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-2">Home</a>    
                        </li>
                        <li>
                            <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-2">Our Story</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-2">Impact</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-2">How to help</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-2">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='hamburger-menu sm-block hidden outline'>
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow-300 hover:border-yellow-300" onClick={() => setMenuOpen(!menuOpen)}>    
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                        </svg>
                    </button>
                </div>
                <a href="" type="button" className="button
                
                
                
                hover:text-white text-lg rounded-lg bg-red-500 hover:bg-red-600 px-5  hover:border-red-800">Donate Now</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
