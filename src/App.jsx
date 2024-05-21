import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1/Component1';
import DataEntry from "./components/AddComponents/AddComponents";
import ListOutput from "./components/TodoList/TodoList";

function App() {
  const todoItems = [
    { id: 1, name: 'Задача 1', isCompete: false },
    { id: 2, name: 'Задача 2', isCompete: false },
    { id: 3, name: 'Задача 3', isCompete: false },
  ];
  return (
    <div>
      <DataEntry/>
      <ListOutput arr={todoItems}/>
    </div>
  );
}

export default App;



