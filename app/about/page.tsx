import Image from 'next/image';
import Header from '../ui/header/header';
import Footer from '../ui/footer';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
  };

export default function AboutUs() {
  return (
    <>
    <Header />
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">About Us: Hand Crafted Haven</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p className="text-lg mb-4">
            At Hand Crafted Haven, we celebrate the artistry and craftsmanship of local artists by curating a unique collection of handcrafted items that embody creativity, passion, and soul. Founded with a mission to support artisans and promote the beauty of handmade goods, we are dedicated to showcasing the diverse talents of our community.
          </p>
          <p className="text-lg">
            Our Story: Hand Crafted Haven was born out of a deep appreciation for the art of handmade craftsmanship and a desire to create a platform where local artisans can thrive. Inspired by the richness of local culture and the creativity of talented artists, we set out on a mission to bridge the gap between artisans and admirers, bringing exquisite Hand Crafted Haven from the hands of makers to the hearts of our customers.
          </p>
        </div>
        <div className="relative h-80 md:h-auto">
        <Image src={"/logo.webp"} width={500} height={500} alt="hand crafted haven logo"/>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Our Collection</h3>
        <p className="text-lg mb-4">
          Each item in our collection tells a story, crafted with love, skill, and attention to detail. From intricately woven textiles to delicately sculpted ceramics, every piece reflects the unique style and vision of the artist behind it. Whether you&#39;re searching for a one-of-a-kind piece of jewelry, a beautifully hand-painted artwork, or a functional yet artistic home decor item, our carefully curated selection offers something special for every taste and occasion.
        </p>
        <h3 className="text-2xl font-bold mb-4">Supporting Local Artists</h3>
        <p className="text-lg mb-4">
          At Hand Crafted Haven, we believe in the power of community and the importance of supporting local talent. By championing the work of local artists and artisans, we not only showcase their incredible skill and creativity but also contribute to the growth and sustainability of our local creative economy. With each purchase, you&#39;re not just acquiring a beautiful handcrafted item - you&#39;re investing in the livelihoods and dreams of talented individuals in our community.
        </p>
        <h3 className="text-2xl font-bold mb-4">Join Us</h3>
        <p className="text-lg mb-4">
          Whether you&#39;re a passionate artist looking to share your creations with the world or a discerning shopper seeking unique and meaningful treasures, we invite you to join us on our journey. Explore our ever-evolving collection, connect with the stories behind each piece, and discover the magic of handmade at Hand Crafted Haven.
        </p>
        <p className="text-lg">
          Thank you for supporting local artisans and embracing the beauty of handmade craftsmanship with us. Together, let&#39;s celebrate the art of creation and spread joy through Hand Crafted Haven. Welcome to Hand Crafted Haven - where every piece has a story, and every purchase makes a difference.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

