/* eslint-disable react/prop-types */
import getRandomHexColor from '../helpers/random';

const StatItem = ({ stat }) => {
  const color = getRandomHexColor();

  return (
    <li
      style={{ backgroundColor: `${color}` }}
      className="flex flex-col justify-center items-center text-slate-50 w-[calc(100%/4)] py-2"
    >
      <span>{stat.label}</span>
      <span className="text-xl">{stat.percentage}%</span>
    </li>
  );
};

export default StatItem;
