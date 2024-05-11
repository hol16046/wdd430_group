import Filter from "./ui/filter";
import Features from "./ui/features";
import Image from "next/image";
import Products from "./ui/products";

export default function Home() {
  return (
    <main className="">
      <header>
        <div id='logo'>
          <Image src="/logo.webp" width={100} height={60} alt="Company Logo"/>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Saved</li>
            <li>Profile</li>
          </ul>
        </nav>
        <div id='calendar'>Calender</div>
      </header>

      <div className="container grid grid-cols-5 gap-4">
        <aside id='filters'>
          <Filter />
        </aside>
       
       <Products/>
    
        <aside id='featured'>
          <Features/>
        </aside>
      </div>
      <footer></footer>
    </main>
  );
}
