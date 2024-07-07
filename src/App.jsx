import { dummy_options } from "./helpers/const";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <Dropdown options={dummy_options} />
    </>
  );
}

export default App;
