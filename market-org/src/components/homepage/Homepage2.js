import React, { useEffect, useContext, useState } from 'react';
//import styles
import './Homepage.css'
// import Navbar from '../navbar/Navbar';
import Searchbar from '../navbar/Searchbar';
import { AuthContext } from '../authContext/authState';
import { Container, Grid, Paper, makeStyles, Button } from "@material-ui/core";

// import VendorForm from '../vendor/VendorForm';
import axios from '../../axios-instance';
import logo from "../../images/logo.png";



const Homepage2 = props => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
    axios
      .get("/users", currentUser)
      .then(res => {
        console.log("resdata:",res.data);
        setUsers(res.data);
      })
      .catch(err => {
        console.log("err",err.message);
      });
  }, []);

  console.log("curr", currentUser);

  const vendorFormPage = () => {
  props.history.push(`/vendor`);
  };

  return (
    <React.Fragment>
        <section className='home-wrapper'>
        {/* <div className='search-bar'>
          <Searchbar />
        </div> */}
        {currentUser ? (
          <div className='logged-in-view'>
            <Button className='button'>Create Market profile</Button>
            <Button className='button' onClick={vendorFormPage}>Create vendor Profile</Button>
            {users &&
              users.map(user => {
                return (
                  <>
                    <div key={user.id}>{user.email}</div>
                  </>
                );
              })}
          </div>
        ) : (
           <div className='welcome'>
            <img src={logo} alt='logo'/>
          <h1>Welcome to Market Organizer</h1>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};


export default Homepage2;
