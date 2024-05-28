import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1/Component1';
import DataEntry from "./components/DataEntry/DataEntry";
import ListOutput from "./components/TodoList/ListOutput";
import Button from "./components/Button/Button"
// import {Comp} from "./components/TestComponent/TestComponent"; 
import {useState} from "react";

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const [value, setValue] = useState();
  function add(){
    setTodoItem((prev)=>[...prev, {id: 4, name: value, isCompete: false}])
  }
  return (
    <div>
      <DataEntry val={value} setV={setValue}/>
      <Button func={add}/>
      <ListOutput arr={todoItems}/>
      {/* <Comp/> */}
      
    </div>
  );
}

export default App;



