import React from "react";


const MarketProfilePage = (props) => {

    return (
        <div className="test">
            <h1>Market Profile:</h1>
            {props.location.state.firebase_id}
        </div>
    )
}

export default MarketProfilePage;