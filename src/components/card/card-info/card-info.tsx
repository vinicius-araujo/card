import { memo } from 'react';

type CardInfoProps = {
  title: string;
  subtitle: string;
};

export const CardInfo = memo(function CardInfo({ title, subtitle }: CardInfoProps) {
  return (
    <div>
      <div className="card-row-count--title">{title}</div>
      <div className="highlight">{subtitle}</div>
    </div>
  );
});
