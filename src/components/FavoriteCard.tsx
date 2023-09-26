import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ICardProps } from './Card';
import { useDispatch } from 'react-redux';
import { removeItemFavorite } from '././redux/slices/Favorite.slice';
import { toggleFavoriteItem } from './redux/slices/FavoriteChecked.slice';

const FavoriteCard: React.FC<ICardProps> = ({ title, price, image, id }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    const deleteAlert = window.confirm('Вы действительно хотите удалить этот товар с закладок??');

    if (deleteAlert) {
      dispatch(removeItemFavorite(id));
      dispatch(toggleFavoriteItem(id));

      const favoriteChecked = JSON.parse(localStorage.getItem('favoriteChecked') || '{}');
      delete favoriteChecked[id];
      localStorage.setItem('favoriteChecked', JSON.stringify(favoriteChecked));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
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
          Цена:{price}
        </Button>
        <Button size="small">
          <DeleteForeverIcon
            onClick={handleDeleteItem}
            sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavoriteCard;
