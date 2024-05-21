'use client';

import { SelectRating } from '../lib/definitions';

export default function Ratings({ ratings }: { ratings: SelectRating[] }) {
  return (
    <div className="p-3">
      <h3 className="font-semibold">Product Ratings</h3>
      {ratings.map((rating, i) => {
        const stars = parseInt(rating.rating);
        return (
          <div key={rating.id}>
            <p>Rating: {stars}</p>
            {/* It would be cool to make the rating appear as stars */}
            <p>Review: {rating.review}</p>
          </div>
        );
      })}
    </div>
  );
}