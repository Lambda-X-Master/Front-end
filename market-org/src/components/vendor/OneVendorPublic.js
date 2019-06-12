import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import ProductByVendorCard from "../product/ProductByVendorCard";

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

import axios from "axios";

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

const OneVendorPublic = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  const [aPublicVendor, setAPublicVendor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/vendor/${firebase_id}`)
      .then(res => {
        console.log(res, "vendor by Id");
        setAPublicVendor(res.data);
        // console.log(aPublicVendor);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <Container maxWidth="lg" key={aPublicVendor.firebase_id} style={{ marginTop: "50px" }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Company: {aPublicVendor.company_name}
            </Typography>
            <Typography component="p">
              Full Name: {aPublicVendor.contact_fullname}
            </Typography>
            <Typography component="p">
              Address: {aPublicVendor.address}
            </Typography>
            <Typography component="p">City: {aPublicVendor.city}</Typography>
            <Typography component="p">State: {aPublicVendor.state}</Typography>
            <Typography component="p">
              Zip Code: {aPublicVendor.zip_code}
            </Typography>
            <Typography component="p">
              Phone: {aPublicVendor.phone_number}
            </Typography>
            <Typography component="p">
              Company website: {aPublicVendor.company_url}
            </Typography>
            <Link to={`/oneVendorPublic/${aPublicVendor.firebase_id}/product`}>
                      <Typography component="p">View my products</Typography>
                    </Link>
          </CardContent>
          <CardContent />
        </Card>
      </Container>
      <Switch>
    <Route
      path="/oneVendorPublic/:firebase_id/product"
      render={props => (
        <ProductByVendorCard {...props} vendor={aPublicVendor} />
      )}
    />
  </Switch>
    </>
  );
};

export default withRouter(withStyles(styles)(OneVendorPublic));
