import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useSingleUser from "../../../hooks/useSingleUser";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  //   console.log(user);
  const [userDetail] = useSingleUser();

  // console.log(userDetail);
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 md:px-0 md:w-3/4 mx-auto py-0 md:py-10">
      <Helmet>
        <title>Dashboard | Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-full">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={userDetail?.photo_url}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs font-serif text-white bg-pink-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <p className="mt-2 text-sm font-medium text-gray-800 ">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg space-y-3">
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-row ">
                Name :
                <span className="font-bold text-black ml-4 ">
                  {user.displayName}
                </span>
              </p>
              <p className="flex flex-row ">
                Email :
                <span className="font-bold text-black ml-4 ">{user.email}</span>
              </p>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-row ">
                District :
                <span className="font-bold text-black ml-4 ">
                  {userDetail?.district}
                </span>
              </p>
              <p className="flex flex-row ">
                Upazila :
                <span className="font-bold text-black ml-4 ">
                  {userDetail?.upazila}
                </span>
              </p>
              <p className="flex flex-row ">
                Blood Group :
                <span className="font-bold text-black ml-4 ">
                  {userDetail?.blood_group}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link to={`update-profile/${userDetail?._id}`}>
                <button className="btn btn-sm bg-rose-500 text-white hover:bg-slate-900 hover:text-amber-700 rounded-md mt-4">
                  Update Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
