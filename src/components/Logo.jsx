import React from 'react';
import bird from '../assets/bird.jpg'

const Logo = () => {
  return (
    <div>
        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-10 w-auto"
                // src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711238400&semt=sph"
                src={bird}
                alt="J-Orbs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >J-ORBS</span
              >
            </a>
    </div>
  )
}

export default Logo