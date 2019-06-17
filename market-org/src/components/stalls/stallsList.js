import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "../../axios-instance";
import Stall from "./stall.js";

// {
//     // "id": 0,
//     // "size": {
//     // },
//     // "market_id": "",
//     // "available": false,
//     // "qty": 0
// }

const StallsContainer = styled.div`
  width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StallsList = props => {
  const [stalls, setStalls] = useState([]);
  const [hasAStallChanged, setStallChangeStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`/stalls/market/${props.location.state.firebase_id}`)
      .then(res => {
        console.log("Stalls : ", res.data);
        let stallItems = res.data.stallData;
        // stalls = stalls.map(stall => JSON.parse(stall));
        setStalls(stallItems);
        console.log("stalls", stalls);
        setStallChangeStatus(false);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [hasAStallChanged]);

  console.log("Getting stalls ", stalls);
  return (
    <StallsContainer>
      <h2> List of available stalls for {props.location.state.market_name}</h2>
      {stalls.map(stall_item => {
        return (
          <Stall
            stall={stall_item}
            setStallChangedStatus={setStallChangeStatus}
          />
        );
      })}
    </StallsContainer>
  );
};

export default StallsList;
