import { useState, useRef } from "react";
const useDropdown = ({
  options = [],
  withSearch = true,
  multipleSelect = true,
}) => {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearchShowed, setIsSearchShowed] = useState(false);
  const divRef = useRef(null);

  const handleSetOnFocus = () => {
    setIsSearchShowed(true);
    console.log("onFocus");
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const dataOptions = withSearch
    ? options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const handleAddSelected = (option) => {
    if (
      selected.some((selectedOption) => selectedOption.value === option.value)
    ) {
      return;
    }

    setSelected(multipleSelect ? [...selected, option] : [option]);
  };

  const handleRemoveSelected = (option) => {
    setSelected(
      selected.filter((selectedOption) => selectedOption.value !== option.value)
    );
  };

  return {
    selected,
    search,
    isSearchShowed,
    divRef,
    handleSetOnFocus,
    handleSearchChange,
    dataOptions,
    handleAddSelected,
    handleRemoveSelected,
  };
};

export default useDropdown;
