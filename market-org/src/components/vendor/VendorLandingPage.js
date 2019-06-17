import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import { AuthContext } from "../authContext/authState";

// import ProductByVendorCard from "../product/ProductByVendorCard";

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

const VendorLandingPage = props => {
  const { classes } = props;

  const [allVendors, setAllVendors] = useState([]);

  useEffect(() => {
    axios
      .get(`vendor/`)
      .then(res => {
        console.log(res, "vendor by Id");
        setAllVendors(res.data);
        // console.log(allVendors);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Typography
        component="p"
        style={{ fontWeight: "bold", fontSize: "40px" }}
      >
        Our vendors
      </Typography>

      {allVendors &&
        allVendors.map(eachVendor => {
          return (
            <>
              <Container maxWidth="lg" key={eachVendor.firebase_id}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography component="p">
                      Company: {eachVendor.company_name}
                    </Typography>
                    <Typography component="p">
                      Full Name: {eachVendor.contact_fullname}
                    </Typography>
                    {/* <Link to={`/allVendors/${eachVendor.firebase_id}`}>
                      <Typography component="p">View my products</Typography>
                    </Link> */}
                    <Link to={`/oneVendorPublic/${eachVendor.firebase_id}`}>
                      <Typography component="p">
                        Get more information about me
                      </Typography>
                    </Link>
                  </CardContent>
                  <CardContent />
                </Card>
              </Container>
            </>
          );
        })}
      {/* <Switch>
        <Route
          path="/allVendors/:firebase_id"
          render={props => (
            <ProductByVendorCard {...props} vendor={allVendors} />
          )}
        />
      </Switch> */}
    </>
  );
};

export default withRouter(withStyles(styles)(VendorLandingPage));
// export default withStyles(styles)(VendorLandingPage);
