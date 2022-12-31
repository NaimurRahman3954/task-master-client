import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const TaskCard = (props) => {
  const { _id, task } = props.task
  return (
    <Card sx={{ minWidth: 275 }} className="m-6 w-96 h-36">
      <CardContent>
        <Typography variant="h5" component="div">
          {task}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/tasks/${_id}`} className="no-underline">
          <Button size="small" className="w-96 text-center no-underline">
            Details →
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default TaskCard
