import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import UpdateVendorForm from "./UpdateVendorForm";

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

import axios from "../../axios-instance";

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

const OneVendorPrivate = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  const [aPrivateVendor, setAPrivateVendor] = useState([]);
  const [delVendor, setDelVendor] = useState('');

  useEffect(() => {
    axios
      .get(`vendor/${firebase_id}`)
      .then(res => {
        console.log(res, "vendor by Id");
        setAPrivateVendor(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
      console.log(delVendor, 'Deleted Vendor')
  }, []);

  const deleteVendor = (e, vendorId) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .delete(`vendor/${vendorId}`, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        setDelVendor(res.data);
        props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        key={aPrivateVendor.firebase_id}
        style={{ marginTop: "50px" }}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Company: {aPrivateVendor.company_name}
            </Typography>
            <Typography component="p">
              Full Name: {aPrivateVendor.contact_fullname}
            </Typography>
            <Typography component="p">
              Address: {aPrivateVendor.address}
            </Typography>
            <Typography component="p">City: {aPrivateVendor.city}</Typography>
            <Typography component="p">State: {aPrivateVendor.state}</Typography>
            <Typography component="p">
              Zip Code: {aPrivateVendor.zip_code}
            </Typography>
            <Typography component="p">
              Phone: {aPrivateVendor.phone_number}
            </Typography>
            <Typography component="p">
              Company website: {aPrivateVendor.company_url}
            </Typography>
            <Button
              onClick={e => deleteVendor(e, firebase_id)}
              color="inherit"
              style={{ backgroundColor: "#30cc32", margin: "10px" }}
            >
              Delete My Profile
            </Button>

            <Link to={`/oneVendorPrivate/${firebase_id}/editForm`}>
              <Typography component="p">Edit My Profile</Typography>
            </Link>
          </CardContent>
          <CardContent />
        </Card>
      </Container>

      <Switch>
        <Route
          path="/oneVendorPrivate/:firebase_id/editForm"
          render={props => (
            <UpdateVendorForm {...props} aPrivateVendor={aPrivateVendor} />
          )}
        />
      </Switch>
    </>
  );
};

export default withRouter(withStyles(styles)(OneVendorPrivate));
