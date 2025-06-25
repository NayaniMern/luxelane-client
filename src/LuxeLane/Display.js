import React from "react";

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="text-center mt-4 ">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th className="border rounded fs-5 px-3  py-2 bg-light text-dark">{days}</th>
            <th className="border rounded fs-5 px-3 py-2 bg-light text-dark">{hours}</th>
            <th className="border rounded fs-5 px-3 py-2 bg-light text-dark">{minutes}</th>
            <th className="border rounded fs-5 px-3 py-2 bg-light text-dark">{seconds}</th>
          </tr>
          <tr>
            <td className="fw-bold fs-5 " style={{color:"	#b8860b", textTransform:"uppercase"}}>Dy</td>
            <td className="fw-bold  fs-5 " style={{color:"	#b8860b", textTransform:"uppercase"}}>Hr</td>
            <td className="fw-bold fs-5 " style={{color:"	#b8860b", textTransform:"uppercase"}}>Min</td>
            <td className="fw-bold  fs-5 " style={{color:"	#b8860b", textTransform:"uppercase"}}>Sec</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
