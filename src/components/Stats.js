export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list ✍️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>Everything is packed! Ready to go ✈️</em>
      ) : (
        <em>
          👜 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} {`(${packedPercentage}%)`}
        </em>
      )}
    </footer>
  );
}
