import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
// import { useMutation } from 'react-query';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import toast, { Toaster } from 'react-hot-toast'
import Loading from '../Shared/Loading'

const TaskDetails = () => {
  const taskObj = useLoaderData()
  const { _id, task, image, dueDate, completed } = taskObj
  const navigation = useNavigation()

  const handleCompleted = () => {
    fetch(`https://assignment-12-server-sage.vercel.app/users/admin/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          //  refetch()
        }
      })
  }

  const handleNotCompleted = () => {
    fetch(`https://assignment-12-server-sage.vercel.app/users/admin/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          //  refetch()
        }
      })
  }

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div className="h-[65vh]">
      <Toaster></Toaster>
      <Card sx={{ maxWidth: 500 }} className="mx-auto my-24">
        <CardMedia
          sx={{ height: 240 }}
          // image="https://images.unsplash.com/photo-1567740034541-1ff8b618a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          image={image}
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
          {!completed && (
            <Button
              onClick={handleCompleted}
              size="small"
              className="flex w-full justify-end mx-3"
            >
              <FormControlLabel
                className="flex w-full justify-end mx-3"
                control={<Checkbox />}
                label="Completed"
              />
            </Button>
          )}
          {completed && (
            <Button
              onClick={handleNotCompleted}
              size="small"
              className="flex w-full justify-end mx-3"
            >
              <FormControlLabel
                className="flex w-full justify-end mx-3"
                control={<Checkbox />}
                label="NOT Completed"
              />
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

export default TaskDetails
