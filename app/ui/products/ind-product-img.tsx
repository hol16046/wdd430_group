
import Image from "next/image"
import { fetchProductImages } from '../../lib/data';



export default async function ProductImage({ id }: { id: number }) {
  const images = await fetchProductImages(id);
  console.log('images:', images)
  console.log('images[0]:', images[0]);

  return (
    <div className="col-span-3 justify-center w-full  h-40 overflow-hidden">
      <Image
        className="rounded-md justify-self-center col-span-3"
        src={images[0].image_file} 
        width={250}
        height={250}
        alt={images[0].alt_text}
      />
    </div>
  );


}