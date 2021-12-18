import './App.css';
import CardsContainer from './components/CardsContainer.js';
import UserCard from './components/UserCard.js';
import data from './data.json';

function App() {

    return (
        <div className="App">

            <main>
                <UserCard />
                {/* passes the data from the json file to the container component */}
                <CardsContainer data={data} />
            </main>

        </div>
    );
}

export default App;
