import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({children}){
    const url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json'
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [favorite, setFavorite] = useState([])
    const [name, setName] = useState('')

    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')))

        fetch(url)
        .then(result => result.json())
        .then(data =>setProducts(data.products))    
    },[])

    const toggleFavorite = (id) => {
        let product = products.find(item => item.id == id)
        setFavorite(prevItem => {
            if(favorite.some(item => item.id == id)){
                return favorite.filter(item => item.id != id)
            } else {
                return [...prevItem, product]
            }
        })
    }

    console.log(favorite)

    useEffect(()=>{
        // localStorage.setItem('cart', JSON.stringify(cart))  
    },[cart])

    return(
        <Context.Provider value={{products, cart, setCart, name, setName, toggleFavorite, favorite}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}