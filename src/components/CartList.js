import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {
    const [CART, setCART] = useState([])
    useEffect(() => {
        setCART(cart)
    }, [])
    return (
        <div>
            {
                CART?.map((cartItem, cartIndex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={40} alt="" srcset="" />
                            <span>{cartItem.name}</span>

                            <span>{cartItem.quantity}</span>

                            <span>{cartItem.price * cartItem.quantity}</span>
                        </div>
                    )
                })
            }
            <p>Total : <span> </span>
                {
                    cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}
export default CartList