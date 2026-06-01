import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getInitialData } from './utils/local-data';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [catatanList, setCatatanList] = useState(getInitialData());

  function handleTambahCatatan(catatan) {
    const catatanBaru = {
      id: `notes-${+new Date()}`,
      archived: false,
      createdAt: new Date().toISOString(),
      ...catatan,
    };
    setCatatanList((prev) => [...prev, catatanBaru]);
  }

  function handleHapusCatatan(id) {
    setCatatanList((prev) => prev.filter((catatan) => catatan.id !== id));
  }

  function handleArsipCatatan(id) {
    setCatatanList((prev) =>
      prev.map((catatan) =>
        catatan.id === id ? { ...catatan, archived: true } : catatan
      )
    );
  }

  function handleBatalArsipCatatan(id) {
    setCatatanList((prev) =>
      prev.map((catatan) =>
        catatan.id === id ? { ...catatan, archived: false } : catatan
      )
    );
  }

  const catatanAktif = catatanList.filter((c) => !c.archived);
  const catatanArsip = catatanList.filter((c) => c.archived);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            catatan={catatanAktif}
            onHapus={handleHapusCatatan}
            onArsip={handleArsipCatatan}
          />
        }
      />
      <Route
        path="/arsip"
        element={
          <ArchivePage
            catatan={catatanArsip}
            onHapus={handleHapusCatatan}
            onBatalArsip={handleBatalArsipCatatan}
          />
        }
      />
      <Route
        path="/catatan/baru"
        element={<AddNotePage onTambah={handleTambahCatatan} />}
      />
      <Route
        path="/catatan/:id"
        element={
          <DetailPage
            catatan={catatanList}
            onHapus={handleHapusCatatan}
            onArsip={handleArsipCatatan}
            onBatalArsip={handleBatalArsipCatatan}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;