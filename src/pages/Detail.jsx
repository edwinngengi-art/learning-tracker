import { useLocation, Link } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <div className="p-6">
        <p>No item found.</p>
        <Link to="/" className="text-blue-500">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white shadow rounded p-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {item.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {item.description}
        </p>

        {/* Extra Info Section (for better UI) */}
        <div className="mt-4 text-sm text-gray-500">
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Status:</strong> In Progress</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}