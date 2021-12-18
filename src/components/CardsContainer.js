// card container component
import StatsCard from './StatsCard.js';
const CardsContainer = ({data}) => {
  return (
    <div className="stats-cards-container">
      <>
        {/* make stats card based on the number of activities in the json file */}
        {data.map((activityNum, index) => (
          < StatsCard activity={activityNum} />
        ))}
      </>
    </div>

  );
}

export default CardsContainer
