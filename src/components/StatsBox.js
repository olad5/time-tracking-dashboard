// StatsBox component
const StatsBox = ({data, currentTimeline}) => {

  // gets the activity data from the props passed from parent
  const activity = data.title;
  currentTimeline = currentTimeline.timeframe;// get the current timeline to use to populate the data
  const currentStats = data.timeframes[currentTimeline];


  return (
    <div className="stats-box">
      <div className="stats-menu" >...</div>
      <p className="activity">{activity}</p>
      <p className="current-stats">{currentStats.current}hrs</p>
      <p className="prev-stats">Last Week - {currentStats.previous}hrs</p>
    </div>
  );
}

export default StatsBox
