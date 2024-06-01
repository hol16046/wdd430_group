'use client';
import { useState } from 'react';
import RatingForm from './RatingForm';

interface CreateRatingButtonProps {
  productId: number;
}

export default function CreateRatingButton({ productId }: CreateRatingButtonProps) {
  const [showForm, setShowForm] = useState(false);

  const handleCreateRating = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button 
        onClick={handleCreateRating} 
        className="mt-4 px-4 py-2 bg-theme-dark-teal text-white rounded hover:bg-theme-teal"
      >
        Create New Rating
      </button>
      {showForm && <RatingForm productId={productId} />}
    </div>
  );
}
