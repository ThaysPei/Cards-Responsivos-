import { CardProps } from '../../types/card.types';
import './Card.css';

const BADGE_COLORS = {
  blue: '#3b82f6',
  green: '#22c55e',
  orange: '#f97316',
  purple: '#a855f7',
  red: '#ef4444',
} as const;

function formatDate(dateStr: string): string {
  return dateStr;
}

export function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  badge,
  variant = 'default',
  author,
  date,
  href,
  onClick,
}: CardProps) {
  const badgeColor = badge?.color ? BADGE_COLORS[badge.color] : BADGE_COLORS.blue;

  const cardContent = (
    <article
      className={`card card--${variant}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-label={`Card: ${title}`}
    >
      {imageUrl && (
        <div className="card__image-wrapper">
          <img
            src={imageUrl}
            alt={imageAlt ?? title}
            className="card__image"
            loading="lazy"
          />
          {badge && (
            <span
              className="card__badge"
              style={{ '--badge-color': badgeColor } as React.CSSProperties}
            >
              {badge.label}
            </span>
          )}
        </div>
      )}

      <div className="card__body">
        <h2 className="card__title">{title}</h2>

        {description && variant !== 'compact' && (
          <p className="card__description">{description}</p>
        )}

        {(author || date) && (
          <footer className="card__footer">
            {author && (
              <div className="card__author">
                {author.avatarUrl ? (
                  <img
                    src={author.avatarUrl}
                    alt={`Avatar de ${author.name}`}
                    className="card__avatar"
                  />
                ) : (
                  <div className="card__avatar card__avatar--placeholder" aria-hidden="true">
                    {author.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="card__author-name">{author.name}</span>
              </div>
            )}
            {date && (
              <time className="card__date" dateTime={date}>
                {formatDate(date)}
              </time>
            )}
          </footer>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} className="card__link" aria-label={`Ler mais sobre: ${title}`}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
