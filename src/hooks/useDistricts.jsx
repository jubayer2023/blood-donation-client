import { useEffect, useState } from "react";

const useDistricts = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    fetch("./districts.json")
      .then((res) => res.json())
      .then((districtData) => {
        const { data } = districtData.find((item) => item?.type === "table");
        //   console.log(data);
        setDistricts(data);
      });
  }, []);

  return [districts];
};

export default useDistricts;
