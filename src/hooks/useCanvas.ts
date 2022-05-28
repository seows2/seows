import { RefObject, useEffect, useRef } from "react";

export const useCanvas = (
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D) => void
) => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;

      if (canvas && ctx) {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();

    if (ctx) {
      draw(ctx);
    }
  }, [width, height, draw]);

  return canvasRef;
};
