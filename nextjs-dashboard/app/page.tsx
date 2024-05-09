export default function Home() {
  return (
    <main className="">
      <header>
        <div id='logo'>
          <img src="./public/logo.webp"></img>
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

      <div id="content-layout">
        <aside id='filters'>
          Filters
        </aside>
       
        <section id="product-1" className='featured-products'>
        <h3>Featured</h3>
        </section>
        <section id="product-2"  className='featured-products'>
          <h3>Featured</h3>
        </section>
        <section id="product-3" className='featured-products'>
        <h3>Featured</h3>
        </section>
        <section id="product-4" className='featured-products'>
        <h3>Featured</h3>
        </section>
    
        <aside id='featured-artist'>
          Featured artist
        </aside>
        <aside id='featured-product' >
          Featured product
        </aside>
      </div>
      <footer></footer>
    </main>
  );
}
