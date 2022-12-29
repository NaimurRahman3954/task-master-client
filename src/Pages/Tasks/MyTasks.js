import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

const MyTasks = () => {
  const [tasks, setTasks] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://task-master-server-one.vercel.app/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto my-10 text-center">
      <>
        {loading ? (
          <button className="btn loading bg-primary my-16">loading</button>
        ) : (
          <div className="flex flex-wrap align-middle justify-center">
            {tasks.filter(task => !task.completed).map((task) => (
              <TaskCard key={task._id} task={task}></TaskCard>
            ))}
          </div>
        )}
      </>
    </div>
  )
}

export default MyTasks
 