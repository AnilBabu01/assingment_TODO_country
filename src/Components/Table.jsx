import React from "react";
import style from "./Table.module.css";
export default function Table({ tableData = [], itemDelete }) {
  const onClick = (item) => {
    itemDelete(item);
  };
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Code</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, pos) => (
            <tr key={pos}>
              <td>{pos + 1}</td>
              <td> {item.name} </td>
              <td> {item.code} </td>
              <td className={style.img}>
                <img src={item.flag} alt="Flag" />
                <button onClick={() => onClick(pos)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
