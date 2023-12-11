import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
