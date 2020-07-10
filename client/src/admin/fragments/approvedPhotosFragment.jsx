import { addToFavourites, addToUnFavourites } from '../../api';
import React, { useState, useContext } from 'react';
import { ApprovedPhotosAdminContext } from '../../context/approvedPhotosAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import shortid from 'shortid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [state, setState] = useContext(ApprovedPhotosAdminContext);
  const [favourites, setFavourites] = useState(
    state.tiledata.map((tile) => {
      if (tile.trending === true) {
        return tile.id;
      }
    })
  );
  const [unfavourites, setUnFavourites] = useState([]);
  console.log(favourites);
  const handleClick = (id) => {
    setFavourites([...favourites, id]);
  };
  const handleClick1 = (fid) => {
    console.log('handle click 1' + favourites);
    setFavourites(favourites.filter((id) => id != fid));
    console.log(favourites);
  };

  {
    if (state.loading == true) {
      return <CircularProgress />;
    } else {
      return (
        <div
          className='card-container'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {state.tiledata.map((tile) => (
            <Card className={classes.root} key={tile.id}>
              <CardHeader
                avatar={
                  <Avatar aria-label='recipe' className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={tile.names}
                subheader={`price: ${tile.price}`}
              />
              <CardMedia
                className={classes.media}
                image={tile.images}
                title={`Location: ${tile.location}`}
              />
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {`Location: ${tile.location}`}
                  <br />
                  {`PUID: ${tile.puid}`}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  style={tile.trending ? { color: 'red' } : { color: '' }}
                  aria-label='add to favorites'
                  onClick={() => {
                    if (favourites.indexOf(tile.id) >= 0) {
                      addToUnFavourites(tile.id, tile.puid);
                      handleClick1(tile.id);
                    } else {
                      addToFavourites(tile.id, tile.puid);
                      handleClick(tile.id);
                    }
                  }}
                >
                  <FavoriteIcon
                    style={{
                      color: favourites.indexOf(tile.id) >= 0 ? 'red' : '',
                    }}
                  />
                </IconButton>
                {/* <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton> */}
                {/* <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </IconButton> */}
              </CardActions>
              {/* <Collapse in='expanded' timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse> */}
            </Card>
          ))}
        </div>
      );
    }
  }
}
