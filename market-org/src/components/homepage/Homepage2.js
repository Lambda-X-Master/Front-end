import React, { useEffect, useContext, useState } from "react";
//import styles
import "./Homepage.css";
// import Navbar from '../navbar/Navbar';
import Searchbar from "../navbar/Searchbar";
import { AuthContext } from "../authContext/authState";
import { Container, Grid, Paper, makeStyles, Button } from "@material-ui/core";

// import VendorForm from '../vendor/VendorForm';
import axios from "../../axios-instance";
import logo from "../../images/logo.png";
import market1 from '../../images/market1.jpg'

const Homepage2 = props => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .get("/users", currentUser)
      .then(res => {
        console.log("resdata:", res.data);
        setUsers(res.data);
      })
      .catch(err => {
        console.log("err", err.message);
      });
  }, []);

  console.log("curr", currentUser);

  const vendorFormPage = () => {
    props.history.push(`/vendor`);
  };

  return (
    <React.Fragment>
      <section className="home-page">
        {/* <div className='search-bar'>
          <Searchbar />
        </div> */}
        {currentUser ? (
          <div className="logged-in-view">
            <Button className="button">Create Market profile</Button>
            <Button className="button" onClick={vendorFormPage}>
              Create vendor Profile
            </Button>
          </div>
        ) : (
          <div className="home-wrapper">
            <div className="welcome">
              <div>
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="message">
                  <h1>Welcome to Market Organizer</h1>
                </div>
              </div>
            </div>
            <div class="spotlight">
              
                <div class="info-header-section1">
                  <h3> Market Organizer Allows .....</h3>
                  Are you a small market that want to advertise online to show
                  sellers what your location has to offer?
                </div>
                <div class="img-row">
                  <img src="" />
                  <img src="" />
                  <img src="" />
                </div>
            </div>
            <div className='row-stagger-wrapper-left'>
            <div class="section-one">
                <div id="pic">
                  {/* <iframe
                    title='movie'
                    class="iframe"
                    src="https://www.youtube.com/embed/o4ijHIRaGXc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  /> */}
                  <img src={market1} alt="market-image-1" />
                </div>
                <div id="content" class="content-1">
        
                  <a href="">
                    <button>Register Today</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='row-stagger-wrapper-right'>
            <div class="section-one">
                
                <div id="content" class="content-1">
        
                  <a href="">
                    <button>Register Today</button>
                  </a>
                </div>
                <div id="pic">
                  <img src={market1} alt="market-image-1" />
                </div>
              </div>

            </div>
            <div className='row-stagger-wrapper-left'>
            <div class="section-one">
                <div id="pic">
                  {/* <iframe
                    title='movie'
                    class="iframe"
                    src="https://www.youtube.com/embed/o4ijHIRaGXc"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  /> */}
                  <img src={market1} alt="market-image-1" />
                </div>
                <div id="content" class="content-1">
        
                  <a href="">
                    <button>Register Today</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </section>
    </React.Fragment>
  );
};

export default Homepage2;
