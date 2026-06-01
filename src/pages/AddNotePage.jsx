import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function AddNotePage({ onTambah }) {
  const navigate = useNavigate();

  function handleTambah(catatan) {
    onTambah(catatan);
    navigate('/');
  }

  return (
    <div className="app-container">
      <header className="note-app__header">
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Link to="/arsip">Arsip</Link>
      </header>

      <main className="note-app__body">
        <NoteInput onTambah={handleTambah} />
      </main>
    </div>
  );
}

export default AddNotePage;