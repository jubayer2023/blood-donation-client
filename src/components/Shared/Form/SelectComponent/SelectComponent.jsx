// import { useState } from "react";
import Select from "react-select";

const SelectComponent = ({ options, selectedOption, setSelectedOption }) => {
  //   const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </>
  );
};

export default SelectComponent;
