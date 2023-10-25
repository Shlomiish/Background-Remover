import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
