import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-bold text-black">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>

      <Link
        to={`/item/${item.id}`}
        state={{ item }}   // ✅ THIS IS THE FIX
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}