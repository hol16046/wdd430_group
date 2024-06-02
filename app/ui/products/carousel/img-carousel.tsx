import { SelectProductImage } from '@/app/lib/definitions';
import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import Image from 'next/image';

export default function ImgCarousel({ images }: { images: SelectProductImage[] }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    })
  }

  return(
    <div aria-label='Image Carousel' className='w-full h-full relative mb-2 '>
      <a href='#after-carousel-controls' className='sr-only focus:not-sr-only'>Skip to after image carousel controls</a>
      <div className='w-full h-full overflow-hidden flex'>
        {images.map((image, index) => (
          <Image style={{ translate: `${-100 * imageIndex}%`}} key={image.image_file} src={image.image_file} alt={image.alt_text} aria-hidden={imageIndex !== index} width={350} height={250} className='w-full h-full object-cover block flex-shrink-0 flex-grow-0 translate ease-in-out duration-300'/>
        ))}
      </div>
      
      <button onClick={showPrevImage} className='carousel-btn left-0' aria-label='View Previous Image'><ArrowBigLeft aria-hidden /></button>
      <button onClick={showNextImage} className='carousel-btn right-0' aria-label='View Next Image'><ArrowBigRight aria-hidden /></button>
      <div className='absolute bottom-[.5rem] left-[50%] -translate-x-[50%] flex gap-[.25rem]'>
        {images.map((_, index) => (
          <button onClick={() => setImageIndex(index)} key={index} className='carousel-dot-btn' aria-label={`View Image ${index + 1}`}>{index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}</button>
        ))}
      </div>
      <div id='after-carousel-controls' className='sr-only'>After Image Carousel Controls</div>
    </div>
  )
};