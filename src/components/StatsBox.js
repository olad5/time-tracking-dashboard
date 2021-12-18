// StatsBox component
const StatsBox = ({data}) => {

  // gets the activity data from the props passed from parent
  const activity = data.title;
  const dailyStats = data.timeframes.daily;
  const weeklyStats = data.timeframes.weekly;
  const monthlyStats = data.timeframes.monthly;


  return (
    <div className="stats-box">
      <div className="stats-menu">...</div>
      <p className="activity">{activity}</p>
      <p className="current-stats">{dailyStats.current}hrs</p>
      <p className="prev-stats">Last Week - {dailyStats.previous}hrs</p>
    </div>

  );
}

export default StatsBox
