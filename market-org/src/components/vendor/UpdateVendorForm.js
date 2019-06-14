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

const UpdateVendorForm = props => {
  const { classes } = props;
  const { firebase_id } = props.match.params;

  const [companyName, setCompanyName] = useState(props.aPrivateVendor.company_name);
  const [fullName, setFullName] = useState(props.aPrivateVendor.contact_fullname);
  const [address, setAddress] = useState(props.aPrivateVendor.address);
  const [city, setCity] = useState(props.aPrivateVendor.city);
  const [state, setState] = useState(props.aPrivateVendor.state);
  const [zipcode, setZipcode] = useState(props.aPrivateVendor.zip_code);
  const [phone, setPhone] = useState(props.aPrivateVendor.phone_number);
  const [companyUrl, setCompanyUrl] = useState(props.aPrivateVendor.company_url);

  const [editVendor, setEditedVendor] = useState(props.aPrivateVendor);

  const updateVendor = (e, id, updatedVendor) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");

    updatedVendor = {
        firebase_id: firebase_id,        
        company_name: companyName,
        contact_fullname: fullName,
        address,
        city,
        state,
        zip_code: zipcode,
        phone_number: phone,
        company_url: companyUrl
      };

    axios
    .put(`http://localhost:5000/vendor/${firebase_id}`, updatedVendor, {
      "Content-Type": "application/json",
      headers: { Authorization: token }
    })
    .then(res => {
      console.log("product res put", res);
      
      setEditedVendor(res.data)
    })
    .catch(err => {
      console.log(err);
    });

    props.history.push("/productForm");
  }


  return (
    <>
          <form>
        <TextField
          id="outlined-name"
          label="Company Name"
          type="search"
          name="companyName"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setCompanyName(e.target.value)}
            // value={props.aPrivateVendor.company_name}
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
          label="Full Name"
          type="search"
          name="fullName"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setFullName(e.target.value)}
          //   value={}
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
          label="Address"
          type="search"
          name="address"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setAddress(e.target.value)}
          //   value={}
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
          label="City"
          type="search"
          name="city"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setCity(e.target.value)}
          //   value={}
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
          label="State"
          type="search"
          name="state"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setState(e.target.value)}
          //   value={}
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
          label="Zipcode"
          type="search"
          name="zipcode"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setZipcode(e.target.value)}
          //   value={}
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
          label="Phone number"
          type="search"
          name="phone"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setPhone(e.target.value)}
          //   value={}
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
          label="Company URL"
          type="search"
          name="companyUrl"
          style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          className={classes.textField}
          onChange={e => setCompanyUrl(e.target.value)}
          //   value={}
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
      </form>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={e => updateVendor(e, firebase_id, editVendor)}
        className={classes.submit}
      >
        Update Your Profile
      </Button>
    </>
  ) 
};

export default withRouter(withStyles(styles)(UpdateVendorForm));
