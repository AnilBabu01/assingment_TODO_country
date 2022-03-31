import React,{useRef} from "react";
import style from "./Table.module.css";
export default function Table({ tableData = [], itemDelete }) {
  const onClick = (item) => {
    itemDelete(item);
  };
  const ref=useRef();
  const edit=()=>{
     
     ref.current.click();

  }

  return (
    <>
        
<button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
                <button onClick={() => edit(pos)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
