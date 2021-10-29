import PropTypes from "prop-types";
// import "./Profile.css";
import defaultImg from "./default-image.png";
import styled from "styled-components";
const Styles = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .profile {
    color: #757575;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    width: 500px;
    /* border: 1px solid red; */
    /* border-radius: 15px; */
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
  .name {
    color: black;
    font-weight: 700;
    font-size: 24px;
  }
  .description > p {
    margin: 0 0 16px 0;
  }
  .stats {
    display: flex;
    justify-content: space-around;
    padding: 0;
    border: 1px solid #ccc;
  }
  .stats > li {
    flex-basis: calc((100%-180 px) / 3);
    flex-direction: column;
    border: 2px solid #ccc;
    background-color: rgb(233, 227, 227);
    /* border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px; */
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .label {
    margin-bottom: 5px;
  }
  .quantity {
    color: black;
    font-weight: 500;
    font-size: 16px;
  }
`;

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Styles>
      <div className="profile" key={tag}>
        <div className="description">
          <img src={avatar} alt="Аватар пользователя" className="avatar" />
          <p className="name">{name}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </Styles>
  );
}

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.number),
};

export default Profile;
