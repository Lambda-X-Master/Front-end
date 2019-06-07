import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

export const AuthContext = React.createContext();
export const VendorContext = React.createContext();
export const MarketContext = React.createContext();

export const AuthProvider = ({ children }) => {
// const Store = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [vendorProfile, setVendorProfile] = useState(null);
  // const [marketProfile, setMarketProfile] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {/* <MarketContext.Provider value={[marketProfile, setMarketProfile]}>
      <VendorContext.Provider value={[vendorProfile, setVendorProfile]}> */}
        {children}
      {/* </VendorContext.Provider>
      </MarketContext.Provider> */}
    </AuthContext.Provider>
  );
};

// export default Store;