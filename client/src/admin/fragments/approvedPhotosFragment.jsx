import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function AdvancedGridList() {
  const [tileData, setTileData] = useState([]);
  const classes = useStyles();

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/approved-photos'
      )
      .then(function (response) {
        return response;
      });
    const tileData = response.data;
    console.log(tileData);
    setTileData(tileData);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        className={classes.gridList}
        style={{ width: '90vw', height: '90vh' }}
      >
        <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'>December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.images}>
            <img
              src={tile.images}
              alt={tile.names}
              style={{ objectFit: 'cover' }}
            />
            <GridListTileBar
              title={tile.names}
              subtitle={<span>Price: {tile.price}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.names}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
