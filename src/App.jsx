import { dummy_options } from "./helpers/const";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="m-4">
      <Dropdown options={dummy_options} />
    </div>
  );
}

export default App;
