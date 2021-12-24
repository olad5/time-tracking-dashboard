// Card container component
import StatsCard from './StatsCard.js';
import data from '../data.json';

const CardsContainer = ({currentTimeline}) => {
  return (
    <div className="stats-cards-container">
      <>
        {/* make stats card based on the number of activities in the json file */}
        {data.map((activityNum, index) => (
          < StatsCard key={index + 1} currentTimeline={currentTimeline} activity={activityNum} />
        ))}
      </>
    </div>

  );
}

export default CardsContainer
