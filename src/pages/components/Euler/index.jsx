import { OrbitControls } from '@react-three/drei';
import './index.css'
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useEffect, useRef } from 'react';

function Euler(props) {

    props.SetViewer(true)

    const [ canvasWidth, setCanvasWidth] = useState(null);
    var marginTop = '5%'

    useEffect(() => {
        if ( props.windowWidth <= 560 ) {
            marginTop = '0';
            return setCanvasWidth('100%')
        }
        return setCanvasWidth('50%')
    }, [])


    const cubeRef = useRef();

    useFrame(() => {
        if (!cubeRef.current) {
            return;
        }
        
        // NORMAL ANIMATION
        cubeRef.current.rotation.x += 0.01; 
        cubeRef.current.rotation.y += 0.01;
        

        // LEVITATING ANIMATION
        // cubeRef.current.rotation.y += 0.01;  
        // cubeRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.5  
    })

    const CanvasRef = useRef();

    useEffect(() => {
        

        CanvasRef.current.addEventListener('click', () => {
            props.SetViewer(true);
        })
      }, []);

    return ( 
        <div className="container__euler">
            <div className="title">
                <h2>a fórmula de Euler</h2>
            </div>

            <Canvas style={{cursor: 'pointer', width: canvasWidth, height: '50%', margin: '0 auto', marginTop: marginTop}} ref={CanvasRef}>
                <group>
                    <mesh  ref={cubeRef} > {/*rotation={[Math.PI / 4, 4 , 0]} */}
                        <boxGeometry args={[3,3,3]}/>
                        <meshNormalMaterial />
                    </mesh>
                </group>

            </Canvas>
            
            <button className="handle__ex">
                Exercícios
            </button>
        </div>
     );
}

export default Euler;