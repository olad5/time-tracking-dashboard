import './App.css';
import CardsContainer from './components/CardsContainer.js';
import UserCard from './components/UserCard.js';
import {useState} from "react";



function App() {
    const [option, setOption] = useState({timeframe: 'daily'})//state of the timeline to know which one to display
    const setNewTimeframe = (timeframe) => {// change the timeframe once the user clicks on different one
        setOption({timeframe: timeframe})
    }
    return (
        <div className="App">
            <main>
                <UserCard onTimelineChanged={setNewTimeframe} />
                {/* passes the current timeline state and data from the json file to the container component */}
                <CardsContainer currentTimeline={option} />
            </main>
            <footer>
                <a href="https://twitter.com/_olad5"><i class="fa fa-twitter "></i></a>
                <a href="https://github.com/olad5/time-tracking-dashboard"><i class="fa fa-github "></i></a>
            </footer>

        </div>
    );
}

export default App;
