export default function DashboardPage() {
  return (
    <section className="mt-8">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's an overview of the clinic today.</p>
      </header>

      {/* Dashboard Cards / Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Appointments Today" value="24" />
        <DashboardCard title="Patients Checked In" value="18" />
        <DashboardCard title="Available Doctors" value="5" />
        <DashboardCard title="Revenue Today" value="$3,200" />
      </div>
    </section>
  );
}

// Reusable card component
function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}
