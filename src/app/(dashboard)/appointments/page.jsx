"use client";
export default function AppointmentsPage() {
  const appointments = [
    {
      id: 1,
      name: "Karim Ahmed",
      date: "27-09-2025",
      time: "2:00 PM",
      contact: "+01700000000",
      status: "Pending",
    },
    {
      id: 2,
      name: "Karim Ahmed",
      date: "27-09-2025",
      time: "3:00 PM",
      contact: "+01700000000",
      status: "Approved",
    },
    {
      id: 3,
      name: "Karim Ahmed",
      date: "27-09-2025",
      time: "3:00 PM",
      contact: "+01700000000",
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Karim Ahmed",
      date: "27-09-2025",
      time: "4:00 PM",
      contact: "+01700000000",
      status: "Pending",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Approved: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Appointment List
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                #
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Contact
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt, index) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-800">
                  {appt.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{appt.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{appt.time}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {appt.contact}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[appt.status]}`}
                  >
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
