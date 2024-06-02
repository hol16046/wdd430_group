import { Metadata } from "next";
import SellerImageUploadForm from '@/app/ui/artists/seller-img-upload';

export const metadata: Metadata = {
    title: 'Upload Images',
  };


 
export default function SellerImageUploadPage() {
  return (
    <main className="font-red-hat">
      <SellerImageUploadForm />
    </main>
  );
}