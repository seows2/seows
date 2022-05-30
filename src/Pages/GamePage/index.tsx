import { useCallback } from "react";
import { useCanvas } from "hooks/useCanvas";
import { loadImages } from "utils/images";
import { useEffect } from "react";

const backgroundPos = { x: -735, y: -600 };
const SPEED = 4;

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const GamePage = () => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1024, 576);
  };

  const drawImages = (
    images: HTMLImageElement[],
    ctx: CanvasRenderingContext2D,
    position: { x: number; y: number }
  ) => {
    const [townImage, playerImage] = images;
    ctx.drawImage(townImage, position.x, position.y);
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
  };

  const animation =
    (images: HTMLImageElement[], ctx: CanvasRenderingContext2D) => () => {
      window.requestAnimationFrame(animation(images, ctx));
      drawImages(images, ctx, backgroundPos);

      if (keys.w.pressed) backgroundPos.y += SPEED;
      if (keys.s.pressed) backgroundPos.y -= SPEED;
      if (keys.a.pressed) backgroundPos.x += SPEED;
      if (keys.d.pressed) backgroundPos.x -= SPEED;
    };

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    fillBackground(ctx);
    loadImages().then((images) => animation(images, ctx)());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key !== "w" && key !== "a" && key !== "s" && key !== "d") return;
    keys[key].pressed = true;
  };
  const handleKeyUp = ({ key }: KeyboardEvent) => {
    if (key !== "w" && key !== "a" && key !== "s" && key !== "d") return;
    keys[key].pressed = false;
  };

  const canvasRef = useCanvas(window.innerWidth, window.innerHeight, draw);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return <canvas ref={canvasRef} />;
};

export default GamePage;
