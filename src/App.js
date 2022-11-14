import './App.css';
import AddTask from './components/AddTask';
import DeleteTasks from './components/DeleteTasks';
import InformationsTasks from './components/InformationsTasks';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='container'>
      <AddTask />
      <InformationsTasks />
      <Tasks />
      <DeleteTasks />
    </div>
  );
}

export default App;
