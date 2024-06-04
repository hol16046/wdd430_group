import React from 'react';
import { useState, useEffect } from 'react';
//import Product from './ind-product';
import { fetchAllProducts } from '../../lib/data';

let gridSize = 6


export default function ProductsGrid({ sortOrder }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === 'high-to-low' ? b.price - a.price : a.price - b.price;
    });
    setProducts(sortedProducts);
  }, [sortOrder]);

  return (
    <section className='grid sm:grid-cols-1 mb-10 lg:grid-cols-3 gap-4 col-span-3'>
      {products.map((product) => (
        <div key={product.id}>
          
          {/* <Product id={product.id} /> */}
        </div>
      ))}
    </section>
  );
}
