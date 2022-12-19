import './App.css';
import {useState} from 'react'
import check from './check.png'
import deleteImg from './deleteImg.png'
function App() {
  const [todo,setTodo] = useState('');
  const [count,setCount] = useState(0);
  const [todoList,setTodoList] = useState([]);
  let newTodo = todoList;
  
  function changeText(event){
    setTodo(event.target.value)
  }
  const addTodoList = (()=>{
    setCount(count+1);
    newTodo.push({id:count, name:todo,status:false})
    setTodoList(newTodo)
    setTodo('');
  })

  const handleComplete= ((id)=>{
    const completeTodo = todoList.map(todo => {
      if (todo.id === id) {
        return {...todo, status: !todo.status};
      }
      return todo;
    });
    setTodoList(completeTodo);

  })

  const handleDelete= ((id)=>{
    setTodoList((current) =>
      current.filter((todo) => todo.id !== id)
    );

  })

  return (
    <div className="App">
    <div className='todoCount'>
      <p> 
      {
       todoList.filter((todo) => todo.status === false).length === 0 ? "Bekleyen İş Yok" : "Yapılmayı bekleyen iş sayısı: " +  todoList.filter((todo) => todo.status === false).length
      }  
      </p>
      <h1 className='header'>TODO LIST</h1>
      </div>
      
      <div className="todo-cart">
          <div>
            <input type="text" value={todo} onChange={changeText}/>
          </div>
          <div>
            <input type="button" value="Kaydet" className="button" onClick={addTodoList}/>
          </div>
      </div>
      <div className='todo-wrapper'>

              { 
                todoList.map((todoItem,key)=>{
                  return(
                    <div className='todo-item' key={key}>
                      <p className={ !todoItem.status ? 'todo-name' : 'todo-name complete' }>{todoItem.name} </p>
                      <img src={check} className="check" alt='check' onClick={()=>handleComplete(todoItem.id)}/>
                      <img src={deleteImg} className="delete" alt='delete' onClick={()=>handleDelete(todoItem.id)}/>
                    </div>
                  )
                })
              }
          </div>
    </div>
  );
}

export default App;
