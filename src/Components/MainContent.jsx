import React, { useState } from "react";
import Header from "./Header";
import Form from "./NoteForm";
import NoteDatas from "./NoteDatas";
import NoteArchive from "./NoteArchive";
import { datasNotes, dateNotes } from "../utils/datas"; // Mengimpor data dari berkas data.js

function MainContent() {
  const initialNotes = datasNotes().map((note) => ({
    ...note,
    createdAt: dateNotes(note.createdAt),
  }));

  const [notes, setNotes] = useState(initialNotes); // State untuk menyimpan catatan
  const [archivedNotes, setArchivedNotes] = useState([]); // State untuk catatan yang diarsipkan

  // Fungsi untuk menambahkan catatan ke daftar catatan
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Fungsi untuk menghapus catatan berdasarkan ID
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);

    const updatedNotesArchive = archivedNotes.filter((note) => note.id !== id);
    setArchivedNotes(updatedNotesArchive);
  };

  // Fungsi untuk mengarsipkan catatan
  const archiveNote = (noteId) => {
    const archivedNote = notes.find((note) => note.id === noteId);
    if (archivedNote) {
      // Menambahkan catatan ke daftar catatan yang diarsipkan
      setArchivedNotes([...archivedNotes, archivedNote]);
      // Menghapus catatan dari daftar catatan aktif
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    }
  };

  // Fungsi untuk memindahkan catatan dari arsip ke catatan aktif
  const moveFromArchiveToNotes = (noteId) => {
    const archivedNote = archivedNotes.find((note) => note.id === noteId);
    if (archivedNote) {
      // Menambahkan catatan ke daftar catatan aktif
      setNotes([...notes, archivedNote]);

      // Menghapus catatan dari daftar catatan yang diarsipkan
      const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== noteId);
      setArchivedNotes(updatedArchivedNotes);
    }
  };

  return (
    <div>
      <Header />
      <Form addNotes={addNote} />
      <h1 className="text-2xl mt-9 mx-16">Catatan Aktif</h1>
      <div className="flex flex-wrap gap-1">{notes.length === 0 ? <p className="mx-16">Tidak ada catatan</p> : notes.map((note) => <NoteDatas key={note.id} notes={note} onDelete={deleteNote} onArchive={archiveNote} />)}</div>
      <h1 className="text-2xl mt-9 mx-16">Arsip</h1>
      <div className="flex flex-wrap gap-1">
        {archivedNotes.length === 0 ? <p className="mx-16">Tidak ada catatan</p> : archivedNotes.map((note) => <NoteArchive key={note.id} notes={note} onDelete={deleteNote} onMove={moveFromArchiveToNotes} />)}
      </div>

      <footer>
        <p className="flex items-center justify-center mt-6">&copy; 2023 Blacknoys_Mc</p>
      </footer>
    </div>
  );
}

export default MainContent;
