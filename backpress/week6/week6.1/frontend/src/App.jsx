import { useState } from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header title="hello1" />
      <Header title="hello2" />
    </>
  );
}
function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
}

export default App;
