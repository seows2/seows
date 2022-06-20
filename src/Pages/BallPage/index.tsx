import Ball from "Components/Ball";
import { useCanvas } from "hooks/useCanvas";
import { useCallback } from "react";

const BallPage = () => {
  const animation = (ctx: CanvasRenderingContext2D) => () => {
    const animationID = window.requestAnimationFrame(animation(ctx));
    if (!canvasRef.current) {
      cancelAnimationFrame(animationID);
    }
    if (canvasRef.current) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ball.draw(ctx, window.innerWidth, window.innerHeight);
    }
  };
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    animation(ctx)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canvasRef = useCanvas(window.innerWidth, window.innerHeight - 72, draw);
  const ball = new Ball(window.innerWidth, window.innerHeight - 72, 60, 10);

  return <canvas ref={canvasRef} />;
};

export default BallPage;
