import UserInfo from './UserInfo.js';

const UserCard = () => {
  return (
    <div className="user-card">
      <UserInfo />
      <p className="daily timeline-description">Daily</p>
      <p className="weekly timeline-description">Weekly</p>
      <p className="monthly timeline-description">Monthly</p>
    </div>

  );
}

export default UserCard
