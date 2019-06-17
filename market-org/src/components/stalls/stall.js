import React, {
  useEffect,
  useState,
  useContext,
  useReducer,
  createContext
} from "react";
import styled from "styled-components";
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
  background-color: ${props => (props.toggled ? "red" : "blue")};
`;

// https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff

const Rent = payload => {
  const dispatch = useContext(CartDispatch);
  return (
    <div className="action-rent">
      <button
        onClick={() =>
          dispatch({
            type: "rent",
            payload: {
              stalls_id: payload.payload.stall_id,
              cart_id: payload.payload.cart_id
            }
          })
        }
      >
        Rent
      </button>
    </div>
  );
};

const UnRent = payload => {
  const dispatch = useContext(CartDispatch);

  return (
    <div className="action-unrent">
      <button
        onClick={() =>
          dispatch({
            type: "unrent",
            payload: {
              stalls_id: payload.payload.stall_id,
              cart_id: payload.payload.cart_id
            }
          })
        }
      >
        Unrent
      </button>
    </div>
  );
};

const MainButtons = payload => {
  if (payload.rentStatus) {
    return (
      <div className="rent">
        <Rent payload={payload} />
      </div>
    );
  } else {
    return (
      <div className="unrent">
        <UnRent payload={payload} />
      </div>
    );
  }
};

const CartDispatch = createContext(null);

const Stall = props => {
  const [isAvailable, setAvailableStatus] = useState(props.stall.available);
  const [buttonState, setButtonState] = useState(false);
  console.log("Current stall:", props.stall);

  const reducer = (state, action) => {
    switch (action.type) {
      case "rent":
        axios
          .post(`cart/add-stall-to-cart/${action.payload.cart_id}`, {
            stalls_id: action.payload.stalls_id
          })
          .then(res => {
            console.log("Rent: ", res);

            axios
              .request({
                method: "PUT",
                url: `stalls/${action.payload.stalls_id}`,
                data: { available: false }
              })
              .then(res => {
                console.log("Update unavailable:", res);
                // setRentStatus(false);
                // setAvailableStatus(false);
                // setButtonState(false);
                props.setStallChangedStatus(true);
                // setAvailableStatus(false);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));

      case "unrent":
        axios
          .request({
            method: "DELETE",
            url: `/cart/delete-stall-from-cart/${action.payload.cart_id}`,
            data: { stalls_id: action.payload.stalls_id }
          })
          .then(res => {
            console.log("Unrent: ", res);

            axios
              .request({
                method: "PUT",
                url: `stalls/${action.payload.stalls_id}`,
                data: { available: true }
              })
              .then(res => {
                console.log("Update available:", res);
                // setRentStatus(true);
                // setAvailableStatus(true);
                // setButtonState(true);
                props.setStallChangedStatus(true);
                // setAvailableStatus(true);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));

      default:
        return state;
    }
  };

  useEffect(() => {
    setAvailableStatus(props.stall.available);
  }, []);

  const [state, dispatch] = useReducer(reducer);

  const cart_id = localStorage.getItem("firebaseId");

  return (
    <ProfileCard toggled={props.stall.available}>
      <div>
        <h2>Available to rent:</h2>
        <h3>{props.stall.available ? "Available" : "Unavailable"}</h3>
      </div>
      <CartDispatch.Provider value={dispatch}>
        <div>
          <h3>Stall Id:</h3>

          {props.stall.id}
        </div>

        <div>
          <h3>Quantity</h3>
          {props.stall.qty}
        </div>

        <div>
          <h3> Size </h3>
          <ul>
            <li>
              <b>Length:</b>
              {props.stall.size.length}
            </li>
            <li>
              <b>Width:</b> {props.stall.size.width}
            </li>
          </ul>
        </div>

        <div>
          <MainButtons
            stall_id={props.stall.id}
            cart_id={cart_id}
            rentStatus={props.stall.available}
          />
        </div>
      </CartDispatch.Provider>
    </ProfileCard>
  );
};

export default Stall;
