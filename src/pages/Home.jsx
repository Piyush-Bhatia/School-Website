// import React from 'react'

function Home() {
  return (
    <>  
        <div className="container mx-auto py-5">
            <div className="flex flex-col justify-center items-center border-spacing-80 backrgound-image: url('./public/photos/school photo1.jpg')">
                <h1 className="text-4xl font-bold">Welcome to Green Field Paramount School</h1>
                <p className="text-lg">We are a School that is dedicated to providing quality education to children in rural areas since 1973.</p>
                <button className="button border-blue-400 hover:text-blue-600 p-2 rounded-xl">Learn More</button>
            </div>
        </div>

    </>
  )
}

export default Home