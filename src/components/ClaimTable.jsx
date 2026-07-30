import "../assets/styles/ClaimTable.css";

function ClaimTable() {
  return (
    <div className="table-container">

      <h2>Recent Claims</h2>

      <table>

        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Claim Type</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>CLM1001</td>
            <td>Vehicle</td>
            <td>25-Jul-2026</td>
            <td>
              <span className="pending">
                Pending
              </span>
            </td>
            <td>
              <button className="view-btn">
                View
              </button>
            </td>
          </tr>

          <tr>
            <td>CLM1002</td>
            <td>Health</td>
            <td>22-Jul-2026</td>
            <td>
              <span className="approved">
                Approved
              </span>
            </td>
            <td>
              <button className="view-btn">
                View
              </button>
            </td>
          </tr>

          <tr>
            <td>CLM1003</td>
            <td>Home</td>
            <td>20-Jul-2026</td>
            <td>
              <span className="rejected">
                Rejected
              </span>
            </td>
            <td>
              <button className="view-btn">
                View
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ClaimTable;