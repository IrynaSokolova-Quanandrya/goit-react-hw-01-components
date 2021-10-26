// import PropTypes from 'prop-types';
import defaultImg from "";

export default function Profile({
  name,
  tag,
  location,
  avatar = defaultImg,
  stats,
}) {
  return (
    <div className="profile" key={tag}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className={name}>Petra Marica</p>
        <p className={tag}>@pmarica</p>
        <p className={location}>Salvador, Brasil</p>
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
  );
}
