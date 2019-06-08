import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import { withStyles, Typography, TextField, Button, CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const ProductByVendor = () => {
    return (
        <div>
<Link to='/markets'>Markets</Link>
            List of your vendor products
            
        </div>
    )
}

export default ProductByVendor
