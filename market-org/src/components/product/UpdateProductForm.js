import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import { storage } from "../../firebase";

import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import axios from "axios";

const styles = theme => ({
  newgroup: {
    display: "flex",
    width: "500px",
    height: "500px",
    margin: "0px auto",
    marginTop: "200px",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#026440",
    fontSize: "40px",
    letterSpacing: "4px"
  },
  form: {
    width: "110%",
    height: "850px",
    margin: "0 auto",
    marginTop: "-240px"
  },
  textField: {
    width: "330px"
  },
  textColor: {
    borderWidth: "1px",
    color: "#026440",
    borderColor: "#026440 !important"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#026440 !important",
    color: "#026440"
  },
  input: {
    color: "#026440"
  },
  card: {
    maxWidth: 800
  },
  media: {
    height: 300
  }
});

const UpdateProductForm = props => {
  const { classes } = props;
  const { id } = props.match.params;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState(props.eachProduct.title);
  const [description, setDescription] = useState(props.eachProduct.description);
  const [price, setPrice] = useState(props.eachProduct.price);
  const [image, setImage] = useState(props.eachProduct.image);
  // const [file, setFile] = useState(props.eachProduct.file);

  const [editProduct, setEditedProduct] = useState(props.eachProduct);

  // const [currentProduct, setCurrentProduct] = useState([]);

  const updateProduct = (e, id, updatedProduct) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");
    // let currentProductName = "product-image-" + Date.now();
    // let uploadImage = storage.ref(`images/${currentProductName}`).put(file);

    // uploadImage.on(
    //   "state_changed",
    //   snapshot => {},
    //   error => {
    //     alert(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(currentProductName)
    //       .getDownloadURL()
    //       .then(url => {
    //         console.log(url);
    //         setImage(url);

            updatedProduct = {
              // vendors_id: vendorId,
              title: title,
              description: description,
              price: price,
              // image: url
            };

            axios
              .put(`http://localhost:5000/products/${id}`, updatedProduct, {
                "Content-Type": "application/json",
                headers: { Authorization: token }
              })
              .then(res => {
                console.log("product res put", res);
                
                setEditedProduct(res.data)
              })
              .catch(err => {
                console.log(err);
              });
          // });
      // }
    // );
    props.history.push("/productsByVendor");
  };

  // const fileHandler = e => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <>
      <Typography component="p">Update your product here:</Typography>
      <Typography component="p">
        Global product context check: {product.id}
      </Typography>
      <Typography component="p">params check: {id}</Typography>

      <form>
        <TextField
          id="outlined-name"
          label="Title"
          type="search"
          name="title"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setTitle(e.target.value)}
          value={title}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
          InputLabelProps={{
            style: {
              color: "#026440"
            }
          }}
        />
        <TextField
          id="outlined-name"
          label="Description"
          type="search"
          name="description"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setDescription(e.target.value)}
          value={description}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
          InputLabelProps={{
            style: {
              color: "#026440"
            }
          }}
        />
        <TextField
          id="outlined-name"
          label="Price"
          type="search"
          name="price"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setPrice(e.target.value)}
          value={price}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
          InputLabelProps={{
            style: {
              color: "#026440"
            }
          }}
        />
        {/* <TextField
          id="upload-button"
          accept="image/*"
          label="Upload Image"
          name="image"
          type="file"
          className={classes.textField}
          onChange={e => fileHandler(e)}
          value={image}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
          InputLabelProps={{
            shrink: true,
            style: {
              color: "#026440"
            }
          }}
        /> */}
      </form>
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={e => updateProduct(e, id, editProduct)}
        className={classes.submit}
      >
        Update your product
      </Button>
    </>
  );
};

export default withRouter(withStyles(styles)(UpdateProductForm));
