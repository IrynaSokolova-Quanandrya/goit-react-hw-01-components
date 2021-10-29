import "./FriendList.module.scss";
import PropTypes from "prop-types";
function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
          <span
            className="status"
            style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
          ></span>
          {/* <span className={{isOnline} ? "status is-online" : "status is-offline"}></span> */}
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  friends: [
    {
      avatar: "https://picsum.photos/200/300",
      name: "no name",
      isOnline: false,
      id: 0,
    },
  ],
};
FriendList.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
