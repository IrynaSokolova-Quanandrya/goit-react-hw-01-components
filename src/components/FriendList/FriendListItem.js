import styled from "styled-components";
const Styles = styled.div`
  .item {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
  //  .list:not(:last-child){
  //   margin-bottom: 20px;
  // }
  .avatar {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <Styles className="list">
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </Styles>
  );
}

export default FriendListItem;
