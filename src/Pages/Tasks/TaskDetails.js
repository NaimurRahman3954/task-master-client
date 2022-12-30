import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskDetails = () => {
   const taskObj = useLoaderData()
   const { task, image, dueDate, completed} = taskObj
   return (
    <div className='h-[65vh]'>
    <Card sx={{ maxWidth: 500 }} className="mx-auto my-24">
      <CardMedia
        sx={{ height: 240 }}
        image="https://images.unsplash.com/photo-1567740034541-1ff8b618a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {task}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Due Date: {dueDate}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <Button size="small" className="flex w-full justify-end mx-3">Completed</Button>
      </CardActions>
    </Card>

   </div>
   );
};

export default TaskDetails;