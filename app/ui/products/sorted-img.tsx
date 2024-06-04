import Image from 'next/image';
import { SelectProductImage } from '../../lib/definitions';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { notFound } from 'next/navigation';
import { fetchProductImages } from '@/app/lib/data';

export default function SortedImages({ id }: { id: number }) {
  const [imageData, setImageData] = useState<SelectProductImage | null>(null); // State to store image data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [image] = await fetchProductImages(id);
        if (!image) {
          notFound(); // Handle case where image is not found
        }
        setImageData(image);
      } catch (error) {
        console.error('Error fetching image:', error);
        // Handle error, e.g., set state to indicate error
      }
    };

    fetchData(); // Call fetchData function
  }, [id]); // Re-run effect if id changes

  if (!imageData) {
    return <div>Loading...</div>; // Return loading indicator while fetching data
  }

  return (
    <div  className="w-50 h-50 overflow-hidden " id='sortedImage'>
      <Image
        src={imageData.image_file} 
        width={125}
        height={125}
        objectFit='cover'
        alt={imageData.alt_text}
      />
    </div>
  );
}
