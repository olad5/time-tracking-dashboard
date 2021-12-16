import user_img from '../images/image-jeremy.png';
const UserInfo = () => {
  return (
    <div className="user-info">
      <img className="user-photo" src={user_img} alt="User Profile " />
      <p className='report-text'>Report for</p>
      <p className="first-name">Jeremy</p>
      <p className="last-name">Robson</p>
    </div>

  );
}

export default UserInfo
