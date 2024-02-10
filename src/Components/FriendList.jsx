/* eslint-disable react/prop-types */
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="mt-0 mx-auto w-1/5 flex flex-col items-stretch justify-center gap-2 mb-6 ">
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
