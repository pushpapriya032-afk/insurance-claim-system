export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">
        Finance Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow rounded-xl p-5">
          <h3>Pending Payments</h3>
          <p className="text-3xl font-bold">24</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Paid Claims</h3>
          <p className="text-3xl font-bold text-green-600">210</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Total Amount</h3>
          <p className="text-3xl font-bold">$450K</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3>Failed Transactions</h3>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>
    </div>
  );
}