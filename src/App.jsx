import './App.css';
import ToDoList from './views/ToDoList/ToDoList';
import ToDoProvider from './context/ToDoContext';

function App() {
  return (
    <div className="App">
      <ToDoProvider>

        <ToDoList/>
      </ToDoProvider>
    </div>
  );
}

export default App;
