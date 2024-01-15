import React from "react";

function NoteDatas({ notes, onDelete, onArchive }) {
  return (
    <div className="flex flex-wrap mt-9 mx-auto lg:w-auto sm:w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <p className="mb-3 text-2xl font-bold tracking-tight text-gray-900 ">{notes.title}</p>
        <p className="mb-3 text-gray-400">{notes.createdAt}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{notes.body}</p>
        <div className="flex justify-center">
          <button
            onClick={() => onDelete(notes.id)} // Handle hapus catatan
            className="mr-5 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Hapus
          </button>
          <button
            onClick={() => {
              onArchive(notes.id); // Memanggil fungsi archiveNote dengan ID catatan
            }}
            className="bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Arsipkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteDatas;
