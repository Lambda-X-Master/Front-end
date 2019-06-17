import React, { useState, useEffect } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  AppBar,
  Toolbar
} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import axios from "../../axios-instance";

const styles = theme => ({
  root: {
    display: "flex",
    margin: "0 auto"
  },
  appBar: {
    //   marginLeft: drawerWidth,
    backgroundColor: "lightgreen",
    zIndex: theme.zIndex.drawer + 1
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },

  text: {
    color: "#008BC9",
    fontWeight: "500"
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const VendorsPerMarket = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  const [perMarket, setPerMarket] = useState({});
  const [vendorsPerMarket, setVendorsPerMarket] = useState([]);

  useEffect(() => {
    axios
      .get(`vendor/market/${firebase_id}/vendor`)
      .then(res => {
        console.log(res, "Market by firbaseId and its vendors");
        setPerMarket(res.data);
        setVendorsPerMarket(res.data.vendors);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Typography
        component="p"
        style={{ fontWeight: "bold", fontSize: "40px" }}
      >
        Our Market Information
      </Typography>
      <Container
        maxWidth="lg"
        // key={aPublicVendor.firebase_id}
        style={{ marginTop: "10px" }}
      >
        <Card className={classes.card} >
          <CardContent >
            <Typography component="p">
              Market Name: {perMarket.market_name}
            </Typography>
            <Typography component="p">Address: {perMarket.address}</Typography>
            <Typography component="p">City: {perMarket.city}</Typography>
            <Typography component="p">State: {perMarket.state}</Typography>
            <Typography component="p">Zip code: {perMarket.zipcode}</Typography>
            <Typography component="p">
              Contact first name: {perMarket.contact_first_name}
            </Typography>
            <Typography component="p">
              Contact Last name: {perMarket.contact_last_name}
            </Typography>
            <Typography component="p">
              Phone number: {perMarket.phone_number}
            </Typography>
          </CardContent>
          <CardContent />
          <Link
            to={{
              pathname: "/stalls/",
              search: `?firebase_id=${firebase_id}`,
              state: {
                firebase_id: firebase_id,
                market_name: perMarket.market_name
              }
            }}
          >
            Rent a stall from us
          </Link>
        </Card>
        <Typography
          component="p"
          style={{ fontWeight: "bold", fontSize: "40px", marginTop: "30px" }}
        >
          Our Vendors
        </Typography>

        {vendorsPerMarket &&
          vendorsPerMarket.map(eachVendor => {
            return (
              <>
                <Card className={classes.card} key={eachVendor.firebase_id} style={{ margin: "20px"}}>
                  <CardContent>
                    <Typography component="p">
                      Company: {eachVendor.company_name}
                    </Typography>
                    <Typography component="p">
                      Full Name: {eachVendor.contact_fullname}
                    </Typography>
                    <Typography component="p">
                      Address: {eachVendor.address}
                    </Typography>
                    <Typography component="p">
                      City: {eachVendor.city}
                    </Typography>
                    <Typography component="p">
                      State: {eachVendor.state}
                    </Typography>
                    <Typography component="p">
                      Zip Code: {eachVendor.zip_code}
                    </Typography>
                    <Typography component="p">
                      Phone: {eachVendor.phone_number}
                    </Typography>
                    <Typography component="p">
                      Company website: {eachVendor.company_url}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
      </Container>
    </>
  );
};

export default withRouter(withStyles(styles)(VendorsPerMarket));

// export default VendorsPerMarket
