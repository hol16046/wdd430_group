import Image from "next/image"
import Product from "./ind-product"

export default function Products() {
    return(
        <section className="grid mb-10 grid-cols-3 gap-4 col-span-3">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </section>
    )
}