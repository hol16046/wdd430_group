import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header/header';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
  };


 
export default function LoginPage() {
  return (
    <div className='font-red-hat'>
    <Header />
    <main className="font-red-hat flex items-center justify-center mb-12">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div 
          // className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36"
          >
        </div>
        <LoginForm />
      </div>
    </main>
    <Footer />
    </div>
  );
}