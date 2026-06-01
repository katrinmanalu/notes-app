import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/local-data';

function NoteItem({ id, title, createdAt, body, archived, onHapus, onArsip, onBatalArsip }) {
  const PANJANG_MAKSIMAL = 150;

  function potongTeks(teks) {
    if (teks.length <= PANJANG_MAKSIMAL) return teks;
    return teks.slice(0, PANJANG_MAKSIMAL) + '...';
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">
          <Link to={`/catatan/${id}`}>{title}</Link>
        </h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{potongTeks(body)}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onHapus(id)}
        >
          Hapus
        </button>
        {archived ? (
          <button
            className="note-item__archive-button"
            onClick={() => onBatalArsip(id)}
          >
            Pindahkan
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={() => onArsip(id)}
          >
            Arsipkan
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteItem;