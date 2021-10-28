import FriendListItem from "./FriendListItem";
import styled from "styled-components";
const Styles = styled.div`
  .friend-list {
    margin: 0;
    padding: 0;
  }
`;

console.log(FriendListItem);

function FriendList({ friends }) {
  return (
    <Styles>
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
    </Styles>
  );
}

export default FriendList;
