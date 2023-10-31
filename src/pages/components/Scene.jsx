import { useAnimations, useFBX, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import ScrollTrigger from "gsap/ScrollTrigger";

const Avatar = (props) => {
  const avatar = useGLTF("models/avatarWashington.glb");
  const group = useRef();

  const { animations: LeaningAnimation } = useFBX("animations/Leaning.fbx");
  const { animations: PointingAnimation } = useFBX("animations/Pointing.fbx");
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
  const { animations: HappyIdle } = useFBX(
    "animations/Happy Idle.fbx"
  );
  const { animations: SillyDancing } = useFBX(
    "animations/Silly Dancing.fbx"
  );
  const { animations: EulerSittingPose } = useFBX(
    "animations/Euler Sitting Pose.fbx"
  );

  LeaningAnimation[0].name = "LeaningAnimation";
  PointingAnimation[0].name = "PointingAnimation";
  LayingAnimation[0].name = "LayingAnimation";
  SittingAnimation[0].name = "SittingAnimation";
  KneePointingAnimation[0].name = "KneePointingAnimation";
  VictoryAnimation[0].name = "VictoryAnimation";
  HappyIdle[0].name = "HappyIdle";
  SillyDancing[0].name = "SillyDancing";
  EulerSittingPose[0].name = "EulerSittingPose";

  // ScrollAnimation

  const [AvatarAnimation, SetAvatarAnimation] = useState(PointingAnimation);
  const [AvatarAnimationString, SetAvatarAnimationString] =
    useState("PointingAnimation");

  const AvatarRef = group;
  const scroll = useScroll();
  const tl = useRef();
  const WelcomeSection = document.querySelector(".container__welcome");

  gsap.registerPlugin(ScrollTrigger);

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());

    if (WelcomeSection) {
      ScrollTrigger.create({
        trigger: ".container__welcome",
        onEnter: () => {
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
          if (props.windowWidth > 768) {
            if (AvatarRef.current) {
              gsap.to(AvatarRef.current.position, { x: 0, z: -8, y: -4 }, 2);
              gsap.to(AvatarRef.current.rotation, { z: 0 }, 2);
            }
            SetAvatarAnimation(LeaningAnimation);
            SetAvatarAnimationString("LeaningAnimation");
          } else {
            if (AvatarRef.current) {
              gsap.to(AvatarRef.current.position, { x: 0, z: -4, y: -5 }, 2);
              gsap.to(AvatarRef.current.rotation, { z: 0 }, 2);
            }

            SetAvatarAnimation(HappyIdle);
            SetAvatarAnimationString("HappyIdle");
          }
        },
      });

      ScrollTrigger.create({
        trigger: ".container__diagonais",
        start: "top center",
        end: "top top",
        onEnter: () => {
          if (props.windowWidth > 768) {
            if (AvatarRef.current) {
              gsap.to(
                AvatarRef.current.position,
                {
                  x: -6,
                  z: -7,
                  y: -4,
                },
                2
              );
              gsap.to(AvatarRef.current.rotation, { z: 0.8, x: Math.PI / -2 }, 2);
            }
  
            SetAvatarAnimation(SittingAnimation);
            SetAvatarAnimationString("SittingAnimation");

          } else {
            if (AvatarRef.current) {
              gsap.to(
                AvatarRef.current.position,
                {
                  x: 0,
                  z: -10,
                  y: -3,
                },
                2
              );
              
            }
            SetAvatarAnimation(SillyDancing);
            SetAvatarAnimationString("SillyDancing");
          }
        },
      });

      ScrollTrigger.create({
        trigger: ".container__euler",
        start: "top center",
        end: "top top",
        onEnter: () => {
          if (props.windowWidth > 768) {
            if (AvatarRef.current) {
              gsap.to(AvatarRef.current.position, { x: 0, z: -11, y: 0 }, 2);
              gsap.to(AvatarRef.current.rotation, { z: 0, x: Math.PI / 8 }, 2);
            }
  
            SetAvatarAnimation(LayingAnimation);
            SetAvatarAnimationString("LayingAnimation");

          } else {

            if (AvatarRef.current) {
              gsap.to(AvatarRef.current.position, { x: 0, z: -5, y: -3 }, 2);
            }
            SetAvatarAnimation(EulerSittingPose);
            SetAvatarAnimationString("EulerSittingPose");
          }
        },
      });
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
  });

  // Congrats animations

  const { animations: HappyAnimation } = useFBX("animations/Excited.fbx");
  const { animations: SadAnimation } = useFBX(
    "animations/Sitting Disbelief.fbx"
  );

  HappyAnimation[0].name = "HappyAnimation";
  SadAnimation[0].name = "SadAnimation";

  const Congrats = useEffect(() => {
    const ShowCongrats = props.ShowCongrats;
    const HappyCongrats = 200;
    const SadCongrats = 500;

    const Happy = () => {
      SetAvatarAnimation(HappyAnimation);
      SetAvatarAnimationString("HappyAnimation");
    };

    const Sad = () => {
      SetAvatarAnimation(SadAnimation);
      SetAvatarAnimationString("SadAnimation");

      AvatarRef.current.position.y = -5;
      AvatarRef.current.position.z = -6;
    };

    if (ShowCongrats === HappyCongrats) {
      return Happy();
    }
    if (ShowCongrats === SadCongrats) {
      return Sad();
    }
  });

  // FinalScreen Animation

  const { animations: WavingAnimation } = useFBX("animations/Waving.fbx");

  WavingAnimation[0].name = "WavingAnimation";

  const FinalAnimation = useEffect(() => {
    const FinalScreen = props.FinalScreen;

    const AvatarStay = () => {
      AvatarRef.current.position.x = 2;
      AvatarRef.current.rotation.z = -0.4;
      AvatarRef.current.rotation.x = -7.76;
    };

    const AvatarStayMobile = () => {
      AvatarRef.current.position.x = 0;
      AvatarRef.current.position.z = -8;
      AvatarRef.current.rotation.z = -0.2;
      AvatarRef.current.rotation.x = -7.76;
    };

    const AvatarWave = () => {
      SetAvatarAnimation(WavingAnimation);
      SetAvatarAnimationString("WavingAnimation");
    };

    if (FinalScreen) {
      AvatarWave();
      if (!props.isMobile) {
        return AvatarStay();
      }
      return AvatarStayMobile();
    }
  });

  const { actions } = useAnimations(AvatarAnimation, group);

  useEffect(() => {
    actions[AvatarAnimationString].reset().play();
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
