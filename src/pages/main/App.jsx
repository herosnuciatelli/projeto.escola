import { useState } from 'react'
import './App.css'
import Login from '../login/index'
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';
import { OrbitControls } from '@react-three/drei';

function App() {
  
  const [user, setUser] = useState();

  const handleLoginSuccess = (username) => {
    setUser(username);
  };

  const [Viewer, SetViewer] = useState(false);

  return (
    <>
      <div className="trabalho__app">

        {

          user ?

          <div className="app">
            <Canvas 
              style={{height: '100%'}} 
              camera={{ fov: 65 }}
            >

                { Viewer && (
                  <>
                    <OrbitControls />
                    <mesh>
                      <boxGeometry args={[2,2,2]}/>
                      <meshNormalMaterial />
                    </mesh>
                  </>
                )}
              {/* <OrbitControls  /> */}
              { !Viewer && (
                <>
                  <Experience SetViewer={SetViewer}/>
                  <ambientLight intensity={0.5} /> {/* Luz ambiente */}
                  <pointLight position={[-10, 8, 15]} intensity={1000} /> {/* Luz pontual */}
                </>
              )}

            </Canvas>

            { Viewer && (
              <div className="controls__buttons">
                <button>Sair</button>
                <button>Wireframe</button>
              </div>
            )}




          </div>

          :

          <Login onLoginSuccess={handleLoginSuccess}/>

        }

        

      </div>
    </>
  )
}

export default App
