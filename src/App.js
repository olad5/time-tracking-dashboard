import exerciseSvg from './images/icon-exercise.svg';
import user_img from './images/image-jeremy.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <main>
        {/* user card */}
        <div className="user-card">
          <div className="user-info">
            {/* <img className="user-photo" src='image-jeremy.png' alt="User Profile " /> */}
            <img className="user-photo" src={user_img} alt="User Profile " />
            <p className='report-text'>Report for</p>
            <p className="user-name">Jeremy Robson</p>
          </div>
          <p className="daily timeline-description">Daily</p>
          <p className="weekly timeline-description">Weekly</p>
          <p className="monthly timeline-description">Monthly</p>
        </div>

        <div className="stats-cards-container">
          {/* each of the stats cards */}
          <div className="stats-card">
            <img className="svg-icon" src={exerciseSvg} alt="User Profile " />
            <div className="stats-box">
              <div className="stats-menu">...</div>
              <p className="activity">Exercise</p>
              <p className="current-stats">32hrs</p>
              <p className="prev-stats">Last Week - 10hrs</p>
            </div>
          </div>
          <div className="stats-card">
            <img className="svg-icon" src={exerciseSvg} alt="User Profile " />
            <div className="stats-box">
              <div className="stats-menu">...</div>
              <p className="activity">Exercise</p>
              <p className="current-stats">32hrs</p>
              <p className="prev-stats">Last Week - 10hrs</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
