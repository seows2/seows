import { useCallback } from "react";
import { useCanvas } from "hooks/useCanvas";

const GamePage = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1024, 576);
  }, []);
  const canvasRef = useCanvas(1024, 576, draw);

  return <canvas ref={canvasRef} />;
};

export default GamePage;
