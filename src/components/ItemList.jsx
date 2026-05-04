import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}