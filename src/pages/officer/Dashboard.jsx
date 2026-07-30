export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">
        Claim Officer Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow rounded-xl p-5">
          <h3>Total Claims</h3>
          <p className="text-3xl font-bold">150</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Pending Verification</h3>
          <p className="text-3xl font-bold text-yellow-500">32</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Approved</h3>
          <p className="text-3xl font-bold text-green-600">95</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Rejected</h3>
          <p className="text-3xl font-bold text-red-600">23</p>
        </div>
      </div>
    </div>
  );
}