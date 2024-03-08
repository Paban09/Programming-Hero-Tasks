const addProduct= ()=>{
    const productField= document.getElementById('product-field');
    const quantityField= document.getElementById('product-quantity');
    const product=productField.value;
    const quantity=quantityField.value;
    productField.value='';
    quantityField.value='';
    displayProduct(product,quantity);
    // localStorage.setItem(product,quantity);
    saveProductLocalStorage(product,quantity);
    
}

const displayProduct= (product,quantity)=>{
    const ul= document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=  `${product} : ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart=()=>{
    let cart={};
    const storedCart=localStorage.getItem('cart');
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}

const saveProductLocalStorage=(product,quantity)=>{
    const cart=getStoredShoppingCart();
    cart[product]=quantity;
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}

const displayProductFromLocalStorage=()=>{
    const savedCart=getStoredShoppingCart();
    for(const product in savedCart){
        const quantity=savedCart[product];
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();