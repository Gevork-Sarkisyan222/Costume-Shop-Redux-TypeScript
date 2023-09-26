import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const ButtonAppBar: React.FC = () => {
  const count = useSelector((state: RootState) => state.count.count);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: 'linear-gradient(0deg, #ff8800 0%, #616161 100%)' }}
        position="static">
        <Toolbar>
          <a style={{ color: 'white' }} href="/">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Магазин лучших костюмов
          </Typography>
          <Link to="/Data">
            <Button color="inherit">
              <AccessibilityNewIcon style={{ color: 'white' }} />
            </Button>
          </Link>
          <Link style={{ color: 'white' }} to="/Favorite">
            <Button color="inherit">
              <BookmarksIcon />
            </Button>
          </Link>
          <Link style={{ color: 'white' }} to="/Cart">
            <Button color="inherit">
              <Badge badgeContent={count} color="warning">
                <ShoppingBasketIcon />
              </Badge>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
