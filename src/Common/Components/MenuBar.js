import React from 'react';
import {
  Fab,
  Link,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTop from './ScrollTop';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 25,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const MenuBar = () => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="#"
            >
              NK
            </Link>
            <div className={classes.right}></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div id="back-to-top-anchor" />
      <ScrollTop>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          className={classes.fab}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {/* <Container>
        <Box my={2}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container> */}
    </>
  );
};

export default MenuBar;
