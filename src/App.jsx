import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1/Component1';
import DataEntry from "./components/AddComponents/AddComponents";
import ListOutput from "./components/TodoList/TodoList";
import Button from "./components/Button/Button"
// import {Comp} from "./components/TestComponent/TestComponent"; 
import {useState} from "react";

function App() {
   const [todoItems, setTodoItem] = useState([
    { id: 1, name: 'Задача 1', isCompete: false },
    { id: 2, name: 'Задача 2', isCompete: false },
    { id: 3, name: 'Задача 3', isCompete: false },
  ]);

  function add(){
    setTodoItem((prev)=>[...prev, {id: 4, name: 'Задача 4', isCompete: false}])
  }
  return (
    <div>
      <DataEntry/>
      <Button func={add}/>
      <ListOutput arr={todoItems}/>
      {/* <Comp/> */}
      
    </div>
  );
}

export default App;



