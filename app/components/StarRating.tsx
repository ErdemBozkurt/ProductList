import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  return (
    <div className="star-rating">
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={`full-${index}`} className="star full">&#9733;</span> // Dolay yıldız (★)
      ))}
      {halfStar === 1 && <span className="star half">&#9733;</span>}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span key={`empty-${index}`} className="star empty">&#9734;</span> // Boş yıldız (☆)
      ))}
    </div>
  );
};

export default StarRating;
