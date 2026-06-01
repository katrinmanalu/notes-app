import React from 'react';
import { useSearchParams } from 'react-router-dom';

function NoteSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function handleCari(e) {
    const nilai = e.target.value;
    if (nilai.trim()) {
      setSearchParams({ keyword: nilai });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword}
        onChange={handleCari}
        className="note-search__input"
      />
    </div>
  );
}

export default NoteSearch;