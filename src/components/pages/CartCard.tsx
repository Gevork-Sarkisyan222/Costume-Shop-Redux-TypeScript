import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICardProps } from '../../components/Card';
import { removeItem } from '../redux/slices/Cart.slice';
import { useDispatch } from 'react-redux';
import { minus } from '../redux/slices/Counter.slice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { setChecked } from '../redux/slices/Checked.slice';

const MediaCard: React.FC<ICardProps> = ({ title, image, price, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const alert = window.confirm('Вы уверены что хотите удалить товар?');

    if (alert) {
      dispatch(removeItem(id));
      dispatch(minus());
      dispatch(setChecked({ id, value: false }));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'black' }}>
          {price}
        </Button>
        <Button onClick={handleDelete} size="small">
          <HighlightOffIcon sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
