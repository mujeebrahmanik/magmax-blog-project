'use client';

import Link from 'next/link';

export default function NumberedPagination({ currentPage, totalPages }) {
  // Don't show pagination if only one page
  if (totalPages <= 1) return null;

  // Generate array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          ←
        </Link>
      ) : (
        <span className="px-4 py-2 rounded bg-gray-200 text-gray-400 cursor-not-allowed">
          ←
        </span>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`px-4 py-2 rounded transition ${
            currentPage === page
              ? 'bg-gray-800 text-white font-bold'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          →
        </Link>
      ) : (
        <span className="px-4 py-2 rounded bg-gray-200 text-gray-400 cursor-not-allowed">
          →
        </span>
      )}
    </div>
  );
}