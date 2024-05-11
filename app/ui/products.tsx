import Image from "next/image"

export default function Products() {
    return(
        <section className="grid grid-cols-3 gap-4 col-span-3">
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
            <div>
                <Image src={"/hdctjewelry.jpeg"} width={100} height={60} alt="Product Image"/>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.</p>
                <p className="text-lime-950"><span className="text-lime-700">Price:</span> $0.00</p>
            </div>
        </section>
    )
}