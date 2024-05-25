const Pagination = ({
  userPage,
  pageArray,
  handleNextBtn,
  handlePreviousBtn,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div
      className={`flex justify-center items-center flex-wrap my-16 ${
        userPage ? "bg-neutral-200 p-3" : ""
      }`}
    >
      <button
        onClick={() => handlePreviousBtn(currentPage)}
        className="btn btn-sm btn-outline"
      >
        {"<<"}
      </button>
      {pageArray.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`btn btn-sm btn-outline transition hover:bg-red-600 hover:text-neutral-200 ${
            page === currentPage
              ? "bg-slate-800 border-none text-amber-700 shadow-md shadow-slate-900 ease-in-out "
              : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handleNextBtn(currentPage)}
        className="btn btn-sm btn-outline"
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
