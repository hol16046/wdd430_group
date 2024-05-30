'use client';

import { SelectProduct, SelectProductImage } from '../../lib/definitions';
import Link from 'next/link';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useFormState } from 'react-dom';
import Image from 'next/image';


export default function Form({ id }: { id: number } ) {
  const sellerId = 3;
  // const [state, dispatch] = useFormState(createNewProduct, initialState);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("From onFileUploadChange");
    const fileInput = e.target;
    if (!fileInput.files) {
      alert("No file selected");
      return;
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty.");
      return;
    }
    const file = fileInput.files[0];
    // File Validation
    if(!file.type.startsWith("image")) {
      alert("Please select a valid image.");
      return;
    }
    // Setting file state
    setFile(file); 
    setPreviewUrl(URL.createObjectURL(file));
    //Reset file input
    e.currentTarget.type = 'text';
    e.currentTarget.type = 'file';
  }

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  }

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (!file) {
      return;
    }
  
    try {
      var formData = new FormData();
      console.log(FormData);
      formData.append("media", file);
  
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
  
      const {
        data,
        error,
      }: {
        data: {
          url: string | string[];
        } | null;
        error: string | null;
      } = await res.json();
  
      if (error || !data) {
        alert(error || "Sorry! something went wrong with the data.");
        return;
      }
  
      console.log("File was uploaded successfully:", data);
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong.");
    }
  };

  return (
    
    <form className="px-5" onSubmit={(e) => e.preventDefault()}>
      {/* Product Name */}
      <div>
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" name="name" placeholder="Product Name" />
      </div>
      {/* Product Price */}
      {/* Product Description */}
      {/* Product Category */}
      {/* Product Keyword */}
      {/* Product Image */}
      {/* <input name="file" type="file" /> */}
      {/* <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-80">
              <Image
                alt="file uploader preview"
                objectFit="cover"
                src={previewUrl}
                width={320}
                height={218}
                layout="fixed"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <strong className="text-sm font-medium">Select an image</strong>
              <input
                className="block w-0 h-0"
                name="file"
                type="file"
                onChange={onFileUploadChange}
              />
            </label>
          )}
        </div>
        <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
          <button
            disabled={!previewUrl}
            onClick={onCancelFile}
            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
          >
            Cancel file
          </button>
          <button
            disabled={!previewUrl}
            onClick={onUploadFile}
            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
          >
            Upload file
          </button>
        </div>
      </div> */}
    </form>
  );
};