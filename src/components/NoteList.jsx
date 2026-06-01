import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ catatan, onHapus, onArsip, onBatalArsip }) {
  if (catatan.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {catatan.map((item) => (
        <NoteItem
          key={item.id}
          {...item}
          onHapus={onHapus}
          onArsip={onArsip}
          onBatalArsip={onBatalArsip}
        />
      ))}
    </div>
  );
}

export default NoteList;