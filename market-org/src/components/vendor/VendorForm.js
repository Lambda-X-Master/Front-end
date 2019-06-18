import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import axios from "../../axios-instance";
import "./VendorForm.css";
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
      phone_number: phone,
      company_url: companyUrl
    };

    const token = localStorage.getItem("token");

    axios
      .post(
        `vendor/${VendorObj.firebase_id}`,
        { ...VendorObj },
        {
          "Content-Type": "application/json",
          headers: { Authorization: token }
        }
      )
      .then(res => {
        console.log("res:", res);
      })
      .catch(err => {
        console.log(err);
      });

    props.history.replace("/productForm");
  };

  return (
    <>
      <div className="vendor-form">
        <form>
          <TextField
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
          className="submit-button-vendor"
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={submitVendorProfile}
          className={classes.submit}
        >
          Submit your vendor info
        </Button>
      </div>
    </>
  );
};

// export default VendorForm;
export default withRouter(withStyles(styles)(VendorForm));
