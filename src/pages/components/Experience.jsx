import {
  ScrollControls,
  Scroll,
  Sparkles,
  useScroll,
  CameraControls,
} from "@react-three/drei";
import { useState, useEffect, useRef, useLayoutEffect, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Welcome from "./Welcome/Welcome";
import What from "./What/What";
import SomaAngulosInternos from "./SomaAngulosInternos/index";
import Arestas from "./Arestas/index";
import Euler from "./Euler/index";
import Avatar from "./Scene";

const Cube = (props) => {
  const CubeRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(CubeRef.current.position, { x: 30 }, 2)

      .to(CubeRef.current.rotation, { x: -1.5 }, 6)
      .to(CubeRef.current.position, { x: 0 }, 6)

      .to(CubeRef.current.rotation, { z: 0.8 }, 8)
      .to(CubeRef.current.position, { x: 0 }, 8)
      .to(
        CubeRef.current.position,
        {
          x: !props.isMobile ? -7.4 : 0,
          y: -2.76,
          z: !props.isMobile ? -9 : -15,
        },
        11
      )

      .to(CubeRef.current.rotation, { y: 0 }, 13)
      .to(
        CubeRef.current.position,
        {
          x: !props.isMobile ? -7.4 : 0,
          y: -2.76,
          z: !props.isMobile ? -9 : -15,
        },
        13
      )

      .to(CubeRef.current.position, { x: 0, z: -9, y: -3.1 }, 16)
      .to(CubeRef.current.rotation, { z: 0 }, 16);
  });

  return (
    <group ref={CubeRef} position={[100, -1.9, -11.5]} scale={[5.5, 5.5, 5.5]}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

const Experience = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const HandleViewer = () => {
    props.SetViewer(true);
  };

  useEffect(() => {
    if (props.windowWidth < 770) {
      setIsMobile(true);
    }
  }, []);


  return (
    <>
      <ScrollControls pages={5} damping={0.15}>
        {(!props.Exercise && !props.FinalScreen && !isMobile ) && (
          <>
            <directionalLight castShadow position={[0, 10, 0]} />

            <Cube
              windowWidth={props.windowWidth}
              isMobile={isMobile}
              Viewer={props.Viewer}
            />
          </>
        )}

        {(!props.Exercise ||
          props.ShowCongrats === 500 ||
          props.ShowCongrats === 200) && (
          <Suspense fallback={null}>
            <Avatar
              windowWidth={props.windowWidth}
              isMobile={isMobile}
              ShowCongrats={props.ShowCongrats}
              FinalScreen={props.FinalScreen}
            />
          </Suspense>
        )}

        {(props.ShowCongrats === 500) && (
          <mesh position={[0,-3.8,-6]} scale={3}>
            <boxGeometry />
            <meshStandardMaterial color="#e01e37"/>
          </mesh>
        )}

        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>

        <Scroll html style={{ width: "100%", height: "100%" }}>
          {(!props.Exercise && !props.FinalScreen ) && (
            <>
              <Welcome />
              <What />
              <SomaAngulosInternos HandleViewer={HandleViewer} />
              <Arestas HandleViewer={HandleViewer} />
              <Euler
                HandleViewer={HandleViewer}
                SetExercise={props.SetExercise}
              />
            </>
          )}
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
