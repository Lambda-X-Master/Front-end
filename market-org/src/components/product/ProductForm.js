import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { storage } from "../../firebase";

import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import './ProductForm.css'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

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





// const styles = theme => ({
//   newgroup: {
//     display: "flex",
//     width: "500px",
//     height: "500px",
//     margin: "0px auto",
//     marginTop: "200px",
//     justifyContent: "center",
//     fontWeight: "bold",
//     color: "#026440",
//     fontSize: "40px",
//     letterSpacing: "4px"
//   },
//   form: {
//     width: "110%",
//     height: "850px",
//     margin: "0 auto",
//     marginTop: "-240px"
//   },
//   textField: {
//     width: "330px"
//   },
//   textColor: {
//     borderWidth: "1px",
//     color: "#026440",
//     borderColor: "#026440 !important"
//   },
//   notchedOutline: {
//     borderWidth: "1px",
//     borderColor: "#026440 !important",
//     color: "#026440"
//   },
//   input: {
//     color: "#026440"
//   },
//   card: {
//     maxWidth: 800
//   },
//   media: {
//     height: 300
//   }
// });

const ProductForm = props => {
  const { classes } = props;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const firebaseId = localStorage.getItem("firebaseId");
    axios
      .get(`/vendor/${firebaseId}`)
      .then(res => {
        console.log(res, "vendor by Id");
        setVendorProfile(res.data);
        // console.log(vendorProfile);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const submitProductProfile = e => {
    e.preventDefault();

    const vendorId = localStorage.getItem("firebaseId");
    const token = localStorage.getItem("token");
    let currentProductName = "product-image-" + Date.now();
    let uploadImage = storage.ref(`images/${currentProductName}`).put(file);

    uploadImage.on(
      "state_changed",
      snapshot => {},
      error => {
        alert(error);
      },
      () => {
        storage
          .ref("images")
          .child(currentProductName)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setImage(url);

            const productObj = {
              vendors_id: vendorId,
              title: title,
              description: description,
              price: price,
              image: url
            };

            axios
              .post(`/products/vendor/${vendorId}`, {
                ...productObj
              },
              {
                "Content-Type": "application/json",
                headers: { Authorization: token }
              })
              .then(res => {
                console.log("product res post", res);
              })
              .catch(err => {
                console.log(err);
              });
          });
      }
    );
    props.history.replace("/productsByVendor");
  };

  const fileHandler = e => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className='product-form'>
      
      <Card className={classes.card}>
        {/* <CardContent> */}
          <Typography
            component="p"
            style={{ fontWeight: "bold", fontSize: "40px" }}
          >
            Your Vendor information
          </Typography>
          <Typography component="p">
            Vendor Company name: {vendorProfile.company_name}
          </Typography>
          <Typography component="p">
            Vendor full name: {vendorProfile.contact_fullname}
          </Typography>
          <Typography component="p">
            Vendor address: {vendorProfile.address}
          </Typography>
          <Typography component="p">
            Vendor City : {vendorProfile.city}
          </Typography>
          <Typography component="p">
            Vendor State: {vendorProfile.state}
          </Typography>
          <Typography component="p">
            Vendor Zip code: {vendorProfile.zip_code}
          </Typography>
          <Typography component="p">
            Vendor Phone number: {vendorProfile.phone_nunmber}
          </Typography>
          <Typography component="p">
            Vendor company url: {vendorProfile.company_url}
          </Typography>
          {vendorProfile.firebase_id}
        {/* </CardContent> */}
      </Card>

      
      <h1>Enter Your Product Information:</h1>
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
          name="image"
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
        onClick={submitProductProfile}
        //className={classes.submit}
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
