import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLocalStorage } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles,setBottles]=useState([]);
    useEffect(()=>{
        fetch('bottles.json')
            .then(res=>res.json())
            .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
        console.log('called useEffect',bottles.length);
        // const storedCart=getStoredCart();
        // console.log(storedCart);
        if(bottles.length){
            const storedCart=getStoredCart();
            // console.log(storedCart,bottles);
            const savedCart=[];
            for (const id of storedCart){
                console.log(id);
                const bottle=bottles.find(bottle=>bottle.id===id)
                if (bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart',savedCart);
            setCart(savedCart);
        }
    },[bottles])

    const [cart,setCart]=useState([]);

    const handleAddToCart=(bottle)=>{
        const newCart=[...cart,bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart=(id)=>{
        //visual cart remove
        const remainingCart=cart.filter(bottle=>bottle.id !== id);
        setCart(remainingCart);
        //remove from local storage
        removeFromLocalStorage(id);
    }

    return (
        <div>
            <h2>Bottles Available :  {bottles.length}</h2>
            <Cart
             cart={cart}
             handleRemoveFromCart={handleRemoveFromCart}
             ></Cart>
            {/* <h4>Cart : {cart.length}</h4> */}
            
            <div className="bottle-container">
                {
                    bottles.map(bottle=>
                    <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
            

        </div>
    );
};

export default Bottles;