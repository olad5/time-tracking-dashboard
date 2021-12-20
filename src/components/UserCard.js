// User Info component
import UserInfo from './UserInfo.js';

const UserCard = ({onTimelineChanged}) => {

  return (
    <div className="user-card">
      <UserInfo />
      <p className="daily timeline-description" onClick={() => onTimelineChanged('daily')}>Daily</p>
      <p className="weekly timeline-description" onClick={() => onTimelineChanged('weekly')}>Weekly</p>
      <p className="monthly timeline-description" onClick={() => onTimelineChanged('monthly')}>Monthly</p>
    </div >

  );
}

export default UserCard
