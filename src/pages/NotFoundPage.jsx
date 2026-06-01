import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="app-container">
      <header className="note-app__header">
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Link to="/arsip">Arsip</Link>
      </header>

      <main className="note-app__body">
        <div className="not-found">
          <h2>404</h2>
          <p>Halaman yang kamu cari tidak ada.</p>
          <Link to="/" className="not-found__back-button">
            Kembali ke beranda
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;