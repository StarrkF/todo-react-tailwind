import PropTypes from 'prop-types';
import React from 'react';

function DataTable(props) {
  const { head, children } = props;

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="table-auto h-full  text-center w-full text-sm text-dark dark:text-light shadow-glow  shadow-neutral-200 dark:shadow-dark ">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="dark:bg-slate-800 dark:border-b-slate-600 bg-light border-b-2">
            {head.map((item) => (
              <th className="px-6 py-3" key={item} scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {
  head: PropTypes.arrayOf(PropTypes.string).isRequired,
  bodyLength: PropTypes.number,
  children: PropTypes.node,
};

DataTable.defaultProps = {
  bodyLength: 0,
};

export default DataTable;