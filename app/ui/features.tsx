import Image from "next/image"

export default function Features(){
    return(
        <>
            <h3>Featured Artist</h3>
            <div>
                <Image
                src="/images.jpeg"
                width={100}
                height={60}
                className="hidden md:block"
                alt="Featured Person"
                />
            </div>
            <h3>Featured Product</h3>
            <div>
                <Image
                src="/hdctjewelry.jpeg"
                width={100}
                height={60}
                className="hidden md:block"
                alt="Featured Person"
                />
            </div>
        </>
    )
}