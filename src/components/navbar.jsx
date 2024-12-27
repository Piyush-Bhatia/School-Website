// import React from 'react'

function Navbar() {
return (
    <>
        <nav className=" bg-green-900 text-white p-4 rounded-3xl min-w-96">
            <div className='nav-wrapper flex flex-row justify-evenly items-center'>
                <a href="#" className="px-5 hover:text-white text-lg">Green Field Paramount School</a>
                <ul className="nav-links flex flex-row justify-evenly hover:flex-row gap-7 px-5">
                    <li>
                        <a href="#" className="hover:text-yellow-500 text-lg">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-500 text-lg">Our Story</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-500 text-lg">Impact</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-500 text-lg">How to help</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-500 text-lg">Contact Us</a>
                    </li>
                </ul>
                <a href="" type="button" className="button px-5 hover: hover:text-red-500 text-lg">Donate Now</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar