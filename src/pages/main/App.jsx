import { useState } from 'react'
import './App.css'
import Login from '../login/index'

function App() {
  
  const [user, setUser] = useState();

  return (
    <>
      <div className="trabalho__app">

        {

          user ?

          <div className="App">
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='senha'/>
            <button>Entrar</button>
          </div>

          :

          <Login setUser={setUser} user={user}/>

        }

        

      </div>
    </>
  )
}

export default App
