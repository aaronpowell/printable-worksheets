const files = [
  { label: "✏ Bit's first day at school", path: "Connect the dots 1.svg" },
  { label: "✏ Who's Bit's friend", path: "Connect the dots 2.svg" },
  { label: "✏ Bit and Java Duke", path: "Connect the dots 3.svg" },
  { label: "✏ Make Bit's laptop", path: "Connect the dots 4.svg" },
  { label: "✏ Bit learns to code", path: "Connect the dots 5.svg" },
].map((f) => ({ ...f, path: `images/connect-the-dots/${f.path}` }));

const loadFile = (file) => {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = file.path;

    img.addEventListener("load", () => resolve(img));
  });
};

export { loadFile, files };
