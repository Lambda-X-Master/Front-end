import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import axios from "../../axios-instance";
import './VendorForm.css';

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
 });

const VendorForm = props => {
  const { classes } = props;
  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const { currentUser } = useContext(AuthContext);

  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");

  const submitVendorProfile = () => {
    const VendorObj = {
      firebase_id: localStorage.getItem("firebaseId"),
      company_name: companyName,
      contact_fullname: fullName,
      address,
      city,
      state,
      zip_code: zipcode,
      phone_nunmber: phone,
      company_url: companyUrl
    };

    axios
      .post("/vendor", { ...VendorObj })
      .then(res => {
        console.log("res:", res);

      })
      .catch(err => {
        console.log(err);
      });
    props.history.push("/productForm");
  };
  return (
    <>
      <div className='vendor-form'>
      <h1>Register A Vendor:</h1>
      <form>
        <TextField className ='input-field'
          id="outlined-name"
          label="Company Name"
          type="search"
          name="companyName"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
          onChange={e => setCompanyName(e.target.value)}
          //   value={}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="Full Name"
          type="search"
          name="fullName"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="Address"
          type="search"
          name="address"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="City"
          type="search"
          name="city"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="State"
          type="search"
          name="state"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="Zipcode"
          type="search"
          name="zipcode"
          //style={{ width: "450px" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="Phone number"
          type="search"
          name="phone"
          //style={{ width: "40%" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
        <TextField className ='input-field'
          id="outlined-name"
          label="Company URL"
          type="search"
          name="companyUrl"
          //style={{ width: "40%" }}
          multiline={false}
          rows={2}
          rowsMax={2}
          //className={classes.textField}
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
        />
      </form>
      <div className='submit-section-vendor'>
      <Button className='submit-button-vendor'
        type="submit"
        // fullWidth
        // variant="contained"
        color="secondary"
        onClick={submitVendorProfile}
        //className={classes.submit}
      >
        Submit
      </Button>
      </div>
      </div>
    </>
  );
};

// export default VendorForm;

export default withRouter(withStyles(styles)(VendorForm));
