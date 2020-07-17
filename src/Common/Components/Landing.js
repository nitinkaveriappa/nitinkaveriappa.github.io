import React from 'react';
import Parallax from './Parallax';
import BG_IMG_NK from '../../Images/nk-bg-img.jpeg';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     color: theme.palette.common.white,
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(14),
//     display: 'flex',
//     // flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   toolbar: {
//     justifyContent: 'space-between',
//   },
//   left: {
//     flex: 1,
//   },
//   right: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
// }));

const Landing = () => {
  // const classes = useStyles();

  return (
    <>
      <Parallax image={BG_IMG_NK}>
        {/* <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h5" marked="center">
          Hi, My name is Nitin Kaveriappa
          <Typography
            color="inherit"
            align="center"
            variant="h6"
            marked="center"
          >
            (Pronounced as NI-thin kuh-VE-ree-uh-puh)
          </Typography>
        </Typography>
      </Container> */}
      </Parallax>
    </>
  );
};
export default Landing;
