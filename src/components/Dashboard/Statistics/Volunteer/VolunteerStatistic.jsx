import { useQuery } from "@tanstack/react-query";
import { getVolunteerStats } from "../../../../api/volunteer";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import SalesLineChart from "../SalesLineChart";
import PieChartComponent from "../PieChartComponent";

const VolunteerStatistic = () => {
  const { data: stats = {} } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const data = await getVolunteerStats();
      return data;
    },
  });

  return (
    <div>
      <div className="mt-12">
        {/* small cards */}
        <div className="pb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Users Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total User
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {stats?.totalUsers}
              </h4>
            </div>
          </div>
          {/* Total Blood Donation Requests */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <GiPresent className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Requests
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {stats?.totalRequests}
              </h4>
            </div>
          </div>
          {/* Fundings Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Fundings
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                $ {stats?.totalFunds}
              </h4>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {/* Total Requests Graph */}
          <div className="w-full h-full bg-neutral-100 rounded-lg ">
            <SalesLineChart chartData={stats?.chartData} />
          </div>
          {/* PieChart */}
          <div className="w-full h-full overflow-hidden bg-neutral-100 rounded-lg min-w-fit p-2">
            <PieChartComponent pieChartData={stats?.pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerStatistic;
