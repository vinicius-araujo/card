import { memo } from 'react';
import { MdFolderOpen } from 'react-icons/md';

// TODO reuse this type
type CardTitleProps = {
  title: string;
  subtitle: string;
};

export const CardTitle = memo(function CardTitle({ title, subtitle }: CardTitleProps) {
  return (
    <div className="card-title">
      <div className="card-title--data">
        <h4 className="card-title--text">{title}</h4>
        <div className="card-title--folder-name">
          <span className="card-icon-text">
            <MdFolderOpen size={24} />
            <span>{subtitle}</span>
          </span>
        </div>
      </div>
    </div>
  );
});
