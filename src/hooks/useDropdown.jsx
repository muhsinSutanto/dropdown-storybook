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

  return {
    selected,
    search,
    isSearchShowed,
    divRef,
    handleSetOnFocus,
    handleSearchChange,
  };
};

export default useDropdown;
