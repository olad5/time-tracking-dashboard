import './App.css';
import CardsContainer from './components/CardsContainer.js';
import UserCard from './components/UserCard.js';
import data from './data.json';
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
                <CardsContainer currentTimeline={option} data={data} />
            </main>
        </div>
    );
}

export default App;
