import React, { useEffect, useState, useContext, useReducer, createContext } from "react";
import styled from 'styled-components';
import axios from "../../axios-instance";

const ProfileCard = styled.div`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: black;
    margin: 3%;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

// https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff

const isRented = false;

const Rent = (payload) => {
    const dispatch = useContext(CartDispatch);
    console.log("payload", payload);
    console.log("stall and cart id ", payload.payload);
    return (
      <div className="action-rent">
        <button onClick={() => dispatch({ type: "rent", payload: {stall_id: payload.payload.stall_id, cart_id: payload.payload.cart_id }})}>Rent</button>
      </div>
    );
  };

const UnRent = (payload) => {
    const dispatch = useContext(CartDispatch);
    
    return (
      <div className="action-unrent">
        <button onClick={() => dispatch({ type: "unrent", payload: {stall_id: payload.payload.stall_id, cart_id: payload.payload.cart_id }})}>Unrent</button>
      </div>
    );
  };


const MainButtons = (payload) => {
    console.log("stall and cart id ", payload)
    if (!payload.isRented) {
        return(
            <div className="rent">
            <Rent payload={payload}/>
            </div>
        )
    }
    else{
        return(
            <div className="unrent">
            <UnRent payload={payload}/>
            </div>
        )
    }
}

const CartDispatch = createContext(null);

const Stall = (props) => {

    const [isRented, setRentStatus] = useState(false);

    const reducer = (state, action) => {
            console.log("action: ", action);
          switch (action.type) {
            case "rent":
                axios.post(`cart/add-stall-to-cart/${action.payload.cart_id}`, {"stalls_id": action.payload.stall_id}).then( 

                    axios.put(`stalls/${action.payload.stall_id}`, {available: false})
                    .then(() => {
                    setRentStatus(false);
                    })
                    .catch(err => console.log(err))

                ).catch(err => console.log(err))

             
            case "unrent":
                axios.put(`/delete-stall-from-cart/${action.payload.stall_id}`, {available: true}).then(

                    axios.put(`stalls/${action.payload.stall_id}`, {available: true})
                    .then(() => {
                    setRentStatus(true);
                    })
                    .catch(err => console.log(err))

                ).catch(err => console.log(err))
            default:
              return state;
          }
    }; 

    const [state, dispatch] = useReducer(reducer);

    const cart_id = localStorage.getItem("firebaseId");

    console.log("is Rented:" ,isRented);
    console.log(props.stall);

    return(
        <ProfileCard>
        "Rented" : 
        {isRented ? "Unavailable" : "Available"}
        <CartDispatch.Provider value={dispatch}>

            <div>
            <h3>Quantity</h3>
            {props.stall.qty}
            </div>

            <div>
                <h3> Size </h3>
                <ul>
                <li><b>Length:</b>{props.stall.size.width}</li>
                <li><b>Width:</b> {props.stall.size.height}</li>
                </ul>
            </div>

            <div>
                <MainButtons stall_id={props.stall.id} cart_id={cart_id} rentStatus={isRented} />
            </div>
        </CartDispatch.Provider>
        </ProfileCard>
    )
}

export default Stall;