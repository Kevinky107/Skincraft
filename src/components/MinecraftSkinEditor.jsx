import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { MinecraftSkin } from "./MinecraftSkin";

export const MinecraftSkinEditor = () => {
  const [canvas, setCanvas] = useState(null);
  const [texture, setTexture] = useState("/textures/default-skin.png");

  useEffect(() => {
    const canvasElement = document.createElement("canvas");
    canvasElement.width = 64;
    canvasElement.height = 64;
    setCanvas(canvasElement);
  }, []);

  /* const handlePaint = (e) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(e.clientX % 64, e.clientY % 64, 4, 4);
    setTexture(canvas.toDataURL());
  }; */

  return (
    <div className="w-full h-screen" /* onMouseMove={handlePaint} */>
      <Canvas style={{ width: "100%", height: "500px" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <MinecraftSkin texture={texture} />
      </Canvas>
    </div>
  );
}