import './CardSkeleton.css';

interface CardSkeletonProps {
  variant?: 'default' | 'featured' | 'compact';
  count?: number;
}

function SingleSkeleton({ variant = 'default' }: { variant: string }) {
  return (
    <div className={`card-skeleton card-skeleton--${variant}`} aria-hidden="true">
      <div className="skeleton-image shimmer" />
      <div className="skeleton-body">
        <div className="skeleton-badge shimmer" />
        <div className="skeleton-title shimmer" />
        {variant !== 'compact' && <div className="skeleton-description shimmer" />}
        <div className="skeleton-footer">
          <div className="skeleton-avatar shimmer" />
          <div className="skeleton-meta shimmer" />
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton({ variant = 'default', count = 1 }: CardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SingleSkeleton key={i} variant={variant} />
      ))}
    </>
  );
}
