import { Part } from "./Part";

export const MinecraftSkin = ({ texture, visibleParts }) => {
  return (
    <>
      <group position={[0, -1, 0]}>
        {visibleParts.head && <Part position={[0, 1.65, 0]} args={[0.8, 0.8, 0.8]} texture={texture} part="head" />}
        {visibleParts.torso && <Part position={[0, 0.5, 0]} args={[1, 1.5, 0.5]} texture={texture} part="torso" />}
        {visibleParts.rightArm && <Part position={[-0.75, 0.5, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="rightArm" />}
        {visibleParts.leftArm && <Part position={[0.75, 0.5, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="leftArm" />}
        {visibleParts.rightLeg && <Part position={[-0.25, -1, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="rightLeg" />}
        {visibleParts.leftLeg && <Part position={[0.25, -1, 0]} args={[0.5, 1.5, 0.5]} texture={texture} part="leftLeg" />}

        {visibleParts.head2 && <Part position={[0, 1.65, 0]} args={[0.88, 0.88, 0.88]} texture={texture} part="head2" />}
        {visibleParts.torso2 && <Part position={[0, 0.5, 0]} args={[1.08, 1.58, 0.58]} texture={texture} part="torso2" />}
        {visibleParts.rightArm2 && <Part position={[-0.75, 0.5, 0]} args={[0.58, 1.58, 0.58]} texture={texture} part="rightArm2" />}
        {visibleParts.leftArm2 && <Part position={[0.75, 0.5, 0]} args={[0.58, 1.58, 0.58]} texture={texture} part="leftArm2" />}
        {visibleParts.rightLeg2 && <Part position={[-0.25, -1, 0]} args={[0.58, 1.58, 0.58]} texture={texture} part="rightLeg2" />}
        {visibleParts.leftLeg2 && <Part position={[0.25, -1, 0]} args={[0.58, 1.58, 0.58]} texture={texture} part="leftLeg2" />}
      </group>
  </>
  );
};