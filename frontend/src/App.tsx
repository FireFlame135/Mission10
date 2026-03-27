import Header from './components/Header.tsx';
import BowlerList from './components/BowlerList.tsx';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;