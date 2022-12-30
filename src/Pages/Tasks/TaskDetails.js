import React from 'react';
import { useLoaderData } from 'react-router-dom'

const TaskDetails = () => {
   const taskObj = useLoaderData()
   const { task, image, dueDate, completed} = taskObj
   return (
      <div>
         <h3>{task}</h3>
         <h3>{dueDate}</h3>

      </div>
   );
};

export default TaskDetails;