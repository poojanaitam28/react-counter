import "./App.css";
import Items from "./components/Items";

function App() {
  const item = { name: "lucifer" };
  // {title: "Lucifer"},
  // {title: "Stranger Things"},
  // {title: "Breaking Bad"},

  return (
    <div className="App">
      <Items items={item} />
    </div>
  );
}

export default App;
