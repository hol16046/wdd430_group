import { SelectRating } from '../lib/definitions';

export default function Ratings({ ratings }: { ratings: SelectRating[] }) {
  if (ratings.length > 0) {
    return (
      <div className="p-3">
        <h3 className="font-semibold text-md">Product Ratings</h3>
        {ratings.map((rating, i) => {
          const stars = parseInt(rating.rating);
          return (
            <div key={rating.id} className="text-sm py-1">
              <p><span className="font-semibold">Rating:</span> {stars}</p>
              {/* It would be cool to make the rating appear as stars */}
              <p><span className="font-semibold">Review:</span> {rating.review}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="p-3">
        <h3 className="font-semibold text-md">Product Ratings</h3>
        <p className="text-sm">No ratings available for this product.</p>
      </div>
    );
  }
}