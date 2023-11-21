import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import Three from "./component/three";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows={true}>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
