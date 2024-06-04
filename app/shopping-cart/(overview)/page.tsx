'use client'
import React, { useRef, useEffect, useState } from 'react';
import Header from '../../ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectProduct } from '../../lib/definitions';


export default function CartPage() {
    // Initialize a reference for storing cart products
    const cartProductsRef = useRef<any>([]);
    const [total, setTotal] = useState(0); // State for total price

    // Retrieve cart products from localStorage when the component mounts
    useEffect(() => {
        const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]') || [];
        cartProductsRef.current = storedCartProducts;
        // Calculate total price
        const totalPrice = storedCartProducts.reduce((acc: number, product: any) => acc + parseFloat(product.price) * product.quantity, 0);
        setTotal(totalPrice);
    }, []);

    // Function to add a product to the cart
       const addToCart = (product: SelectProduct) => {
        const updatedCartProducts = [...cartProductsRef.current, { ...product, quantity: 1 }]; // Include quantity information
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
        cartProductsRef.current = updatedCartProducts;
        // Recalculate total price
        const totalPrice = updatedCartProducts.reduce((acc: number, product: any) => acc + parseFloat(product.price) * product.quantity, 0);
        setTotal(totalPrice);
    };

    // Function to update quantity of a product in the cart
    const updateQuantity = (id: number, newQuantity: number) => {
        const updatedCartProducts = cartProductsRef.current.map((product: { id: number; }) => (product.id === id ? { ...product, quantity: newQuantity } : product));
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
        cartProductsRef.current = updatedCartProducts;
        // Recalculate total price
        const totalPrice = updatedCartProducts.reduce((acc: number, product: any) => acc + parseFloat(product.price) * product.quantity, 0);
        setTotal(totalPrice);
    };

    // Function to remove a product from the cart
    const removeProduct = (id: number) => {
        const updatedCartProducts = cartProductsRef.current.filter((product: { id: number; }) => product.id !== id);
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
        cartProductsRef.current = updatedCartProducts;
        // Recalculate total price
        const totalPrice = updatedCartProducts.reduce((acc: number, product: any) => acc + parseFloat(product.price) * product.quantity, 0);
        setTotal(totalPrice);
    };

    // Function to clear the entire cart
    const clearCart = () => {
        localStorage.removeItem('cartProducts');
        cartProductsRef.current = [];
        setTotal(0);
    };

    return (
        <main className='font-red-hat'>
            <Header />
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
                {cartProductsRef.current.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <table className='w-full mb-8'>
                            <thead>
                                <tr>
                                    <th className='text-left'>Product</th>
                                    <th className='text-left'>Price</th>
                                    <th className='text-left'>Quantity</th>
                                    <th className='text-left'>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProductsRef.current.map((product: { name: string; id: number; price: number; quantity: number; }) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <input
                                                type='number'
                                                min='1'
                                                value={product.quantity}
                                                onChange={e => updateQuantity(product.id, parseInt(e.target.value))}
                                            />
                                        </td>
                                        <td>${product.price * product.quantity}</td>
                                        <td>
                                            <button onClick={() => removeProduct(product.id)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='flex justify-between'>
                            <button onClick={clearCart}>Clear Cart</button>
                            <div>Total: ${total}</div>
                        </div>
                        <div className='mt-8'>
                            <button onClick={() => ('/checkout')} className='bg-blue-500 text-white py-2 px-4 rounded'>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
};
