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

  return {
    selected,
    search,
    isSearchShowed,
    divRef,
  };
};

export default useDropdown;
