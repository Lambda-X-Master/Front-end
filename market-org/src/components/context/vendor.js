import React, { useState }  from 'react';

export const VendorContext = React.createContext();


export const VendorProvider = ({children}) => {
    const [vendorProfile, setVendorProfile] = useState({});
    
    return (
        <VendorContext.Provider value ={[vendorProfile, setVendorProfile]}>
            {children}
        </VendorContext.Provider>
    )
}