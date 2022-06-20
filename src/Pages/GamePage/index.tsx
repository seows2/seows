import { useCallback } from "react";
import { useCanvas } from "hooks/useCanvas";
import { loadImages } from "utils/images";
import { useEffect } from "react";
import { collistionsMap } from "data/collisions";

const backGroundPos = { x: -735, y: -600 };
const boundaryPos = { x: -735, y: -600 };
const PLAYER_FRAME = {
  CURRENT: 0,
  MAX: 4,
  ELAPSED: 0,
};
const SPEED = 3;
let moving = false;
let lastKey = "";

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
  const drawPlayer = (
    playerImage: HTMLImageElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.drawImage(
      playerImage,
      PLAYER_FRAME.CURRENT * (playerImage.width / PLAYER_FRAME.MAX),
      0,
      playerImage.width / PLAYER_FRAME.MAX,
      playerImage.height,
      canvasRef.current!.width / 4 - playerImage.width / PLAYER_FRAME.MAX / 2,
      canvasRef.current!.height / 4 - playerImage.height / 2,
      playerImage.width / PLAYER_FRAME.MAX,
      playerImage.height
    );

    if (!moving) return;

    if (PLAYER_FRAME.MAX > 1) {
      PLAYER_FRAME.ELAPSED++;
    }
    if (PLAYER_FRAME.ELAPSED % 20 === 0) {
      if (PLAYER_FRAME.CURRENT < PLAYER_FRAME.MAX - 1) PLAYER_FRAME.CURRENT++;
      else PLAYER_FRAME.CURRENT = 0;
      PLAYER_FRAME.ELAPSED = 0;
    }
  };

  const drawGeneral = (
    image: HTMLImageElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.drawImage(image, backGroundPos.x, backGroundPos.y);
  };

  const animation =
    (images: HTMLImageElement[], ctx: CanvasRenderingContext2D) => () => {
      const animationID = window.requestAnimationFrame(animation(images, ctx));
      if (!canvasRef.current) {
        cancelAnimationFrame(animationID);
      }

      const [
        townImage,
        foregroundImage,
        playerUpImage,
        playerLeftImage,
        playerRightImage,
        playerDownImage,
      ] = images;

      const playerImage =
        {
          w: playerUpImage,
          a: playerLeftImage,
          d: playerRightImage,
          s: playerDownImage,
        }[lastKey] ?? playerDownImage;

      const playerStaticPos = {
        x: canvasRef.current!.width / 4 - playerImage.width / 4 / 2,
        y: canvasRef.current!.height / 4 - playerImage.height / 2,
      };
      drawGeneral(townImage, ctx);
      drawPlayer(playerImage, ctx);
      drawGeneral(foregroundImage, ctx);

      moving = false;

      if (keys.w.pressed) {
        let isCollision = false;
        moving = true;
        collistionsMap.forEach((row, i) => {
          row.forEach((symbol, j) => {
            if (symbol !== 1025) return;
            if (
              48 * j + boundaryPos.x - playerImage.width / 4 <=
                playerStaticPos.x &&
              48 * i + boundaryPos.y - playerImage.height <=
                playerStaticPos.y &&
              48 * j + boundaryPos.x + playerImage.width / 4 >=
                playerStaticPos.x &&
              48 * i + boundaryPos.y + playerImage.height - 17 >=
                playerStaticPos.y
            ) {
              isCollision = true;
            }
          });
        });

        if (isCollision) return;

        backGroundPos.y += SPEED;
        boundaryPos.y += SPEED;
      }
      if (keys.s.pressed) {
        let isCollision = false;
        moving = true;
        collistionsMap.forEach((row, i) => {
          row.forEach((symbol, j) => {
            if (symbol !== 1025) return;
            if (
              48 * j + boundaryPos.x - playerImage.width / 4 <=
                playerStaticPos.x &&
              48 * i + boundaryPos.y - playerImage.height <=
                playerStaticPos.y + 3 &&
              48 * j + boundaryPos.x + playerImage.width / 4 >=
                playerStaticPos.x &&
              48 * i + boundaryPos.y + playerImage.height - 20 >=
                playerStaticPos.y
            ) {
              isCollision = true;
            }
          });
        });

        if (isCollision) return;
        backGroundPos.y -= SPEED;
        boundaryPos.y -= SPEED;
      }
      if (keys.a.pressed) {
        let isCollision = false;
        moving = true;
        collistionsMap.forEach((row, i) => {
          row.forEach((symbol, j) => {
            if (symbol !== 1025) return;
            if (
              48 * j + boundaryPos.x - playerImage.width / 4 <=
                playerStaticPos.x &&
              48 * i + boundaryPos.y - playerImage.height <=
                playerStaticPos.y &&
              48 * j + boundaryPos.x + playerImage.width / 4 >=
                playerStaticPos.x - 3 &&
              48 * i + boundaryPos.y + playerImage.height - 20 >=
                playerStaticPos.y
            ) {
              isCollision = true;
            }
          });
        });

        if (isCollision) return;
        backGroundPos.x += SPEED;
        boundaryPos.x += SPEED;
      }
      if (keys.d.pressed) {
        let isCollision = false;
        moving = true;
        collistionsMap.forEach((row, i) => {
          row.forEach((symbol, j) => {
            if (symbol !== 1025) return;
            if (
              48 * j + boundaryPos.x - playerImage.width / 4 <=
                playerStaticPos.x + 3 &&
              48 * i + boundaryPos.y - playerImage.height <=
                playerStaticPos.y &&
              48 * j + boundaryPos.x + playerImage.width / 4 >=
                playerStaticPos.x &&
              48 * i + boundaryPos.y + playerImage.height - 20 >=
                playerStaticPos.y
            ) {
              isCollision = true;
            }
          });
        });

        if (isCollision) return;
        backGroundPos.x -= SPEED;
        boundaryPos.x -= SPEED;
      }
    };

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    loadImages().then((images) => animation(images, ctx)());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key !== "w" && key !== "a" && key !== "s" && key !== "d") return;
    keys[key].pressed = true;
    lastKey = key;
  };
  const handleKeyUp = ({ key }: KeyboardEvent) => {
    if (key !== "w" && key !== "a" && key !== "s" && key !== "d") return;
    keys[key].pressed = false;
  };

  const canvasRef = useCanvas(window.innerWidth, window.innerHeight - 72, draw);

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
