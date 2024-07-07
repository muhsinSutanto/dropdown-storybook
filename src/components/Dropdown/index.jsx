import { DownOutlined } from "@ant-design/icons";
import useDropdown from "../../hooks/useDropdown";
import DropdownOptions from "./DropdownOptions";
const Dropdown = ({ options = [], outlined = true, withSearch = true }) => {
  const {
    selected,
    search,
    isSearchShowed,
    divRef,
    handleSetOnFocus,
    handleSearchChange,
  } = useDropdown({
    options,
    withSearch: true,
    multipleSelect: true,
  });

  return (
    <div ref={divRef} className="relative">
      <div
        className={`w-full h-[34px] flex gap-1 ${
          outlined ? "border-gray-300" : "bg-gray-300"
        } rounded-md border-solid border-2 p-1 mb-1`}
        onClick={handleSetOnFocus}
      >
        <DownOutlined className="text-xs text-gray-600 absolute right-3 top-2.5" />
      </div>

      {isSearchShowed && (
        <DropdownOptions
          withSearch={withSearch}
          search={search}
          handleSearchChange={handleSearchChange}
        />
      )}
    </div>
  );
};

export default Dropdown;
