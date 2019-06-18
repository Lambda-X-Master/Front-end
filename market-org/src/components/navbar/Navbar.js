import React, { useContext } from "react";
import { NavLink  } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from "@material-ui/core/Modal";
import SignIn from "../login/SignIn";
import SignUp from "../register/SignUp";
import Expand from '@material-ui/icons/ExpandMore';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Profile from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import { auth } from "../../firebase";
import { Route, withRouter } from "react-router-dom";
import axios from '../../axios-instance';

import { AuthContext } from "../authContext/authState";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
  },
 
  title: {
    flexGrow: 1,
  },

  appBar: { 
    backgroundColor: '#38212E',
  },

  link: {
    color: 'white',
    fontSize: '1.2rem',
    margin: "10px",
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '1px solid #30cc32'
    }
    
  },

  icons: {
    color: 'white',
    fontSize: '1.2rem',
    // margin: "10px",
    cursor: 'pointer',
  },

  shoppingCart: {
    // paddingLeft: '1rem',
    // borderLeft: '1px solid #30cc32'
  },
  // profile: {

  // }

  button: {
    // backgroundColor: "#30cc32", 
    margin: "10px",
    // '&:hover': {
    //   // textDecoration: 'underline',
    //   borderBottom: '1.2px solid #30cc32',
    //   padding: '0'
    //   // color: '#30cc32'
    // }
  },

  closed: {
    display: 'none'
  },

  menuItem: {
    color: 'white'
  },

  menuNav: {
    marginTop: '2rem',
   
    // background: '#b42d5ae8',
    // color: 'white'
    // border: '1px solid red',
  }
}));

const StyledMenu = withStyles({
  paper: {

    marginTop: '3rem',
    backgroundColor: '#b42d5ae8'
  },

  close: {
    display: 'none'
  }
})(props => (
  <Menu
    elevation={0}
    // getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
    
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: 'white'
      },
    },
  },

  
}))(MenuItem);

function ButtonAppBar(props) {
  const [open, setOpen] = React.useState(false);
  const [openReg, setOpenReg] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const firebaseId = localStorage.getItem('firebaseId');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = ()  => {
    setAnchorEl(null);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleRegOpen = () => {
    setOpenReg(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleRegClose = () => {
    setOpenReg(false);
  };

  const toHome = () => {
    props.history.push('/')
  }

  const routetoCreate = () => {
    props.history.push("/create-market");
  };

  const toAllVendors = () => {
    props.history.push("/allVendors");
  };

  const toPrivateVendorProfile = () => {
    
    props.history.push(`/oneVendorPrivate/${firebaseId}`);
  };

  const toAllMarkets = () => {
    props.history.push('/markets')
  }

  const toCart = () => {
    let firebase_id = localStorage.getItem('firebaseId')
      props.history.push(`cart/${firebase_id}`)
  }

  const register = () => {
    props.history.push("/signup");
  };

  const login = () => {
    props.history.push('/signin')
  }
  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  };

//   const getCart = () => {
//       console.log('click')
//     let firebase_id = localStorage.getItem('firebaseId')
//     console.log(firebase_id, 'from ger cart')
//     axios.get(`/cart/${firebase_id}`)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//   }
  const { currentUser } = useContext(AuthContext);
console.log({currentUser}, 'currentuser')
  const classes = useStyles();
  // const menuClasses = ()
  const user_type = localStorage.getItem('userTypes')
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} />
            <Typography variant="h6"  className={classes.title}>
                <Link onClick={toHome} className={classes.link} underline='none'>Home</Link>
            </Typography>
          {/* {currentUser ? ( */}
            <>
            
            <Typography ariant="h6"  className={classes.title}>
                <Link 
                    className={classes.link}  
                    underline='none'  
                    aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick}
                    color="inherit"
                    variant="contained"
                  >
                   Markets
                  <IconButton
                      // edge="end"
                      aria-controls="simple-menu" 
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="simple-menu"
                    >
                      <Expand />
                    </IconButton>
                </Link>
              </Typography>
         
              <StyledMenu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    // className={classes.menuNav}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
              >         
                <StyledMenuItem className={classes.menuItem} onClick={handleRegOpen}>Register A Market</StyledMenuItem>
                <StyledMenuItem className={classes.menuItem} onClick={toAllMarkets}>View All Markets</StyledMenuItem>
                <StyledMenuItem className={classes.menuItem} onClick={handleClose}>More Info</StyledMenuItem>
            </StyledMenu>
                          
          <Typography ariant="h6"  className={classes.title}>
             <Link className={classes.link} onClick={handleClick}  underline='none'>
               Vendors
               <IconButton
                  // edge="end"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label='vendors-menu'
                >
                      <Expand />
                </IconButton>
              </Link> 
              <StyledMenu
            id="vendors-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
           >         
            <StyledMenuItem className={classes.menuItem} onClick={handleRegOpen}>Become A Vendor</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={toAllVendors}>View All Vendors</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={handleClose}>More Info</StyledMenuItem>
          </StyledMenu>
          </Typography>
         
          <Typography ariant="h6"  className={classes.title}>
              <Link className={classes.link}  underline='none'>About</Link>
          </Typography>

          <Typography ariant="h6"  className={classes.title}>
            <Link className={classes.link}  underline='none'>Contact Us</Link>
          </Typography>

          <Typography ariant="h6"  className={classes.title} >
              <Link 
                // className={classes.link}
                color="inherit"
                onClick={register}
                className={currentUser ? classes.closed : classes.link }
                underline='none'
              >
                  Sign Up
              </Link>
          </Typography>

          <Typography ariant="h6"  className={classes.title}>
            <Link 
                className={classes.link}
                color="inherit"
                onClick={currentUser ? logout : login}
                underline='none'
              >
               {currentUser ? 'Logout' : 'Login'}
            </Link>
          </Typography>
          
          <Typography ariant="h6"  className={user_type === 'vendor' ? classes.title : classes.closed}>
            <IconButton
              edge="end"
              className={classes.icons}
              color="inherit"
              aria-label="Shopping cart"
            >
              <ShoppingCart onClick={toCart} className={classes.shoppingCart}/>
            </IconButton>
          </Typography>
          <Typography ariant="h6"  className={ currentUser ? classes.title : classes.closed}>
            <IconButton
              edge="end"
              className={classes.icons}
              color="inherit"
              aria-label="profile"
              // onClick={handleClick}
            >
               
              <Profile />
            </IconButton>
            <IconButton
            onClick={handleClick}
                      // edge="end"
              // className={classes.profile}
              color="inherit"
              aria-label='profile'
            >
              <Expand />
            </IconButton>
          </Typography>
          <StyledMenu
            id="profile"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={ currentUser ? null : classes.closed}
           >         
           <StyledMenuItem className={classes.menuItem} onClick={handleRegOpen}>View Profile</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={handleRegOpen}>{user_type === 'vendor' ? 'My Stalls' : 'My Orders'}</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={toAllVendors}>Account Settings</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={logout}>Logout</StyledMenuItem>
          </StyledMenu>
              {/* <Button
                color="inherit"
                onClick={toHome}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Home
              </Button> */}
              {/* <button onClick={props.history.push('/cart/:id')}>cart</button> */}
              {/* <Button
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit"
                  // onClick={toAllMarkets}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                  Markets  <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="simple-menu"
                    >
                        <Expand />
                    </IconButton>
              </Button> */}
  
              {/* <Button
                color="inherit"
                onClick={toAllVendors}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Vendors
              </Button>
              <Button
                color="inherit"
                // onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                About
              </Button>
              <Button
                color="inherit"
                // onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Contact Us
              </Button> */}
              
              {/* <Button
                color="inherit"
                onClick={routetoCreate}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Register A Market
              </Button> */}
            </>
          {/* ) : ( */}
            <>
              {/* <Button
                color="inherit"
                onClick={handleRegOpen}
                className={currentUser ? classes.closed : classes.button }
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Sign Up
              </Button> */}

              {/* <Button
                color="inherit"
                onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                {currentUser ? 'Logout' : 'Login'}
              </Button> */}
              {/* <Button
                color="inherit"
                onClick={handleOpen}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Log In
              </Button> */}
            </>
          {/* )} */}

          <Modal
          className={currentUser ? classes.closed : null}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <SignIn />
          </Modal>


          <Modal
          className={currentUser ? classes.closed : null}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openReg}
            onClose={handleRegClose}
          >
            <SignUp />
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
