import React from "react";

import { SearchOutlined } from "@ant-design/icons";

const DropdownOptions = ({
  withSearch,
  search,
  handleSearchChange,
  options,
  handleClick,
}) => {
  console.log("test", search);

  return (
    <div className="shadow-2xl absolute bg-white w-full z-[1100]">
      {withSearch && (
        <div className="w-full flex gap-1 border-gray-300 border-solid border-[1px] p-1 rounded-md">
          <SearchOutlined className="text-gray-600 text-sm pl-2" />
          <input
            className="flex-1 focus:outline-none"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      )}

      <div className="w-full gap-1 border-gray-300 border-solid border-[1px] p-1 max-h-[280px] overflow-y-auto">
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="hover:bg-green-100 cursor-pointer"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownOptions;
