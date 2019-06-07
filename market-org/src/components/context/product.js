import React, { useState }  from 'react';

export const ProductContext = React.createContext();


export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState({});
    
    return (
        <ProductContext.Provider value ={[product, setProduct]}>
            {children}
        </ProductContext.Provider>
    )
}