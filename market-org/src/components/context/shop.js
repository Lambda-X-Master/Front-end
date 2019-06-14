import React, { useState, useReducer }  from 'react';

export const ShopContext = React.createContext({
    stalls: [],
    cart: [],
    getStalls: () => {},
    addStallToCart: stall => {},
    removeStallFromCart: stallId => {},
    getStallsByMarketId: marketId => {}
});

const addStallToCart = stall => {
    
}

export const ShopProvider = ({ children }) => {
    // const stalls = []
    const [cartState, dispatch] = useReducer(shopReducer, {cart: []})

    return (
        <ShopContext.Provider 
            value={{
                stalls: stalls,
                cart: cartState.cart,
                addStallToCart: addStallToCart,
                removeStallFromCart: removeStallFromCart
            }}>
            {children}
        </ShopContext.Provider>
    )
}