/* eslint-disable react/prop-types */
const FriendListItem = ({ friend }) => {
  return (
    <li className="flex flex-row items-center bg-slate-50 shadow-xl p-2 gap-2 text-xl font-bold text-slate-700">
      <span
        className={`size-3  rounded-full ${friend.isOnline ? `bg-green-600` : `bg-red-600`} `}
      ></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
