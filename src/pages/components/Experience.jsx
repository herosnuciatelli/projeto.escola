import { ScrollControls, Scroll, Sparkles, Environment, OrbitControls } from "@react-three/drei";
import Welcome from '../components/Welcome/Welcome';
import What from '../components/What/What';
import SomaAngulosInternos from './SomaAngulosInternos';
import AngulosExternos from "./AngulosExternos";
import Diagonais from "./Diagonais/index";
import Euler from "./Euler";
import { useState, useEffect } from "react";
import { Astronaut } from "./Astronaut";
import { Yoda } from "./Yoda";


function Experience(props) {

    props.SetViewer(true)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Função para atualizar a largura da tela quando ela muda
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
  
    // Use o useEffect para adicionar e remover o ouvinte de evento quando o componente montar e desmontar
    useEffect(() => {
      window.addEventListener('resize', updateWindowWidth);
  
      // Lembre-se de remover o ouvinte de evento quando o componente for desmontado
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }, []);  


    

    return ( 
        <>  

              <ScrollControls pages={6} damping={0.25}>
                
                
                  <>
                  <group scale={10} position={[0, -2, 0]} rotation={[Math.PI / 5, -1 , 0]}>
                      {/* <Yoda /> */}
                    </group>
                    
                    <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>

                    <Scroll html style={{width: '100%'}}>
                        <Welcome />
                        <What />
                        <SomaAngulosInternos />
                        <AngulosExternos />
                        <Diagonais />
                        <Euler windowWidth={windowWidth} SetViewer={props.SetViewer}/>
                    </Scroll> 
                  </>
              </ScrollControls>

        
        </>
     );
}

export default Experience;