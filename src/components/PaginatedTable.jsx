import React, { useEffect, useState } from 'react';

const PaginatedTable = ({
  children,
  data,
  dataInfo,
  additionField,
  searchParams,
  numOfPage,
}) => {
  const [initData, setInitData] = useState([data]);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState('');

  useEffect(() => {
    let pCount = initData.length / numOfPage;
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) {
      pArr = [...pArr, i];
    }
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start = numOfPage * currentPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
              onChange={(e) => setSearchChar(e.target.value)}
            />
            <span className="input-group-text">جستجو</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
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

      {pages.length > 1 ? (
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
      ) : null}
    </>
  );
};

export default PaginatedTable;
