import { SelectRating } from '../lib/definitions';
import CreateRatingButton from '../reviews/CreateRatingButton';

export default function Ratings({ ratings }: { ratings: SelectRating[] }) {
  // Helper function to render stars
  const renderStars = (stars: number) => {
    const fullStars = '★'.repeat(stars);
    const emptyStars = '☆'.repeat(5 - stars);
    return `${fullStars}${emptyStars}`;
  };

  return (
    <div className="p-3">
      <h3 className="font-semibold text-md">Product Ratings</h3>
      {ratings.length > 0 ? (
        <>
          {ratings.map((rating) => {
            const stars = parseInt(rating.rating);
            return (
              <div key={rating.id} className="text-sm py-1">
                <p><span className="font-semibold">Rating:</span> {renderStars(stars)}</p>
                <p><span className="font-semibold">Review:</span> {rating.review}</p>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-sm">No ratings available for this product.</p>
      )}
      <CreateRatingButton />
    </div>
  );
}
