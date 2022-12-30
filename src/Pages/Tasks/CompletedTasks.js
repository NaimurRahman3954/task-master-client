import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import TaskCard from './TaskCard'
import Loading from '../Shared/Loading'

const CompletedTasks = () => {
  // const [tasks, setTasks] = useState({})
  // const [loading, setLoading] = useState(true)

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://task-master-server-one.vercel.app/tasks',
        )
        const data = await res.json()
        return data
      } catch (error) {}
    },
  })

  // useEffect(() => {
  //   fetch('https://task-master-server-one.vercel.app/tasks')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTasks(data)
  //       setLoading(false)
  //     })
  // }, [])

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="container mx-auto my-10 text-center">
    <div className="flex flex-wrap align-middle justify-center">
      {tasks.filter(task => task.completed).map((task) => (
        <TaskCard key={task._id} task={task}></TaskCard>
      ))}
    </div>
  </div>
  )
}

export default CompletedTasks
