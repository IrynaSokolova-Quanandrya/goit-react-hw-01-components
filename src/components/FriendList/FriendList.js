export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendList friends={friends} />
      ))}
    </ul>
  );
}
