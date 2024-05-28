import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const FilterTab = ({ status, selected, address }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  let currentQuery = {};
  const handleStatus = () => {
    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }
    const updatedQuery = { ...currentQuery, status: status };

    const searchQuery = qs.stringifyUrl({
      url: `/dashboard/${address}`,
      query: updatedQuery,
    });

    navigate(searchQuery);
  };

  return (
    <a
      onClick={handleStatus}
      role=""
      className={` tab border-[1px] border-gray-600 capitalize transition font-serif  ${
        selected
          ? "bg-slate-800 text-amber-700 font-semibold shadow-lg shadow-slate-500  delay-200 ease-linear"
          : ""
      }`}
    >
      {status}
    </a>
  );
};

export default FilterTab;
