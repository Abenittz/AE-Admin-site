import React from "react";

function Sponsors() {
  return (
    <div>
      <table class="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Sponsors</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sponsor Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Google</td>
          </tr>
        </tbody>
      </table>
      <a href="/sponsors/add" className="btn btn-success fw-bold">
        <i class="bi bi-plus-circle"></i> Add Sponsor
      </a>
    </div>
  );
}

export default Sponsors;
