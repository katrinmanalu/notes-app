import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';

function ArchivePage({ catatan, onHapus, onBatalArsip }) {
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
        <section className="notes-app__archive">
          <h2>Catatan Terarsip</h2>
          <NoteSearch />
          {catatanTerfilter.length === 0 && !keyword ? (
            <div className="notes-list__empty-message">
              <p>Arsip kosong</p>
            </div>
          ) : (
            <NoteList
              catatan={catatanTerfilter}
              onHapus={onHapus}
              onBatalArsip={onBatalArsip}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default ArchivePage;