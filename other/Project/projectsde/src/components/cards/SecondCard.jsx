import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import clubCard from './ClubCard.jpg';

function SecondCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={clubCard}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Дневной абонемент на 3 месяца
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Время посещения: 06:00-16:00<br/>
            Стоимость: 5000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Купить
        </Button>
      </CardActions>
    </Card>
  );
}

export default SecondCard