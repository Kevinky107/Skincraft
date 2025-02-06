import { Part } from "./Part";

export const MinecraftSkin = ({ texture }) => {
  return (
    <group position={[0, -1, 0]}>
      <Part position={[0, 1.65, 0]} args={[0.8, 0.8, 0.8]} texture={texture} part="head" />
      <Part position={[0, 0.5, 0]} args={[1, 1.5, 0.5]} texture={texture} part="torso" />
      <Part position={[-0.75, 0.5, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="rightArm" />
      <Part position={[0.75, 0.5, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="leftArm" />
      <Part position={[-0.25, -1, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="rightLeg" />
      <Part position={[0.25, -1, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="leftLeg" />
    </group>
  );
};