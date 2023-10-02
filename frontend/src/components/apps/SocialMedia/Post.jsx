import { Card, CardContent, Typography, CardActions, CardHeader, Avatar, IconButton, CardMedia, Checkbox, } from '@mui/material'
import { MoreVert, Favorite, Share, FavoriteBorder} from '@mui/icons-material'


export const Post = () => {
  return (
    <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Renato Balmaceda"
      subheader="September 14, 2023"
    />
    <CardMedia
      component="img"
      height="200"
      image="https://plus.unsplash.com/premium_photo-1694822449585-a2444c288b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    
    </CardActions>
  </Card>
  )
}
