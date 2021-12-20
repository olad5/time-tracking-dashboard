// Card container component
import StatsCard from './StatsCard.js';
const CardsContainer = ({data, currentTimeline}) => {
  return (
    <div className="stats-cards-container">
      <>
        {/* make stats card based on the number of activities in the json file */}
        {data.map((activityNum, index) => (
          < StatsCard currentTimeline={currentTimeline} activity={activityNum} />
        ))}
      </>
    </div>

  );
}

export default CardsContainer
