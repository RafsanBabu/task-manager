import './App.css';
import Header from './Component/Header';
import TodoList from './Component/TodoList';

function App() {
  return (    
      <div className='row'>
        <Header/>
        <TodoList/>
      </div>  
  );
}

export default App;
