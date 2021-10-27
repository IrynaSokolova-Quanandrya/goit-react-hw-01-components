import FriendListItem from "./FriendListItem";
console.log(FriendListItem);

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          status={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;
