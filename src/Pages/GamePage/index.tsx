import { useCallback } from "react";
import { useCanvas } from "hooks/useCanvas";
import { loadImage } from "utils/images";
import { useEffect } from "react";

const GamePage = () => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1024, 576);
  };

  const drawImages = (ctx: CanvasRenderingContext2D) => {
    const images = [
      loadImage("Assets/TmaxTown.png"),
      loadImage("Assets/playerDown.png"),
    ];

    Promise.all(images).then(([townImage, playerImage]) => {
      ctx.drawImage(townImage, -735, -600);
      ctx.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvasRef.current!.width / 4 - playerImage.width / 4 / 2,
        canvasRef.current!.height / 4 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
      );
    });
  };

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    fillBackground(ctx);
    drawImages(ctx);
  }, []);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "w":
        console.log("w");
        break;
      case "a":
        console.log("a");
        break;
      case "s":
        console.log("s");
        break;
      case "d":
        console.log("d");
        break;
      default:
        break;
    }
  };

  const canvasRef = useCanvas(1024, 576, draw);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return <canvas ref={canvasRef} />;
};

export default GamePage;
