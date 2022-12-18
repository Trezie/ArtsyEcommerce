import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import CartItem from './CartItem'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from '../../components/modal/Modal'


function CartCheckout({hidden, width}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const {cart, setCart} = useContext(Context)
    const [totalPrice, setTotalPrice] = useState(0)
    const [deleteId, setDeleteId ]= useState('')

    useEffect(()=>{
        setTotalPrice(0)
        cart.forEach(item => {
            setTotalPrice(prevPrice => prevPrice + (item.price.usd * item.qty))
        })
    },[cart])

    const productsInCart = cart.map(item => {
        return(
            <CartItem
                key = {item.id}
                id = {item.id}
                img = {item.url}
                name = {item.name}
                creator = {item.creator}
                size = {item.size.ft}
                price = {item.price.usd}
                qty = {item.qty}
                handleClick = {removeCart}
                increaseQty = {increaseQty}
                decreaseQty = {decreaseQty}
            />
        )
    })

    async function removeCart(id){
        setModalIsOpen(!modalIsOpen)
        setDeleteId(id)
    }

    function increaseQty(id){
        setCart(
            cart.map(item => {
                if(item.id == id){
                    return {
                        ...item,
                        qty: item.qty + 1,
                    }
                }
                return item
            })
        )
    }
    
    function decreaseQty(id){
        if(cart.length <= 1) return
        setCart(
            cart.map(item => {
                if(item.id == id){
                    return {
                        ...item,
                        qty: item.qty - 1,
                    }
                }
                return item
            })
        )
    }

    const confirmCartRemove = () => {
        setCart(cart.filter(item => item.id != deleteId))
        toast("Product Removed Successfully!", {type: 'success', className: 'w-full'})
        setModalIsOpen(false)
    }

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <ToastContainer />
            <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
                <div className='flex my-2'>
                    <button onClick={toggleModal} className='h-[3.5rem] px-8 flex items-center border-2 border-grey-dark mr-4'>SAVE FOR LATER</button>
                    <button onClick={confirmCartRemove} className='bg-grey-dark text-white h-[3.5rem] px-8 flex items-center'>
                        <span>REMOVE ITEM</span>
                    </button>
                </div>
            </Modal>
            <div className={'w-3/5 mx-auto mt-5 mb-8 ' + hidden}>
                <button className='cart-btn active-cart-btn'>Shopping cart</button>
                <button className='cart-btn'>Shipping details</button>
                <button className='cart-btn'>Payment details</button>
            </div>
            <section className='mb-8'>
                {productsInCart}
            </section>
            <section className='flex gap-12 justify-between'>
                <div className={'flex flex-col justify-center item-center w-2/5 pr-24 ' + hidden}>
                    {/*  className='block w-full'> */}
                        <button className='bg-blue h-[3.5rem] px-8 text-xl mb-5 font-medium text-white block'>
                            <Link to="/shipping-details" className='block h-full flex items-center justify-center w-full'>Proceed to checkout</Link>
                        </button>
                    {/* </Link> */}
                    <Link to="/marketplace">
                        <span className='text-center  block text-lg underline text-[#006CA2]'>Continue Shopping</span>
                    </Link>
                </div>
                <article className={'text-lg flex flex-col gap-6 leading-[100%] ' + width}>
                    <p className='text-grey-light flex'><span>Products in cart :</span> <span className='text-grey-dark ml-auto'>{cart.length} item{cart.length > 1 ? 's' : ''}</span></p>
                    <p className='text-grey-light flex'><span>Shipping :</span> <span className='text-grey-dark ml-auto'>${(totalPrice * 0.1).toFixed(2)}</span></p>
                    <p className='text-grey-light flex'><span>Total :</span> <span className='text-grey-dark ml-auto'>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span></p>
                </article>
            </section>
        </>
    )
}

export default CartCheckout