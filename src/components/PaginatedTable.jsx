import React, { useEffect, useState } from 'react';

let numOfPage = 2;
const PaginatedTable = ({ data, dataInfo, additionField }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let pCount = data.length / numOfPage;
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) {
      pArr = [...pArr, i];
    }
    setPages(pArr);
  }, []);

  useEffect(() => {
    let start = numOfPage * currentPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(data.slice(start, end));
  }, [currentPage]);

  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead classNameName="table-secondary">
          <tr>
            {dataInfo.map((i, index) => (
              <th key={index}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d, index) => (
            <tr key={index}>
              {dataInfo.map((i, index) => (
                <td key={index}>{d[i.field]}</td>
              ))}
              {additionField ? <th>{additionField.elements(d.id)}</th> : null}
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage === 1 ? 'disabled' : ''
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
          {pages.map((p, i) => (
            <li key={i} className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage === p ? 'alert-success' : ''
                }`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </span>
            </li>
          ))}

          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage === pageCount ? 'disabled' : ''
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginatedTable;
