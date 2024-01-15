import React, { useState } from "react";

function NoteForm({ addNotes }) {
  // State untuk menyimpan nilai input
  const [judul, setJudul] = useState("");
  const [catatan, setCatatan] = useState("");
  

  // Fungsi untuk menghandle perubahan nilai input judul
  const handleJudulChange = (e) => {
    setJudul(e.target.value);
  };

  // Fungsi untuk menghandle perubahan nilai input catatan
  const handleCatatanChange = (e) => {
    setCatatan(e.target.value);
  };

  // Fungsi untuk menghandle pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formatDate = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Membuat objek catatan
    const newNote = {
      id: +new Date(), // Gunakan timestamp sebagai ID
      title: judul,
      body: catatan,
      createdAt: new Date().toLocaleDateString("id-ID", formatDate),
      archived: false,
    };

    // Menambahkan catatan ke daftar catatan
    addNotes(newNote);

    // Mereset nilai input setelah catatan ditambahkan
    setJudul("");
    setCatatan("");

    console.log(newNote);
  };

  return (
    <div className="mx-16 mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Judul</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Tuliskan Judul..."
            value={judul}
            onChange={handleJudulChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Catatan</label>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tuliskan Catatan..."
            value={catatan}
            onChange={handleCatatanChange}
          ></textarea>
        </div>
        <button className="bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Simpan</button>
      </form>
    </div>
  );
}

export default NoteForm;
