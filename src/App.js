import './App.css';
import StatsCard from './components/StatsCard.js';
import UserCard from './components/UserCard.js';

function App() {

  return (
    <div className="App">

      <main>

        <UserCard />
        <div className="stats-cards-container">

          <>
            {
              // each of the user's card
              [1, 2, 3, 4, 5, 6].map((card, index) => (
                < StatsCard />
              ))
            }
          </>


        </div>
      </main>

    </div>
  );
}

export default App;
