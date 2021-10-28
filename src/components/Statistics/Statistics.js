import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {{ title } && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: bgColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className={s.percentage}>{stat.percentage + "%"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const bgColor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};
console.log(bgColor());
// Statistics.defaultProps = {
//   avatar: defaultImg,
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// const randomIntegerFromInterval = (colors) => {
//     return colors[Math.floor(Math.random() * colors.length)]
// }
//  body.style.backgroundColor = randomIntegerFromInterval(colors), 1000);
export default Statistics;
