import { useState } from "react";
import { useDropdown } from "./hooks/useDropdown";
import { dummy_options } from "./helpers/const";

import Dropdown from "./components/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dropdown />
    </>
  );
}

export default App;
