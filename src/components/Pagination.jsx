import React from 'react';

const Pagination = ({ page, setPage }) => (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
      className="px-4 py-2 border rounded mr-2"
    >
      Previous
    </button>
    <button
      onClick={() => setPage((prev) => prev + 1)}
      className="px-4 py-2 border rounded"
    >
      Next
    </button>
  </div>
);

export default Pagination;
