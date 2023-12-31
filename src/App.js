import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Math.random() };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🙌trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item
            propsName={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ propsName, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={propsName.packed}
          onChange={() => onToggleItem(propsName.id)}
        ></input>
        <span
          style={
            propsName.packed === true ? { textDecoration: "line-through" } : {}
          }
        >
          {propsName.quantity} {propsName.description}
        </span>
        <button onClick={() => onDeleteItem(propsName.id)}>❌</button>
      </li>
    </div>
  );
}

function Stats({ items }) {
  const itemLength = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentange = Math.round((itemPacked / itemLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentange === 100
          ? "You got everything! Ready to go✈"
          : ` 💼You have ${itemLength} items on your list, and you already packed
        ${itemPacked} (${percentange}%)`}
      </em>
    </footer>
  );
}
