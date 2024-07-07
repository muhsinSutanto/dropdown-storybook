import { DownOutlined } from "@ant-design/icons";
import useDropdown from "../../hooks/useDropdown";
const Dropdown = ({ options = [], outlined = true }) => {
  const { selected, search, isSearchShowed, divRef } = useDropdown({
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
      >
        <DownOutlined className="text-xs text-gray-600 absolute right-3 top-2.5" />
      </div>
    </div>
  );
};

export default Dropdown;
