import { Part } from "./Part";

export const MinecraftSkin = ({ texture }) => {
  return (
    <group position={[0, -1, 0]}>
      {/* Cabeza (8x8 px) */}
      <Part position={[0, 1.65, 0]} args={[0.8, 0.8, 0.8]} texture={texture} part="head" />
      {/* Torso (8x12 px) */}
      <Part position={[0, 0.5, 0]} args={[1, 1.5, 0.5]} texture={texture} part="torso" />
      {/* Brazos (4x12 px cada uno) */}
      <Part position={[0.75, 0.5, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="rightArm" />
    </group>
  );
};