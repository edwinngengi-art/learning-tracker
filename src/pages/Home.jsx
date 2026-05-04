 import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Study components and hooks",
    },
    {
      id: 2,
      title: "Build Portfolio",
      description: "Create personal projects",
    },
  ]);

  // ✅ FIXED: missing state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      description,
    };

    setItems([...items, newItem]);
    setTitle("");
    setDescription("");
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* FORM */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-bold mb-2">Add Learning Item</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border mb-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border mb-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* SEARCH */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* LIST */}
      <ItemList items={filteredItems} />
    </div>
  );
}