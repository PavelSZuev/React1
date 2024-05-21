import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1/Component1';

function App() {
  const number = 1234;
  return (
    <div>
      <p>Hello World</p>
      <p>{number}</p>
      <Component1 text= "Тестовый текст" color= "#e8e8e8"/>
    </div>
  );
}

export default App;
