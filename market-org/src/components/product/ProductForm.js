import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { ProductContext } from "../context/product";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
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
    }
  });

const ProductForm = props => {
  const { classes } = props;

  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  
  return (
    <>
      Product form
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
        <TextField
          id="upload-button"
          accept="image/*"
          label="Upload Image"
          name="photoFile"
          type="file"
          className={classes.textField}
          onChange={e => setImage(e.target.value)}
        //   value={image}
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
        />
      </form>
    </>
  );
};

// export default ProductForm;
export default withRouter(withStyles(styles)(ProductForm));
