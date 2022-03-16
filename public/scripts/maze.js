const files = [
  { label: "🦋 Catch a butterfly", path: "Maze 1.svg" },
  { label: "🤖 Bit and their robot", path: "Maze 2.svg" },
  { label: "🗺 Bit at the zoo", path: "Maze 3.svg" },
  { label: "🏸 Bit plays badminton", path: "Maze 4.svg" },
  { label: "🏎️ Bit the racer", path: "Maze 5.svg" },
].map((f) => ({ ...f, path: `images/maze/${f.path}` }));

const loadFile = (file) => {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = file.path;

    img.addEventListener("load", () => resolve(img));
  });
};

export { loadFile, files };
