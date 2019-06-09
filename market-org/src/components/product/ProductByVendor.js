import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
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

const ProductByVendor = props => {
  const { classes } = props;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const firebaseId = localStorage.getItem("firebaseId");
    axios
      .get(`http://localhost:5000/products/vendor/${firebaseId}`)
      .then(res => {
        console.log(res, "products by vendor Id");
        setProducts(res.data);
        // console.log(product);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const toMarkets = () => {
    props.history.push("/markets");
  };

  const toCart = () => {
    props.history.push("/carts");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography style={{ marginTop: "100px" }}>
          List of your products
        </Typography>

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              // onClick={toCart}
              color="inherit"
              style={{ backgroundColor: "#30cc32", margin: "10px" }}
            >
              Your cart
            </Button>
            <Button
              onClick={toMarkets}
              color="inherit"
              style={{ backgroundColor: "#30cc32", margin: "10px" }}
            >
              Markets
            </Button>
          </Toolbar>
        </AppBar>

        {products &&
          products.map(eachProduct => {
            return (
              <>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      component="p"
                      style={{ fontWeight: "bold", fontSize: "40px" }}
                    >
                      Your Product information
                    </Typography>
                    <Typography component="p">
                      Product Title: {eachProduct.title}
                    </Typography>
                    <Typography component="p">
                      Product Description: {eachProduct.description}
                    </Typography>
                    <Typography component="p">
                      Product price: {eachProduct.price}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <img
                      src={eachProduct.image}
                      alt="Vendor product"
                      className="productImage"
                    />
                  </CardContent>
                </Card>
              </>
            );
          })}
      </Container>
    </>
  );
};

export default withRouter(withStyles(styles)(ProductByVendor));
