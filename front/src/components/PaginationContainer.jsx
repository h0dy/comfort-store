import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, idx) => {
    return idx + 1;
  });

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePage = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center">
      <div className="join">
        <button
          className="btn btn-md join-item"
          onClick={() => {
            let prevPage = (page - 1) % pageCount;
            return handlePage(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              key={pageNumber}
              onClick={() => handlePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-md join-item"
          onClick={() => {
            let nextPage = (page + 1) % (pageCount + 1);
            if (nextPage === 0) nextPage = pageCount;
            return handlePage(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
