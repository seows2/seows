const loadImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (err) => reject(err));
    image.src = url;
  });

const loadImages = async () => {
  const images = [
    loadImage("Assets/TmaxTown.png"),
    loadImage("Assets/playerDown.png"),
  ];
  return await Promise.all(images);
};

export { loadImages };
