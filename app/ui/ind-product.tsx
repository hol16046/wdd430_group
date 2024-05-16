import Image from "next/image"


// Working on making the product image a square
// const squareImage = {
//   width: '100%',
//   height: '75%',
// }
// style={squareImage}

export default function Product() {
  return (
    <div className="grid rounded-lg border-[#B84000] border-2 p-2" >
        <Image className="rounded-md justify-self-center" src={"/hdctjewelry.jpeg"} width={100} height={100} alt="Product Image"/>
        <h3 className="text-md">Product Name</h3>
        <p className="text-[#13534C] text-md font-medium">$0.00</p>
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