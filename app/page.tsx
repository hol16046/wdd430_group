import Filter from "./ui/filter";
import Features from "./ui/features";
import Image from "next/image";
import Products from "./ui/products";
import Search from './ui/search';
import NavLinks from "./ui/nav-links";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main>
      <header className="white-1000 py-8 container mx-auto grid grid-cols-4 grid-rows-2">
          {/* Logo */}
          <div className="flex items-center justify-start col-start-1">
            <div id='logo'>
              <Image
                src="/logo-transparent.png"
                alt="Company Logo"
                width={150}
                height={100}
              />
            </div>
          </div>
          {/* Navigation */}
          <nav className="col-span-2 flex items-center justify-center">
            <NavLinks />
          </nav>
          <div id='calendar' className="text-sm ml-4" >Calendar</div>
          {/* Search and Calendar */}
          <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-2 px-10">
            <Search placeholder="Search products..." />
          </div>
      </header>

      <div className="container grid sm:grid-cols-1 lg:grid-cols-5 gap-4 !w-auto lg:w-auto ml-10 mr-10 ">
        <aside id='filters'>
          <Filter />
        </aside>
       
       <Products/>
    
        <aside id='featured'>
          <Features/>
        </aside>
      </div>
      <Footer/>
    </main>
  );
}
