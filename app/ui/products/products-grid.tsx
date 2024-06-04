import React from 'react';
import { useState, useEffect } from 'react';
import { ProductDetails } from './buttons';
import { fetchAllProducts } from '../../lib/data';
import Image from "next/image"
import  SortedImages  from '@/app/ui/products/sorted-img'


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
        <div key={product.id} className='border-theme-rust border-2 rounded-lg p-3 w-50 h-75'>
                   <h3>{product.name}</h3>
                   <SortedImages id={product.id} />
                   <p>{product.price}</p>
                   <ProductDetails id={product.id} />
                   </div>
      ))}
    </section>
  );
}
