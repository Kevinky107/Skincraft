import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { MinecraftSkin } from "./MinecraftSkin";

export const MinecraftSkinEditor = () => {
  const [canvas, setCanvas] = useState(null);
  const [texture, setTexture] = useState("/textures/default-skin.png");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [visibleParts, setVisibleParts] = useState({
    head: true,
    torso: true,
    rightArm: true,
    leftArm: true,
    rightLeg: true,
    leftLeg: true,
    head2: true,
    torso2: true,
    rightArm2: true,
    leftArm2: true,
    rightLeg2: true,
    leftLeg2: true,
  });

  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    const canvasElement = document.createElement("canvas");
    canvasElement.width = 64;
    canvasElement.height = 64;
    const ctx = canvasElement.getContext("2d");
    const img = new Image();
    img.src = texture;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 64, 64);
      setCanvas(canvasElement);
    };
  }, [texture]);

  const uploadSkin = (e) => {
    const file = e.target.files[0];
  
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
  
      img.onload = () => {
        if (img.width === 64 && img.height === 64) {
          setTexture(event.target.result);
        } else {
          window.alert("Upload a valid 64x64 PNG file");
        }
      };
    };
  
    reader.readAsDataURL(file);
  };

  const brush = (active) => {
    if(active){

    } else {

    }
  }

  return (
    <div>
      <div>
        <h2>SKIN EDITOR</h2>
        <button
          onClick={()=> {brush(!isPainting); setIsPainting(!isPainting)}}
        >🖌️</button>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        <input
          type="file"
          accept="image/png"
          onChange={(e) => uploadSkin(e)}
        ></input>
        <h3>VISIBLE PARTS:</h3>
        {Object.keys(visibleParts).map((part) => (
          <label key={part}>
            <input
              type="checkbox"
              checked={visibleParts[part]}
              onChange={() => setVisibleParts((prev) => ({ ...prev, [part]: !prev[part] }))}
            />
            {part}
          </label>
        ))}
      </div>
      <div>
        <Canvas style={{ width: "100%", height: "500px" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableRotate={!isPainting} minDistance="3" maxDistance="10"/>
          <MinecraftSkin texture={texture} visibleParts={visibleParts} />
        </Canvas>
      </div>
    </div>
  );
}