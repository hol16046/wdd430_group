'use client';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Ratings',
  };



import { useState } from 'react';

interface CreateRatingButtonProps {
  productId: number;
}

export default function CreateRatingButton({ productId }: CreateRatingButtonProps) {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateRating = async () => {
    if (!rating || !description) {
      setError('Rating and description are required');
      return;
    }

    try {
      const response = await fetch('/api/products/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, description, productId }),
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
        // Reload the page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        const data = await response.json();
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <div className="mt-6">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 px-4 py-2 bg-theme-dark-teal text-white rounded hover:bg-theme-rust"
        >
          Rate this product
        </button>
      ) : (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateRating();
            }}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="rating" className="font-semibold text-sm mb-1">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                min="1"
                max="5"
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold text-sm mb-1">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 form-btn"
            >
              Submit
            </button>
          </form>
          {success && <p className="text-green-500 mt-2">Rating submitted successfully!</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
}
