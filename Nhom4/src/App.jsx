import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './index.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const { isDarkMode } = useContext(ThemeContext);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header noteCount={notes.length} />
      <main className="main-container">
        <NoteForm onAddNote={handleAddNote} />
        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </main>
    </div>
  );
}

export default App;
