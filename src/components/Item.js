export default function Item({ propsName, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={propsName.packed}
          onChange={() => onToggleItem(propsName.id)}
        ></input>
        <span
          style={propsName.packed === true ? { textDecoration: "line-through" } : {}}
        >
          {propsName.quantity} {propsName.description}
        </span>
        <button onClick={() => onDeleteItem(propsName.id)}>❌</button>
      </li>
    </div>
  );
}
