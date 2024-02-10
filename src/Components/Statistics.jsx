/* eslint-disable react/prop-types */
import StatItem from './StatItem';
const Statistics = ({ title, stats }) => {
  return (
    <section className="w-1/5  bg-slate-50 my-0 mx-auto rounded  pt-4 mb-6 ">
      {title && (
        <h2 className="uppercase text-xl text-center font-bold pb-4">
          {title}
        </h2>
      )}
      <ul className="flex items-center ">
        {stats.map((stat) => (
          <StatItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
