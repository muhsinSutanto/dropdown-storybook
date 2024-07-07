import { useState } from "react";
const useDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return selectedOption, setSelectedOption;
};

export default useDropdown;
