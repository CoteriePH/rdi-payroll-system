import React, { useEffect } from "react";
import { useTable } from "react-table";
import { Text } from "@/styles";
import { TableStyles } from "./styles.js";
import { useFlexLayout } from "react-table/dist/react-table.development";

const Table = ({ showLength = false, columns, data, setSelectedRows }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns, data }, useFlexLayout);
  useEffect(() => {
    if (setSelectedRows) {
      setSelectedRows(selectedFlatRows);
    }
  }, [selectedFlatRows]);

  return (
    <TableStyles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showLength ? (
        <div>
          <Text color="violet" fontFamily="avenirRoman" size="xs">
            {selectedRowIds ? Object.keys(selectedRowIds).length : 0}{" "}
            employee(s)
          </Text>
          <Text fontFamily="avenirRoman" size="xs">
            {" "}
            selected
          </Text>
        </div>
      ) : null}

      {/* selectedIds: selectedFlatRows.map((d) => d.original.id) */}
    </TableStyles>
  );
};

export default Table;
