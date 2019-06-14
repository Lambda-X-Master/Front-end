import React, { useEffect, useState} from 'react'
import axios from '../../axios-instance';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState('')
    useEffect(() => {
        let firebase_id = localStorage.getItem('firebaseId')
        console.log(firebase_id)
        axios.get(`/cart/${firebase_id}`)
            .then(res => {
                console.log(res.data)
                let cartData = res.data[0]
                let total = res.data[1]
                console.log('Total', total)
                console.log('cart data', typeof cartData)
                setCartItems(cartData)
                setTotal(total)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(cartItems.length, 'cart item type')
    return (
        
        <div>
            <h3> View Cart </h3>
            { 
    Object.keys(cartItems).map((item, i) => (
        <div className="travelcompany-input" key={i}>
            
            <h3>Stall Dimensions: </h3>
            <h3>Length: {cartItems[item].size.len} Width: {cartItems[item].size.width}</h3>
            <h3 className="input-label"> Stall Price { cartItems[item].price}</h3>
        </div>
    ))
} 
            {/* <h3>{cartItems[0]}</h3> */}
            {/* {cartItems.map(item => {
                return(<h4>{item}</h4>)
            })} */}
            <h3>Total ${total}</h3>
        </div>
    )
}

export default Cart;