import { memo } from 'react';

type CardActionsProps = {
  title: string;
  subtitle: string;
};

export const CardActions = memo(function CardActions() {
  return (
    <div className="card-actions">
      <p>Actions</p>
    </div>
  );
});
