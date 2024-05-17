import { useEffect, useState } from "react";

const useUpazila = () => {
  const [upazila, setUpazila] = useState([]);

  useEffect(() => {
    fetch("./upazila.json")
      .then((res) => res.json())
      .then((upazilaData) => {
        const { data } = upazilaData.find((item) => item?.type === "table");
        //   console.log(data);
        setUpazila(data);
      });
  }, []);

  return [upazila];
};

export default useUpazila;
