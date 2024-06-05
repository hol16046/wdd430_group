'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Product from '../products/ind-product';
import { AddNewProduct, AddNewProductImage } from './buttons';
import { SelectProductImage, SelectProduct, SelectSeller } from '@/app/lib/definitions';



export default function SellerProductsGrid({ productsData, images, seller }: { productsData: SelectProduct[], images: SelectProductImage[], seller: SelectSeller } ) {
  const sellerProductsData = productsData;
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(sellerProductsData);
  }, [sellerProductsData]);
  // console.log('products:', products);

  const filteredImages = images.filter((image) => products.filter((product) => product.id === image.product_id));


  return (
    <section className='grid sm:grid-cols-2 mb-10 lg:grid-cols-3 gap-4 col-span-full'>
      <div id='buttons' className='grid col-span-full grid-cols-2'>
        <AddNewProduct id={seller.id} />
        <AddNewProductImage id={seller.id} />
      </div>
      
      {products.map((product) => (
        <Product key={product.id + product.name} product={product} images={filteredImages} />
      ))}
      
    </section>
  );
}
