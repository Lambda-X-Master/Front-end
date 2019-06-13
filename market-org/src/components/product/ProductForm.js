import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { ProductContext } from "../context/product";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import './ProductForm.css'

const styles = theme => ({
    textColor: {
      borderWidth: "1px",
      color: "#ffffff !important",
      borderColor: "#026440 !important"
    },
    notchedOutline: {
      borderWidth: "3px",
      borderColor: 'rgba(180, 45, 90, 0.911) !important',
      color: "#ffffff",
      borderRadius: '25px'
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
      <div className='product-form'>
      <h1>Enter Your Stall Information:</h1>
      <form>
        <TextField className ='input-field-product'
          id="outlined-name"
          label="Title"
          type="search"
          name="title"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field-product'
          id="outlined-name"
          label="Description"
          type="search"
          name="description"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field-product'
          id="outlined-name"
          label="Price"
          type="search"
          name="price"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field-product'
          id="upload-button"
          accept="image/*"
          label="Upload Image"
          name="photoFile"
          type="file"
          //className={classes.textField}
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
          // InputLabelProps={{
          //   shrink: true,
          //   style: {
          //     color: "#026440"
          //   }
          // }}
        />
      </form>
      <div className='submit-section-product'>
      <Button className='submit-button-product'
        type="submit"
        // fullWidth
        //variant="contained"
        //color="secondary"
        //onClick={submitVendorProfile}
      >
        Submit
      </Button>
      </div>
      </div>
    </>
  );
};

// export default ProductForm;
export default withRouter(withStyles(styles)(ProductForm));
