import React from "react";

function Speakers() {
  return (
    <div>
      <table className="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Speakers</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dr. Lemmi Guta</td>
            <td>Adama Science and Technology University</td>
          </tr>
        </tbody>
      </table>
      <a href="/speakers/add" className="btn btn-success fw-bold">
        <i className="bi bi-plus-circle"></i> Add Speaker
      </a>
    </div>
  );
}

export default Speakers;
