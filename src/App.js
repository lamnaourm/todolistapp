import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='container'>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
