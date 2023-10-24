import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
