import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import { setChecked } from './redux/slices/Checked.slice';
// import { setFavoriteChecked } from './redux/slices/FavoriteChecked.slice';
import { plus, minus } from './redux/slices/Counter.slice';
import { RootState } from './redux/store';
import { addItem, removeItem } from '../../src/components/redux/slices/Cart.slice';
import { toggleFavoriteItem } from './redux/slices/FavoriteChecked.slice';
import {
  addItemFavorite,
  removeItemFavorite,
} from '../../src/components/redux/slices/Favorite.slice';
import CardInfo from './CardInfo';
import FavoriteIcon from '@mui/icons-material/BookmarkBorder';
import CheckedFavorite from '@mui/icons-material/Bookmark';

export interface ICardProps {
  title: string;
  image: string;
  price: string;
  id: number;
}

const MediaCard: React.FC<ICardProps> = ({ title, image, price, id }) => {
  const dispatch = useDispatch();
  const checked = useSelector((state: RootState) => state.checked[id]?.checked);
  const isFavorited = useSelector((state: RootState) => state.favoriteChecked[id]);

  const [showCheckButton, setShowCheckButton] = React.useState<boolean>(!checked);
  // const [showCheckFavorite, setShowCheckFavorite] = React.useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const handleMakeChecked = () => {
    dispatch(setChecked({ id, value: true }));
    setShowCheckButton(false);
    dispatch(plus());
    const items = {
      title,
      image,
      price,
      id,
    };
    dispatch(addItem(items));
  };

  const handleScrollToTop = () => {
    setOpenInfo(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.body.style.overflow = 'hidden';
  };

  const handleClick = () => {
    handleScrollToTop();
  };

  const handleDeleteMark = () => {
    dispatch(setChecked({ id, value: false }));
    setShowCheckButton(true);
    dispatch(minus());
    dispatch(removeItem(id));
  };

  const handleAddFavorite = () => {
    dispatch(toggleFavoriteItem(id));
    const favoriteItems = {
      title,
      image,
      price,
      id,
    };
    dispatch(addItemFavorite(favoriteItems));
  };
  const handleDeleteFavorite = () => {
    dispatch(toggleFavoriteItem(id));
    dispatch(removeItemFavorite(id));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia onClick={handleClick} sx={{ height: 300 }} image={image} title="hello" />
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
          {showCheckButton && (
            <Button onClick={handleMakeChecked} size="small">
              <AddCircleOutlineOutlinedIcon sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }} />
            </Button>
          )}
          {!showCheckButton && (
            <Button onClick={handleDeleteMark} size="small">
              <CheckCircleOutlineIcon sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }} />
            </Button>
          )}
        </CardActions>
        <Button>
          {isFavorited && (
            <Button onClick={handleAddFavorite} size="small">
              <FavoriteIcon sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }} />
            </Button>
          )}
          {!isFavorited && (
            <Button onClick={handleDeleteFavorite} size="small">
              <CheckedFavorite sx={{ fontSize: '45px', color: 'rgb(224,129,19)' }} />
            </Button>
          )}
        </Button>
      </Card>
      {openInfo && <CardInfo id={id} title={title} price={price} image={image} />}
    </div>
  );
};

export default MediaCard;
