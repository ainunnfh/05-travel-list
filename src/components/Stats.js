export default function Stats({ items }) {
  const itemLength = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentange = Math.round((itemPacked / itemLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentange === 100
          ? "You got everything! Ready to go✈"
          : ` 💼You have ${itemLength} items on your list, and you already packed
        ${itemPacked} (${percentange}%)` ? 'Start Adding some items to your packing list🚀' : ''}
      </em>
    </footer>
  );
}
