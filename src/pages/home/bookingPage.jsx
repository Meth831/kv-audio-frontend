import { useState } from "react"
import { loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";

export default function BookingPage(){
    const [cart,setCart]=useState(loadCart());

    function reloadCart(){
        setCart(loadCart());
    }
    return(
        <div className="w-full h-full flex flex-col items-center">
            <h1> create Booking page</h1>
            <div className="w-full flex flex-col items-center">
                {
                    cart.orederdItems.map((item)=>{
                        return <BookingItem itemkKey={item.key} qty={item.qty}refresh={reloadCart}/>
                    })
                }

            </div>
        </div>
    )
}