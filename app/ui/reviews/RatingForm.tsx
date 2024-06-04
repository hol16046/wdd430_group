import { useState } from 'react';

interface RatingFormProps {
  productId: number;
}

function RatingForm({ productId }: RatingFormProps) {
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/products/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, rating, productId }),
    });

    if (response.ok) {
      // Handle successful submission
      console.log('Rating submitted successfully');
    } else {
      // Handle errors
      console.error('Failed to submit rating');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value={0}>Select Rating</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star} Star{star > 1 && 's'}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <button type="submit" className="px-4 py-2 bg-theme-dark-teal text-white rounded hover:bg-theme-teal">
          Submit Rating
        </button>
      </div>
    </form>
  );
}

export default RatingForm;
