import Link from 'next/link';
import Image from "next/image"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="grid grid-cols-4  col-span-3 bg-theme-orange" >
            <div className="row-span-2">
                <Image src={"/logo.webp"} width={200} height={200} alt="hand crafted haven logo"/>
            </div>
            <div className="mt-2 hover:underline">
                <Link href="/about" target="_blank" className='btn btn-link'>About</Link>
            </div>
            <div className="m-2 hover:underline">
                <Link href="mailto:handcraftedhaven@test.com" target="_blank" className='btn btn-link'>Contact Us
                <p className="gap-1 text-xs m-0">402 Wallaby Way</p>
                <p className="gap-1 text-xs m-0">Sidney, Australia</p>
                <p className="gap-1 text-xs m-0">867-5309</p></Link>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-8'>
                <Link href="https://www.facebook.com" target="_blank" className='btn btn-link'>
                    <Image src={"/facebook logo_icon.png"} width={32} height={32} alt="Facebook logo"/>
                </Link>
                    <Link href="https://www.instagram.com" target="_blank" className='btn btn-link'>
                    <Image src={"/instagram logo_icon.png"} width={32} height={32} alt="Instagram logo"/>
                </Link>
                    <Link href="https://www.twitter.com" target="_blank" className='btn btn-link'>
                    <Image src={"/twitter logo_icon.png"} width={32} height={32} alt="Twitter logo"/>
                </Link>
            </div>
        <p className="mt-3">Copyright {'\u00A9'} {currentYear}</p> 
        <p className="mt-3">Hand Crafted Haven</p> 
        <p className="mt-3" >WDD430 Group 7</p>
        </div>
    )
}




