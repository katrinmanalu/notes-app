import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/local-data';

function DetailPage({ catatan, onHapus, onArsip, onBatalArsip }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const catatanDipilih = catatan.find((item) => item.id === id);

  if (!catatanDipilih) {
    return (
      <div className="app-container">
        <header className="note-app__header">
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Link to="/arsip">Arsip</Link>
        </header>
        <main className="note-app__body">
          <p>Catatan tidak ditemukan.</p>
          <Link to="/">Kembali ke beranda</Link>
        </main>
      </div>
    );
  }

  function handleHapus() {
    onHapus(catatanDipilih.id);
    navigate('/');
  }

  function handleArsip() {
    onArsip(catatanDipilih.id);
    navigate('/');
  }

  function handleBatalArsip() {
    onBatalArsip(catatanDipilih.id);
    navigate('/arsip');
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
        <section className="note-detail">
          <h3 className="note-detail__title">{catatanDipilih.title}</h3>
          <p className="note-detail__date">
            {showFormattedDate(catatanDipilih.createdAt)}
          </p>
          <div className="note-detail__body">{catatanDipilih.body}</div>

          <div className="note-detail__action">
            <button
              className="note-detail__delete-button"
              onClick={handleHapus}
            >
              Hapus
            </button>
            {catatanDipilih.archived ? (
              <button
                className="note-detail__archive-button"
                onClick={handleBatalArsip}
              >
                Pindahkan ke Aktif
              </button>
            ) : (
              <button
                className="note-detail__archive-button"
                onClick={handleArsip}
              >
                Arsipkan
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetailPage;