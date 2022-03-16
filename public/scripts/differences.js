const files = [
  { label: "🔎 Bit and T-Rex", path: "Circle the Difference 1.svg" },
  { label: "🔎 Bit and Xamarin", path: "Circle the Difference 2.svg" },
  { label: "🔎 Bit and friends play sport", path: "Circle the Difference 3.svg" },
  { label: "🔎 Bit at a user group", path: "Circle the Difference 4.svg" },
  { label: "🔎 Bit and Clippy", path: "Circle the Difference 5.svg" },
].map((f) => ({ ...f, path: `images/differences/${f.path}` }));

const loadFile = (file) => {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = file.path;

    img.addEventListener("load", () => resolve(img));
  });
};

export { loadFile, files };
