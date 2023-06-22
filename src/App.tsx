import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/taskExample'
//import ExampleComponent from './components/jsonData';
import MyComponent from './components/jsonData';
import ExampleComponent from './components/taskExample'

function App() {
  return (
    <div className="App">
     {/* <Form/>*/}
     <ExampleComponent/> 
     {/* <MyComponent/> */}
    </div>
  );
}

export default App;
// import React, { useState } from 'react';

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState<string>('');

//   const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setTodos([...todos, { text: newTodo, completed: false }]);
//     setNewTodo('');
//   };

//   return (
//     <div className="App">
     
//       <langT/>
//       {/* <form onSubmit={handleAddTodo}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form> */}
//       {/* <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo.text}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default App;
