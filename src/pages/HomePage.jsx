import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';

function HomePage({ catatan, onHapus, onArsip }) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const catatanTerfilter = catatan.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="note-app__header">
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Link to="/arsip">Arsip</Link>
      </header>

      <main className="note-app__body">
        <section className="notes-app__active">
          <h2>Catatan Aktif</h2>
          <NoteSearch />
          <NoteList
            catatan={catatanTerfilter}
            onHapus={onHapus}
            onArsip={onArsip}
          />
        </section>
      </main>

      <Link to="/catatan/baru" className="note-app__add-button">
        +
      </Link>
    </div>
  );
}

export default HomePage;