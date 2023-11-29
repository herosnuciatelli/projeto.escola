import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Login from "../login/index";
import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "../components/Experience";
import { CameraControls } from "@react-three/drei";
import ExerciciosPoliedros from "../components/exercicios";
import Final from "../components/Final";
import { useCookies } from "react-cookie";

const ViewerCube = (props) => {
  const ViewerCubeRef = useRef();

  useFrame(() => {
    if (ViewerCubeRef.current) {
      if (props.windowWidth < 770) {
        ViewerCubeRef.current.scale.set(0.5, 0.5, 0.5);
      }
    }
  });

  return (
    <mesh ref={ViewerCubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial wireframe={props.Wireframe} />
    </mesh>
  );
};

function App() {
  const [user, setUser] = useState();
  const [cookie] = useCookies(["hasUser"]);

  const cookieValue = cookie["hasUser"];

  useEffect(() => {
    if (cookieValue) {
      setUser("Washington");
    }
  });

  const handleLoginSuccess = (username) => {
    setUser(username);
  };

  const [Viewer, SetViewer] = useState(false);
  const cameraControlRef = useRef(null);
  const CanvasRef = useRef();
  const [Wireframe, SetWireframe] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleExit = useCallback(async () => {
    await cameraControlRef.current?.reset(true);
    SetWireframe(false);
    SetViewer(false);
    handleRefresh();
  }, []);

  const handleWireframe = () => {
    SetWireframe(true);
  };

  const handleWireframeOut = () => {
    SetWireframe(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Função para atualizar a largura da tela quando ela muda

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Use o useEffect para adicionar e remover o ouvinte de evento quando o componente montar e desmontar

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    // Lembre-se de remover o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // Exercises

  const [Exercise, SetExercise] = useState(false);
  const [ShowCongrats, SetShowCongrats] = useState(404);

  // END

  const [FinalScreen, SetFinalScreen] = useState(false);

  return (
    <>
      <div className="trabalho__app">
        {user ? (
          <div className="app">
            {!Viewer && (
              <>
                <Canvas style={{ height: "100%" }} camera={{ fov: 65 }}>
                  <Experience
                    SetViewer={SetViewer}
                    windowWidth={windowWidth}
                    Viewer={Viewer}
                    Exercise={Exercise}
                    SetExercise={SetExercise}
                    ShowCongrats={ShowCongrats}
                    FinalScreen={FinalScreen}
                  />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[-10, 8, 15]} intensity={1000} />
                </Canvas>
              </>
            )}

            {Viewer && (
              <>
                <Canvas>
                  <ViewerCube windowWidth={windowWidth} Wireframe={Wireframe} />
                  <CameraControls ref={cameraControlRef} />
                </Canvas>
                <div className="controls__buttons">
                  <button onClick={handleExit} className="glow-on-hover">
                    Sair
                  </button>
                  {!Wireframe && (
                    <button onClick={handleWireframe} className="glow-on-hover">
                      Wireframe
                    </button>
                  )}
                  {Wireframe && (
                    <button
                      onClick={handleWireframeOut}
                      className="glow-on-hover"
                    >
                      Sair do Wireframe
                    </button>
                  )}
                </div>
              </>
            )}

            {Exercise && (
              <>
                <ExerciciosPoliedros
                  SetExercise={SetExercise}
                  SetShowCongrats={SetShowCongrats}
                  ShowCongrats={ShowCongrats}
                  SetFinalScreen={SetFinalScreen}
                />
              </>
            )}

            {FinalScreen && <Final />}
          </div>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </>
  );
}

export default App;
