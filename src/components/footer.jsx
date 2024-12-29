// import React from 'react'

function footer() {
  return (
    <>
        <div className='footer-wrapper bg-green-900 text-white p-4 rounded-md'>
            <div className="footer-inner flex flex-row shrink-1 justify-evenly items-center">
                <div>
                    <h3 className="text-white text-lg">&copy; Green Field Paramount School </h3>

                </div>
                <div className="footer-links flex flex-col justify-evenly px-5">
                    <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-1">Home</a>
                    <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-1">Our Story</a>
                    <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-1">Impact</a>
                    <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-1">How to help</a>
                    <a href="#" className="hover:text-black hover:border-yellow-300 hover:bg-yellow-300 text-lg px-1">Contact Us</a>
                </div>
                <button type="button" className="text-white text-lg rounded-lg bg-red-500 hover:bg-red-600 px-5 py-2 hover:border-red-800">Donate to our cause</button>
            </div>
        </div>
    </>
  )
}

export default footer