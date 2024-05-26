'use client';

export default function CreateRatingButton() {
  const handleCreateRating = () => {
    
  };

  return (
    <button 
      onClick={handleCreateRating} 
      className="mt-4 px-4 py-2 bg-theme-dark-teal text-white rounded hover:bg-blue-700"
    >
      Create New Rating
    </button>
  );
}
