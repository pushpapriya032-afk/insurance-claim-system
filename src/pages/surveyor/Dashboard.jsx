export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">
        Surveyor Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow rounded-xl p-5">
          <h3>Assigned Claims</h3>
          <p className="text-3xl font-bold">18</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Today's Inspection</h3>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Completed</h3>
          <p className="text-3xl font-bold text-green-600">10</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Pending Report</h3>
          <p className="text-3xl font-bold text-orange-500">8</p>
        </div>
      </div>
    </div>
  );
}