import { DownOutlined, CloseCircleOutlined } from "@ant-design/icons";
import useDropdown from "../../hooks/useDropdown";
import DropdownOptions from "./DropdownOptions";
const Dropdown = ({
  options = [],
  outlined = true,
  withSearch = true,
  multipleSelect = true,
}) => {
  const {
    selected,
    search,
    isSearchShowed,
    divRef,
    handleSetOnFocus,
    handleSearchChange,
    dataOptions,
    handleAddSelected,
    setIsSearchShowed,
    handleRemoveSelected,
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
        {selected.map((option, index) => (
          <span
            key={index}
            className="flex bg-gray-100 text-sm rounded-3xl px-2 gap-1"
          >
            {option.label}
            <CloseCircleOutlined
              className="text-gray-500"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveSelected(option);
              }}
            />
          </span>
        ))}
        <DownOutlined className="text-xs text-gray-600 absolute right-3 top-2.5" />
      </div>

      {isSearchShowed && (
        <DropdownOptions
          withSearch={withSearch}
          search={search}
          handleSearchChange={handleSearchChange}
          options={dataOptions}
          handleClick={(option) => {
            handleAddSelected(option);
            if (!multipleSelect) {
              setIsSearchShowed(false);
            }
          }}
        />
      )}
    </div>
  );
};

export default Dropdown;
