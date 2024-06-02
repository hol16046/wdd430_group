import Logo from './logo';
import NavLinks from './nav-links';
import Search from './search';
import { Suspense } from 'react';
import SignOut from './sign-out';

function SearchFallback() {
  return <>placeholder</>;
}

export default function Header() {
  return (
    <header className='white-1000 py-8 container mx-auto grid grid-cols-4'>
      {/* Logo */}
      <div className='flex items-center justify-start col-start-1'>
        <Logo />
      </div>
      {/* Navigation */}
      <nav className='col-span-2 flex items-center justify-center'>
        <NavLinks />
        {/* <SignOut /> */}
      </nav>
      <div id='calendar' className='text-sm ml-4 col-start-4'>
        Calendar        
      </div>
      {/* Search and Calendar */}
      <div className='col-start-1 col-span-4 md:col-start-2 md:col-span-2 h-10 grid grid-rows-auto'>
        <Suspense fallback={<SearchFallback />}>
          <Search placeholder='Search products...' />
        </Suspense>
      </div>
    </header>
  );
}
