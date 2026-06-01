import React, { useState } from 'react';

const BATAS_KARAKTER = 50;

function NoteInput({ onTambah }) {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  function handleJudulChange(e) {
    const nilai = e.target.value;
    if (nilai.length <= BATAS_KARAKTER) {
      setJudul(nilai);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!judul.trim() || !isi.trim()) return;

    onTambah({ title: judul, body: isi });
    setJudul('');
    setIsi('');
  }

  const sisaKarakter = BATAS_KARAKTER - judul.length;

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <h2 className="note-input__title">Buat Catatan</h2>
      <div className="note-input__title__char-limit">
        <p>Sisa karakter: {sisaKarakter}</p>
      </div>
      <input
        type="text"
        className="note-input__title__input"
        placeholder="Judul catatan"
        value={judul}
        onChange={handleJudulChange}
        required
      />
      <textarea
        className="note-input__body__input"
        placeholder="Tuliskan catatanmu di sini ..."
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
        rows={8}
        required
      />
      <button type="submit" className="note-input__submit-button">
        Buat
      </button>
    </form>
  );
}

export default NoteInput;