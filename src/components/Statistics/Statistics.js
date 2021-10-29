import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {{ title } && <h2 className="title">{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

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

export default Statistics;
