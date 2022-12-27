import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div className="flex">
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_owua8tsy.json"
          style={{ height: '', width: '' }}
        ></Player>
        <h5 className="py-6 text-black">
          The webpage you are looking for does not exist!
        </h5>
        <Link to="/#projects">
          <button className="">Explore Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
