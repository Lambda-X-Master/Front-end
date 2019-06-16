import React, { useState, useEffect, useContext } from "react";

import { Link, withRouter } from "react-router-dom";

import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";

import axios from "../../axios-instance";

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

// public page of products by Vendor

const ProductByVendorCard = props => {
  const { classes } = props;
  const { firebase_id } = props.match.params;

  console.log(props.vendor);

  // const eachVendor = props.vendor.find(
  //   aVendor => `${aVendor.firebase_id}` === firebase_id
  // );

  // console.log("rendering Item: ", props.vendor, eachVendor);
  console.log("rendering Item: ", props.vendor);
  // if (!eachVendor) {
  //   return <h3>Loading items...</h3>;
  // }
  const [productsByVendor, setProductsByVendor] = useState([]);

  useEffect(() => {
    axios
      .get(`products/vendor/${firebase_id}`)
      // .get(`http://localhost:5000/products/vendor/${props.location.state.firebase_id}`)
      .then(res => {
        console.log(res, "product by vendor Id");
        setProductsByVendor(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {" "}
      <Typography
        component="p"
        style={{ fontWeight: "bold", fontSize: "40px" }}
      >
        Products I sell
      </Typography>
      {productsByVendor &&
        productsByVendor.map(eachVendorProduct => {
          return (
            <>
              <Card className={classes.card}>
                <CardContent>
                  <Typography component="p">
                    Product Title: {eachVendorProduct.title}
                  </Typography>
                  <Typography component="p">
                    Product Description: {eachVendorProduct.description}
                  </Typography>
                  <Typography component="p">
                    Product price: ${eachVendorProduct.price}
                  </Typography>
                </CardContent>
                <CardContent>
                  <img
                    src={eachVendorProduct.image}
                    alt="Vendor product"
                    className="productImage"
                  />
                </CardContent>
              </Card>
            </>
          );
        })}
    </>
  );
};

export default withRouter(withStyles(styles)(ProductByVendorCard));