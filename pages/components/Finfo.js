import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box >
        <CardContent sx={{ flex: '2 5 auto' }}>

          <Typography variant="subtitle1" color="text.secondary" component="div">
          Proporciona una mayor velocidad en la rotación de la mesas.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">      
        - Ayuda a mantener satisfechos a tus clientes. 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
        - Cosigue más clientes fieles. 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
         Mejora el control de los pedidos de comida. 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div"> 
        - Conecta con tus clientes a través de las notificaciones push.
          </Typography>
        </CardContent>
        <Box > 

        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://ak.picdn.net/shutterstock/videos/3643535/thumb/11.jpg"
       
      />
    </Card>
  );
}