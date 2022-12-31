import React from 'react'
import { useQuery } from '@tanstack/react-query'
import TaskCard from './TaskCard'
import Loading from '../Shared/Loading'

const CompletedTasks = () => {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://task-master-server-one.vercel.app/tasks'
        )
        const data = await res.json()
        return data
      } catch (error) {}
    },
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="container mx-auto my-10 text-center">
      <div className="flex flex-wrap align-middle justify-center">
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
      </div>
    </div>
  )
}

export default CompletedTasks
