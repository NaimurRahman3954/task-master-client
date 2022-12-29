import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
  const { _id, task, photo, dueDate } = props.task
  return (
    <div>
      <div className="m-5 w-96 h-[30vh]">
        <div className="card card-side outline outline-1 outline-base-300">
          <figure className="w-28 m-3">
            <img src={photo} alt="" width={50} height={50} />
          </figure>
          <div className="card-body bg-base-200 rounded-r-xl">
            <h2 className="card-title">{task}</h2>
            <div className="card-actions justify-start">
              <div className="badge badge-outline badge-error">
                Due Date: {dueDate}
              </div>
            </div>
            <div className="card-actions justify-start w-full mt-3">
              <Link to={`/tasks/${_id}`}>
                <button className="btn btn-outline btn-md btn-primary">
                  Details →
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
