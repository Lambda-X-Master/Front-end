import React, { useState, useEffect, useContext } from "react";

const ProductByVendorCard = ({ vendor, match }) => {
    const { firebase_id } = match.params;

    const eachVendor = vendor.find(aVendor => `${aVendor.firebase_id}` === firebase_id);

    console.log('rendering Item: ', vendor, eachVendor);
    if (!eachVendor) {
      return <h3>Loading items...</h3>;
    }

    return (
        <>
        <h2 style={{ marginTop: "100px" }}>{eachVendor.company_name}</h2>
        <h2 style={{ marginTop: "100px" }}>{eachVendor.company_name}</h2>
            
        </>
    )
}

export default ProductByVendorCard
