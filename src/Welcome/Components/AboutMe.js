import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import PROFILE_IMG_NK from '../../Images/nk-profile-img.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
  gridItem: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
  imgRoundedCircle: {
    borderRadius: '50% !important',
  },
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  name: {
    marginTop: '-50px',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container className={classes.container}>
          <Grid container justify="center" spacing={2} className={classes.grid}>
            <Grid item xs={12} sm={12} md={6} classeName={classes.gridItem}>
              <div className={classes.profile}>
                <img src={PROFILE_IMG_NK} alt="..." className={imageClasses} />
                <div className={classes.name}>
                  <Typography
                    color="inherit"
                    align="center"
                    variant="h6"
                    marked="center"
                  >
                    Nitin Kaveriappa Udiyanda Muthanna
                  </Typography>
                  <Typography>I am what I am because of my Father!</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <div>
            <Grid
              container
              justify="center"
              spacing={2}
              className={classes.grid}
            >
              <Grid item xs={12} sm={12} md={4} classeName={classes.gridItem}>
                One
              </Grid>
              <Grid item xs={12} sm={12} md={4} classeName={classes.gridItem}>
                Two
              </Grid>
              <Grid item xs={12} sm={12} md={4} classeName={classes.gridItem}>
                Three
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
