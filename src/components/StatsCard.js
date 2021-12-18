// StatsCard component
import exerciseSvg from '../images/icon-exercise.svg';
import playSvg from '../images/icon-play.svg';
import workSvg from '../images/icon-work.svg';
import studySvg from '../images/icon-study.svg';
import socialSvg from '../images/icon-social.svg';
import selfCareSvg from '../images/icon-self-care.svg';
import StatsBox from './StatsBox';

const StatsCard = ({activity}) => {
  const activityTitle = activity.title.toLowerCase()

  const icons = {// icons and backgroundColors for the each svg icon
    'work': {
      "icon": workSvg,
      "iconBg": "hsl(15, 100%, 70%)"
    },
    'play': {
      "icon": playSvg,
      "iconBg": "hsl(195, 74%, 62%)"
    },
    'study': {
      "icon": studySvg,
      "iconBg": "hsl(348, 100%, 68%)"
    },
    'exercise': {
      "icon": exerciseSvg,
      "iconBg": "hsl(145, 58%, 55%)"
    },
    'social': {
      "icon": socialSvg,
      "iconBg": "hsl(264, 64%, 52%)"
    },
    'self care': {
      "icon": selfCareSvg,
      "iconBg": "hsl(43, 84%, 65%)"
    },

  }

  let iconToUse = icons.hasOwnProperty(activityTitle) ? icons[activityTitle].icon : null// checks the icon to use for each activity
  let iconBg = icons.hasOwnProperty(activityTitle) ? icons[activityTitle].iconBg : null // checks the backgroundColor for each of the activity


  return (
    < div className="stats-card" style={{backgroundColor: iconBg}} >
      < img className="svg-icon" src={iconToUse} alt="User Profile " />
      <StatsBox data={activity} />
    </div >

  );
}

export default StatsCard
