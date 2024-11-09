import React from 'react';
import './SkeletonLoader.css';

function SkeletonLoader({ count }) {
  const items = Array.from({ length: count || 1 }, (_, index) => (
    <div key={index} className="skeleton-item" />
  ));

  return (
    <div className="skeleton-loader">
      <div className="skeleton-list">
        {items}
      </div>
    </div>
  );
}

export { SkeletonLoader };



