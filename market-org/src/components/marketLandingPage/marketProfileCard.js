import React from "react";

const MarketProfileCard = (props) => {

return (
    <div className="marketProfileCard">

    <div>
    {props.profile.market_name}
    </div>

    <div>
    {props.profile.address}
    </div>

    <div>

        
    </div>

    </div>
)
}

export default MarketProfileCard;