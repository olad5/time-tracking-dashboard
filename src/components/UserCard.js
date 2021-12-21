// User Info component
import UserInfo from './UserInfo.js';
import {useState} from "react";

const UserCard = ({onTimelineChanged}) => {

  const [onClickedstyle, setOnClickedStyle] = useState('')// state to manage the css change

  const onTimeFrameClicked = (newTimeframe) => {
    onTimelineChanged(newTimeframe); //change the current timeframe state in the parent
    setOnClickedStyle(newTimeframe)// changes the color of the current timeframe

  }

  return (
    <div className="user-card">
      <UserInfo />
      <p className={`daily timeline-description ${onClickedstyle === 'daily' ? "change-timeline-color" : ""}`} onClick={() => onTimeFrameClicked('daily')}>Daily</p>
      <p className={`weekly timeline-description ${onClickedstyle === 'weekly' ? "change-timeline-color" : ""}`} onClick={() => onTimeFrameClicked('weekly')}>Weekly</p>
      <p className={`monthly timeline-description ${onClickedstyle === 'monthly' ? "change-timeline-color" : ""}`} onClick={() => onTimeFrameClicked('monthly')}>Monthly</p>
    </div >

  );
}

export default UserCard
