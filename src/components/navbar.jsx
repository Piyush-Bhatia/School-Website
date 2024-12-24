// import React from 'react'

function Navbar() {
return (
    <>
        <nav>
            <div className='nav-wrapper'>
                <a href="#" className="">Green Field Paramount School</a>
                <ul className="nav-links flex flex-row justify-evenly hover:flex-row gap-7">
                    <li>
                        <a href="#" className="hover:bg-blue-400">Home</a>
                    </li>
                    <li>
                        <a href="#">Our Story</a>
                    </li>
                    <li>
                        <a href="#">Impact</a>
                    </li>
                    <li>
                        <a href="#">How to help</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Donate</a>
                    </li>
                </ul>
                <a href="" type="button" className="button"></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar