import React, { useState }  from 'react';

// have global storage for user, and selected market profile OR vendor profile 
export const MarketProfilesContext = React.createContext();
// const vendorProfilesContext = React.createContext([{}, () => {}]);

export const MarketProfilesProvider = (props) => {
    console.log("props:", props)
    const [ marketProfiles, setMarketProfiles] = useState([]);
    console.log("Test");
    return (
        <MarketProfilesContext.Provider value ={[marketProfiles, setMarketProfiles]}>
            {props.children}
        </MarketProfilesContext.Provider>
    )
}
// const vendorProfilesProvider = (props) => {
//     const [ vendorProfiles, setVendorProfiles] = useState(null)


//     return(
//         <div>
//         <vendorProfilesContext.Provider value ={[vendorProfiles,setVendorProfiles]}>
//             <h1>fun</h1>
//         </vendorProfilesContext.Provider>
//         </div>
//     )
// }

