import React, { useState, useEffect, useContext } from "react";
import { Route, Link, withRouter, Switch } from "react-router-dom";
import { storage } from "../../firebase";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";

import UpdateProductForm from "./UpdateProductForm";
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
  const [delProduct, setDelProduct] = useState(0);
  const [editProduct, setEditProduct] = useState({});

  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

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
    console.log(delProduct);

    // return (
    //   deleteProduct()
    // )
  }, []);

  const toMarkets = () => {
    props.history.push("/markets");
  };

  const toCart = () => {
    props.history.push("/carts");
  };
  console.log("vendor profile in product", vendorProfile);

  const backToProductForm = () => {
    props.history.push("/productForm");
  };

  const backToHome = () => {
    props.history.push("/");
  };

  const deleteProduct = (e, productId) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:5000/products/${productId}`, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        setDelProduct(res.data);
        // props.history.replace('/productsByVendor');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const setProductUpdateForm = (e, updatedProduct) => {
    e.preventDefault();
    // setActiveItem(updatedProduct);
    props.history.push("/updateProductForm");
  };

  // const updateProduct = (id, updatedProduct) => {
  //   // e.preventDefault();

  //   const vendorId = localStorage.getItem("firebaseId");
  //   const token = localStorage.getItem("token");
  //   let currentProductName = "product-image-" + Date.now();
  //   let uploadImage = storage.ref(`images/${currentProductName}`).put(file);

  //   uploadImage.on(
  //     "state_changed",
  //     snapshot => {},
  //     error => {
  //       alert(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(currentProductName)
  //         .getDownloadURL()
  //         .then(url => {
  //           console.log(url);
  //           setImage(url);

  //           // const productObj = {
  //           //   vendors_id: vendorId,
  //           //   title: title,
  //           //   description: description,
  //           //   price: price,
  //           //   image: url
  //           // };

  //           axios
  //             .put(`http://localhost:5000/products/${id}`, updatedProduct, {
  //               "Content-Type": "application/json",
  //               headers: { Authorization: token }
  //             })
  //             .then(res => {
  //               console.log("product res put", res);
  //               setEditProduct(res.data)
  //             })
  //             .catch(err => {
  //               console.log(err);
  //             });
  //         });
  //     }
  //   );
  //   props.history.push("/productsByVendor");
  // };

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          component="p"
          style={{ fontWeight: "bold", fontSize: "40px" }}
        >
          Your Product information
        </Typography>

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={backToHome}
              color="inherit"
              style={{ backgroundColor: "#30cc32", margin: "10px" }}
            >
              Home
            </Button>
            <Button
              onClick={backToProductForm}
              color="inherit"
              style={{ backgroundColor: "#30cc32", margin: "10px" }}
            >
              Add more products
            </Button>
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
                    <Typography component="p">
                      Product Title: {eachProduct.title}
                    </Typography>
                    <Typography component="p">
                      Product Description: {eachProduct.description}
                    </Typography>
                    <Typography component="p">
                      Product price: ${eachProduct.price}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <img
                      src={eachProduct.image}
                      alt="Vendor product"
                      className="productImage"
                    />
                    testing global context: {vendorProfile.company_name}
                  </CardContent>
                  <Button
                    onClick={e => deleteProduct(e, eachProduct.id)}
                    color="inherit"
                    style={{ backgroundColor: "#30cc32", margin: "10px" }}
                  >
                    Delete Product
                  </Button>

                  {/* <Button
                    onClick={e => setProductUpdateForm(e, eachProduct)}
                    color="inherit"
                    style={{ backgroundColor: "#30cc32", margin: "10px" }}
                  >
                    Edit Product
                  </Button> */}

                  <Link
                    to={`productsByVendor/${eachProduct.id}/updateProductForm`}
                  >
                    <Typography
                      color="inherit"
                      style={{ backgroundColor: "#30cc32", margin: "10px" }}
                    >
                      Edit Product
                    </Typography>
                  </Link>
                </Card>
                <Switch>
        <Route
          path="/productsByVendor/:id/updateProductForm"
          render={props => (
            <UpdateProductForm {...props} eachProduct={eachProduct} />
          )}
        />
      </Switch>
              </>
              
            );
          })}
      </Container>

    </>
  );
};

export default withRouter(withStyles(styles)(ProductByVendor));
