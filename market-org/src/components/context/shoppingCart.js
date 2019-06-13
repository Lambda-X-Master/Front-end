import React, { useState }  from 'react';

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState({});
    
    return (
        <ShoppingCartContext.Provider value ={[cart, setCart]}>
            {children}
        </ShoppingCartContext.Provider>
    )
}