import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
  const { _id, title, photo, products } = props.task
  return (
    <div>
      <div className="m-5 w-96 h-[30vh]">
        <div className="card card-side outline outline-1 outline-base-300">
          <figure className="w-28 m-3">
            <img src={photo} alt="" width={50} height={50} />
          </figure>
          <div className="card-body bg-base-200 rounded-r-xl">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-start">
              <div className="badge badge-outline badge-error">
                {products.length} products available
              </div>
            </div>
            <div className="card-actions justify-start w-full mt-3">
              <Link to={`/categories/${_id}`}>
                <button className="btn btn-outline btn-md btn-primary">
                  Explore →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
