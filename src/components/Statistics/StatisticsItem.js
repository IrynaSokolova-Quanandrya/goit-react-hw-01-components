import s from "./Statistics.module.css";

function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={s.item} key={id} style={{ backgroundColor: bgColor() }}>
      <span className="label">{label}</span>
      <span className={s.percentage}>{percentage + "%"}</span>
    </li>
  );
}

const bgColor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};
console.log(bgColor());

export default StatisticsItem;
