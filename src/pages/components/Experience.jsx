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
      .to(CubeRef.current.position, { x: 100 }, 2)

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
      <ScrollControls pages={5} damping={0.25}>
        <directionalLight castShadow position={[0, 10, 0]} />

        <Cube
          windowWidth={props.windowWidth}
          isMobile={isMobile}
          Viewer={props.Viewer}
        />

        <Suspense fallback={null}>
          {/* <Yoda /> */}
          <Avatar windowWidth={props.windowWidth} isMobile={isMobile} />
        </Suspense>

        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>

        <Scroll html style={{ width: "100%" }}>
          <Welcome />
          <What />
          <SomaAngulosInternos HandleViewer={HandleViewer} />
          <Arestas HandleViewer={HandleViewer} />
          <Euler HandleViewer={HandleViewer} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
