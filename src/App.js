const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
console.log(initialItems);

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 🙌trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <Item propsName={i} />
        ))}
      </ul>
    </div>
  );
}

function Item({ propsName }) {
  console.log(propsName.packed);
  return (
    <div>
      <li>
        <span
          style={
            propsName.packed === true ? { textDecoration: "line-through" } : {}
          }
        >
          {propsName.quantity} {propsName.description}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X (%)</em>
    </footer>
  );
}
