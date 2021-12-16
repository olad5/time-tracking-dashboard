import exerciseSvg from '../images/icon-exercise.svg';
import StatsBox from './StatsBox';
const StatsCard = () => {
  return (
    <div className="stats-card">
      <img className="svg-icon" src={exerciseSvg} alt="User Profile " />
      <StatsBox />
    </div>

  );
}

export default StatsCard
