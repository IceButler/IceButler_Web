import React from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Paging = ({ currentPage, size, count, handlePageChange }) => {
  
  const onPageChange = (page) => {
    handlePageChange(page);
  };

  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={size}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={onPageChange}
    />
  );
};

export default Paging;
