import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Style } from '@mui/icons-material';




  export const Menubar = () => {
<div Style={{padding:'80px'}}>
    
  return (
    


<Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        sx={{ height: 150 }}
        image="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4="
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chicken Biryani
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: 11:30 to 3:00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to cart</Button>
        <Button size="small">order</Button>
      </CardActions>
    </Card>
  
    
  )
    <div Style={{padding:'80px'}}>
       </div>
        return (
      
  
  
      <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              sx={{ height: 150 }}
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chitrasfoodbook.com%2F2015%2F05%2Fsouth-indian-full-meals-lunch-menu-for.html&psig=AOvVaw0tTOwrMpO8aGJvBolV91IT&ust=1713500624761000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjCn7L1yoUDFQAAAAAdAAAAABAE"
              image=""
             
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time: 12:00 to 3:00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">add to cart</Button>
              <Button size="small">order</Button>
            </CardActions>
          </Card>
        
          
        )
    </div>
    
    
    
    
  }

export default Menubar
