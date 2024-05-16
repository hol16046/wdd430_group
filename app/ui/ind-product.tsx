import Image from "next/image"


// Working on making the product image a square
// const squareImage = {
//   width: '100%',
//   height: '75%',
// }
// style={squareImage}

export default function Product() {
  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3" >
        <Image className="rounded-md justify-self-center col-span-3" src={"/black-earrings.webp"} width={250} height={250} alt="Product Image"/>
        <h3 className="text-md p-1 col-span-3"><a href="#" className="hover:text-theme-rust">Product Name</a></h3>
        <p className="text-theme-dark-teal text-md font-medium self-center p-1">$0.00</p>
        <button type="button" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-5 py-2.5 col-span-2 self-center justify-self-end">Add to Cart</button>
    </div>
  );
}


//Previous Product Component
/* <div className="grid rounded-lg border-4 p-4" >
    <Image className="rounded-md justify-self-center" src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
    <h3>Product</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor.</p>
    <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
</div> */