import { useState } from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { CardActions, CardInfo, CardIntegration, CardTitle } from './';

import './card.css';

// TODO create a tooltip component
// TODO create a integration
// TODO usereducer + context API
// TODO think of better folder structure and name
// TODO responsive

export function Card() {
  const [isInfoOpened, setIsInfoOpened] = useState<null | boolean>();
  return (
    <div className="card">
      <CardTitle title="Template Name" subtitle="Folder Name" />
      <div
        className="card-icon"
        onClick={() => {
          setIsInfoOpened(!isInfoOpened);
        }}
      >
        <MdInfoOutline size={24} />
      </div>
      <div className="card-info">
        <CardInfo title="Row count" subtitle="12k" />
        <CardInfo title="Last Updated" subtitle="3h Ago" />
        <CardIntegration />
      </div>
      <CardActions />
    </div>
  );
}
