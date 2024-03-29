/* eslint-disable react/prop-types */
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="w-1/5  bg-slate-50 mt-0 mx-auto rounded  pt-4 mb-6">
      <div className="text-center text-base text-slate-500">
        <img src={avatar} alt="User avatar" className=" w-5/12 mx-auto pb-3" />
        <p className="text-xl font-bold text-slate-900 pb-4">{username}</p>
        <p className="pb-4">@{tag}</p>
        <p className="pb-4">{location}</p>
      </div>

      <ul className="flex items-center  justify-center bg-slate-200 divide-x-2 divide-slate-500 text-xs text-slate-500">
        <li className="w-[calc(100%/3)] text-center flex flex-col ">
          <span>Followers</span>

          <span className="text-base text-slate-800 font-bold">
            {stats.followers}
          </span>
        </li>
        <li className="w-[calc(100%/3)] text-center flex flex-col">
          <span>Views</span>

          <span className="text-base text-slate-800 font-bold">
            {stats.views}
          </span>
        </li>
        <li className="w-[calc(100%/3)] text-center flex flex-col">
          <span>Likes</span>

          <span className="text-base text-slate-800 font-bold">
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
