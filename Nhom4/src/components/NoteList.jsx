import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const NoteList = ({ notes, onDeleteNote }) => {
  const { isDarkMode } = useContext(ThemeContext);

  if (notes.length === 0) {
    return (
      <div className={`note-list empty ${isDarkMode ? 'dark' : 'light'}`}>
        <p>Không có ghi chú nào. Hãy thêm ghi chú mới!</p>
      </div>
    );
  }

  return (
    <div className={`note-list ${isDarkMode ? 'dark' : 'light'}`}>
      {notes.map((note) => (
        <div key={note.id} className={`note-item ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="note-content">
            <p className="note-text">{note.text}</p>
            <span className="note-time">{note.timestamp}</span>
          </div>
          <button
            className="delete-btn"
            onClick={() => onDeleteNote(note.id)}
            title="Xóa ghi chú"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
