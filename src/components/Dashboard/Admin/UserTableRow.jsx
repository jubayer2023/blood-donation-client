import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserTableRow = ({ person, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <tr>
        <td className=" flex items-center justify-center">
          <label>{index + 1}</label>
        </td>
        <td>
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {/* ===============================TODO========================= */}
                <img src={person?.photo_url} />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{person?.name}</div>
            <div className="text-sm ">{person?.email}</div>
          </div>
        </td>
        <td>
          <span className="bg-rose-100 rounded-xl capitalize font-serif px-1 py-[2px] flex items-center justify-center">
            {person?.status}
          </span>
        </td>

        <td className="w-[120px]">
          <span className="bg-green-200  rounded-xl capitalize font-serif px-1 py-[2px] flex items-center justify-center">
            {person?.role}
          </span>
        </td>
        <td className=" flex items-center justify-center relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            // onBlur={() => setIsOpen(false)}
            className="cursor-pointer btn btn-sm bg-rose-300"
          >
            <BsThreeDotsVertical></BsThreeDotsVertical>
          </button>
          <ul
            tabIndex={0}
            className={`absolute -z-10 top-5 right-16 md:right-20 lg:right-24 menu p-3 flex flex-col gap-0 shadow-md bg-base-100 rounded-box w-40 transform ${
              isOpen
                ? "z-10  transition-all delay-100 ease-linear"
                : "  transition-all delay-150 ease-linear"
            }`}
          >
            {person?.status === "active" ? (
              <li>
                <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                  Block
                </span>
              </li>
            ) : (
              <li>
                <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                  Unblock
                </span>
              </li>
            )}
            {/* ====== 1st condition====== */}
            {person?.role === "donor" && (
              <>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Admin
                  </span>
                </li>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Volunteer
                  </span>
                </li>
              </>
            )}
            {/* ====2nd condition=== */}
            {person?.role === "volunteer" && (
              <>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Admin
                  </span>
                </li>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Donor
                  </span>
                </li>
              </>
            )}
            {/* ====3rd condition==== */}
            {person?.role === "admin" && (
              <>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Donor
                  </span>
                </li>
                <li>
                  <span className="btn btn-sm rounded-md bg-neutral-300 text-gray-600 hover:bg-slate-800 hover:text-amber-700">
                    Volunteer
                  </span>
                </li>
              </>
            )}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default UserTableRow;
