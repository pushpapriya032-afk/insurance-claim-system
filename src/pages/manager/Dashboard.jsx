export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">
        Manager Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow rounded-xl p-5">
          <h3>Waiting Approval</h3>
          <p className="text-3xl font-bold">20</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Approved</h3>
          <p className="text-3xl font-bold text-green-600">180</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Rejected</h3>
          <p className="text-3xl font-bold text-red-600">15</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>High Value Claims</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
      </div>
    </div>
  );
}