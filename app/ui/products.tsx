import Image from "next/image"
import Product from "./ind-product"

export default function Products() {
    return(
        <section className="mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </section>
    )
}