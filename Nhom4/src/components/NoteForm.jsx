import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const NoteForm = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const { isDarkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      onAddNote({
        id: Date.now(),
        text: noteText,
        timestamp: new Date().toLocaleString('vi-VN')
      });
      setNoteText('');
    }
  };

  return (
    <form className={`note-form ${isDarkMode ? 'dark' : 'light'}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập ghi chú mới..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="note-input"
      />
      <button type="submit" className="add-btn">+ Thêm</button>
    </form>
  );
};

export default NoteForm;
