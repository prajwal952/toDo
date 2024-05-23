
import { useEffect } from 'react';
import './App.css';








function App() {
  useEffect(()=>{
    const data= fetch('https://dummyjson.com/todos')
    data.then((data)=>{
    return data.json
    }).then((response)=>{
      console.log(data)
    })
    
    },[])



  return (
    <div className="App">
    <h1>ToDo Application</h1>


    </div>
  );
}

export default App;
