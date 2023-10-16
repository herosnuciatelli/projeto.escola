import { useAnimations, useFBX, useGLTF, useScroll } from "@react-three/drei";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import ScrollTrigger from "gsap/ScrollTrigger";

const Avatar = (props) => {
  const avatar = useGLTF("models/avatarWashington.glb");
  const group = useRef();

  const { animations: LeaningAnimation } = useFBX("animations/Leaning.fbx");
  const { animations: PointingAnimation } = useFBX("animations/Pointing.fbx");
  const { animations: IdleAnimation } = useFBX("animations/Breathing Idle.fbx");
  const { animations: LayingAnimation } = useFBX(
    "animations/Male Laying Pose.fbx"
  );
  const { animations: SittingAnimation } = useFBX(
    "animations/Male Sitting Pose.fbx"
  );
  const { animations: KneePointingAnimation } = useFBX(
    "animations/Kneeling Pointing.fbx"
  );
  const { animations: VictoryAnimation } = useFBX(
    "animations/Victory Idle.fbx"
  );

  LeaningAnimation[0].name = "LeaningAnimation";
  PointingAnimation[0].name = "PointingAnimation";
  IdleAnimation[0].name = "IdleAnimation";
  LayingAnimation[0].name = "LayingAnimation";
  SittingAnimation[0].name = "SittingAnimation";
  KneePointingAnimation[0].name = "KneePointingAnimation";
  VictoryAnimation[0].name = "VictoryAnimation";

  // ScrollAnimation

  const [AvatarAnimation, SetAvatarAnimation] = useState(PointingAnimation);
  const [AvatarAnimationString, SetAvatarAnimationString] =
    useState("PointingAnimation");
  const [Duration, SetDuration] = useState();

  const AvatarRef = group;
  const scroll = useScroll();
  const tl = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());

    ScrollTrigger.create({
      trigger: ".container__welcome",
      onEnter: async () => {
        if (AvatarRef.current) {
          gsap.to(AvatarRef.current.position, { x: 0, z: 0, y: -8 }, 2);
          gsap.to(AvatarRef.current.rotation, { z: 0 }, 2);
          AvatarRef.current.scale.set(5, 5, 5);
        }

        SetAvatarAnimation(PointingAnimation);
        SetAvatarAnimationString("PointingAnimation");
      },
    });

    ScrollTrigger.create({
      trigger: ".container__what",
      start: "top center",
      end: "top top",
      onEnter: () => {
        if (props.windowWidth > 768) {
          if (AvatarRef.current) {
            gsap.to(AvatarRef.current.position, { x: 3, z: -3, y: -4 }, 2);
            gsap.to(AvatarRef.current.rotation, { z: -1 }, 2);
          }

          SetAvatarAnimation(KneePointingAnimation);
          SetAvatarAnimationString("KneePointingAnimation");
        } else {
          if (AvatarRef.current) {
            AvatarRef.current.scale.set(4, 4, 4);
          }

          SetAvatarAnimation(VictoryAnimation);
          SetAvatarAnimationString("VictoryAnimation");
        }
      },
    });

    ScrollTrigger.create({
      trigger: ".container__somaAngulosInternos",
      start: "top center",
      end: "top top",
      onEnter: () => {
        if (AvatarRef.current) {
          gsap.to(AvatarRef.current.position, { x: 0, z: -8, y: -4 }, 2);
          gsap.to(AvatarRef.current.rotation, { z: 0 }, 2);
        }

        SetAvatarAnimation(LeaningAnimation);
        SetAvatarAnimationString("LeaningAnimation");
      },
    });

    ScrollTrigger.create({
      trigger: ".container__diagonais",
      start: "top center",
      end: "top top",
      onEnter: () => {
        if (AvatarRef.current) {
          gsap.to(
            AvatarRef.current.position,
            {
              x: !props.isMobile ? -6 : 2,
              z: !props.isMobile ? -7 : -14,
              y: !props.isMobile ? -4 : -3,
            },
            2
          );
          gsap.to(AvatarRef.current.rotation, { z: 0.8, x: Math.PI / -2 }, 2);
        }

        SetAvatarAnimation(SittingAnimation);
        SetAvatarAnimationString("SittingAnimation");
      },
    });

    ScrollTrigger.create({
      trigger: ".container__euler",
      start: "top center",
      end: "top top",
      onEnter: () => {
        if (AvatarRef.current) {
          gsap.to(AvatarRef.current.position, { x: 0, z: -11, y: 0 }, 2);
          gsap.to(AvatarRef.current.rotation, { z: 0, x: Math.PI / 8 }, 2);
        }

        SetAvatarAnimation(LayingAnimation);
        SetAvatarAnimationString("LayingAnimation");
      },
    });
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
  });

  const { actions } = useAnimations(AvatarAnimation, group);

  useEffect(() => {
    actions[AvatarAnimationString].reset().play();

    const duration =
      actions[AvatarAnimationString].getClip().duration * 1000 - 100;

    SetDuration(duration);
  });

  return (
    <group
      rotation={[Math.PI / -2, 0, 0]} //-2 or 8
      scale={5}
      position={[0, -8, 0]}
      ref={group}
    >
      <primitive object={avatar.scene} />
    </group>
  );
};

export default Avatar;
