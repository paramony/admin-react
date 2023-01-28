import React from 'react';

const PaginatedTable = ({ data, dataInfo, additionField }) => {
  return (
    <>
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
          {data.map((d, index) => (
            <tr key={index}>
              {dataInfo.map((i, index) => (
                <td key={index}>{d[i.field]}</td>
              ))}
              {additionField ? <th>{additionField.elements(d.id)}</th> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PaginatedTable;
