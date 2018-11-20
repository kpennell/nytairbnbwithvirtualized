import React from "react";
import Pagination from "react-paginating";

const PaginationComponent = ({
  total,
  resultsPerPage,
  pageCount,
  currentPage,
  handlePageChange
}) => {
  return (
    <Pagination
      total={total}
      limit={resultsPerPage}
      pageCount={pageCount}
      currentPage={currentPage}
    >
      {({
        pages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        previousPage,
        nextPage,
        totalPages,
        getPageItemProps
      }) => (
        <div>
          <button
            {...getPageItemProps({
              pageValue: 1,
              onPageChange: handlePageChange
            })}
          >
            first
          </button>

          {hasPreviousPage && (
            <button
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: handlePageChange
              })}
            >
              {"<"}
            </button>
          )}

          {pages.map(page => {
            let activePage = null;
            if (currentPage === page) {
              activePage = { backgroundColor: "#fdce09" };
            }
            return (
              <button
                key={page}
                style={activePage}
                {...getPageItemProps({
                  pageValue: page,
                  onPageChange: handlePageChange
                })}
              >
                {page}
              </button>
            );
          })}

          {hasNextPage && (
            <button
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: handlePageChange
              })}
            >
              {">"}
            </button>
          )}

          <button
            {...getPageItemProps({
              pageValue: totalPages,
              onPageChange: handlePageChange
            })}
          >
            last
          </button>
        </div>
      )}
    </Pagination>
  );
};

export default PaginationComponent;