import React, { useState, useMemo } from "react";
import DashboardLayout from "../layout";

const Branch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // // Filter data based on search term
  // const filteredData = useMemo(() => {
  //   return data.filter((row) =>
  //     Object.values(row).some((value) =>
  //       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // }, [data, searchTerm]);

  // Paginate the data
  // const paginatedData = useMemo(() => {
  //   const startIndex = (currentPage - 1) * rowsPerPage;
  //   const endIndex = startIndex + rowsPerPage;
  //   return filteredData.slice(startIndex, endIndex);
  // }, [filteredData, currentPage, rowsPerPage]);

  // // Calculate the total number of pages
  // const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <DashboardLayout>
 <div className="p-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Data table */}
      
      


      {/* Pagination */}
      {/* <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </div>
    </DashboardLayout>
   
  );
};

export default Branch;
