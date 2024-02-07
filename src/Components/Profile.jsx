const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="w-1/5  bg-slate-50 my-0 mx-auto rounded  pt-4">
      <div className="text-center text-base text-slate-500">
        <img src={avatar} alt="User avatar" className=" w-5/12 mx-auto pb-3" />
        <p className="text-xl font-bold text-slate-900 pb-4">{username}</p>
        <p className="pb-4">@{tag}</p>
        <p className="pb-4">{location}</p>
      </div>

      <ul className="flex items-center  justify-center bg-slate-200 divide-x-2 divide-slate-500 text-xs text-slate-500">
        <li className="w-[calc(100%/3)] text-center ">
          <span>Followers</span>
          <br />
          <span className="text-base text-slate-800 font-bold">
            {stats.followers}
          </span>
        </li>
        <li className="w-[calc(100%/3)] text-center">
          <span>Views</span>
          <br />
          <span className="text-base text-slate-800 font-bold">
            {stats.views}
          </span>
        </li>
        <li className="w-[calc(100%/3)] text-center">
          <span>Likes</span>
          <br />
          <span className="text-base text-slate-800 font-bold">
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
