const fs = require("fs");
const mode = process.argv[3];
const reference = process.argv[4];

const BASE_COLORS =
  mode === "light"
    ? {
        primary: "#1FC7D4",
        primaryBright: "#53DEE9",
        primaryDark: "#0098A1",
        secondary: "#7645D9",
        success: "#31D0AA",
        warning: "#FFB237",
        failure: "#ED4B9E",
      }
    : {
        failure: "#ED4B9E",
        primary: "#1FC7D4",
        primaryBright: "#53DEE9",
        primaryDark: "#0098A1",
        secondary: "#9A6AFF",
        success: "#31D0AA",
        warning: "#FFB237",
      };

const ADDITIONAL_COLORS = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};
const GRADIENTS =
  mode === "light"
    ? {
        bubblegum: { a: "139.73deg", start: "#E5FDFF", sp: "0%", end: "#F3EFFF", ep: "100%" },
        inverseBubblegum: { a: "139.73deg", start: "#F3EFFF", sp: "0%", end: "#E5FDFF", ep: "100%" },
        cardHeader: { a: "111.68deg", start: "#F2ECF2", sp: "0%", end: "#E8F2F6", ep: "100%" },
        blue: { a: "180deg", start: "#A7E8F1", sp: "0%", end: "#94E1F2", ep: "100%" },
        violet: { a: "180deg", start: "#E2C9FB", sp: "0%", end: "#CDB8FA", ep: "100%" },
        violetAlt: { a: "180deg", start: "#CBD7EF", sp: "0%", end: "#9A9FD0", ep: "100%" },
        gold: { a: "180deg", start: "#FFD800", sp: "0%", end: "#FDAB32", ep: "100%" },
      }
    : {
        bubblegum: { a: "139.73deg", start: "#313D5C", sp: "0%", end: "#3D2A54", ep: "100%" },
        inverseBubblegum: { a: "139.73deg", start: "#3D2A54", sp: "0%", end: "#313D5C", ep: "100%" },
        cardHeader: { a: "111.68deg", start: "#3B4155", sp: "0%", end: "#3A3045", ep: "100%" },
        blue: { a: "180deg", start: "#00707F", sp: "0%", end: "#19778C", ep: "100%" },
        violet: { a: "180deg", start: "#6C4999", sp: "0%", end: "#6D4DB2", ep: "100%" },
        violetAlt: { a: "180deg", start: "#434575", sp: "0%", end: "#66578D", ep: "100%" },
        gold: { a: "180deg", start: "#FFD800", sp: "0%", end: "#FDAB32", ep: "100%" },
      };

const COLORS =
  mode === "light"
    ? {
        background: "#FAF9FA",
        backgroundDisabled: "#E9EAEB",
        backgroundAlt: "#FFFFFF",
        backgroundAlt2: "#ffffff", //"rgba(255, 255, 255, 0.7)",
        cardBorder: "#E7E3EB",
        contrast: "#191326",
        dropdown: "#F6F6F6",
        dropdownDeep: "#EEEEEE",
        invertedContrast: "#FFFFFF",
        input: "#eeeaf4",
        inputSecondary: "#d7caec",
        tertiary: "#EFF4F5",
        text: "#280D5F",
        textDisabled: "#BDC2C4",
        textSubtle: "#7A6EAA",
        disabled: "#E9EAEB",
      }
    : {
        secondary: "#ffe26c", // "#9A6AFF",
        background: "#000000",
        backgroundDisabled: "#3c3742",
        backgroundAlt: "#27262c",
        backgroundAlt2: "#27262c",
        cardBorder: "#383241",
        contrast: "#FFFFFF",
        dropdown: "#1E1D20",
        dropdownDeep: "#100C18",
        invertedContrast: "#191326",
        input: "#372F47",
        inputSecondary: "#262130",
        primaryDark: "#0098A1",
        tertiary: "#353547",
        text: "#F4EEFF",
        textDisabled: "#666171",
        textSubtle: "#B8ADD2",
        disabled: "#524B63",
      };

const stringToHex = (string) => {
  let str = string.replace(/^#/, "");
  let red = str.substring(0, 2);
  let green = str.substring(2, 4);
  let blue = str.substring(4, 6);

  return [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
};
const calculateGradients = (primaryColor) => {
  const gradients = {};
  const referenceColor = stringToHex(reference);

  Object.keys(GRADIENTS).forEach((key) => {
    const gradient = GRADIENTS[key];
    const start = stringToHex(gradient.start);
    const end = stringToHex(gradient.end);
    let redStart = Math.round((primaryColor[0] * start[0]) / referenceColor[0]);
    let greenStart = Math.round((primaryColor[1] * start[1]) / referenceColor[1]);
    let blueStart = Math.round((primaryColor[2] * start[2]) / referenceColor[2]);
    if (redStart > 255) redStart = redStart % 255;
    if (greenStart > 255) greenStart = greenStart % 255;
    if (blueStart > 255) blueStart = blueStart % 255;
    redStart = rgbToHex(redStart);
    greenStart = rgbToHex(greenStart);
    blueStart = rgbToHex(blueStart);
    let redEnd = Math.round((primaryColor[0] * end[0]) / referenceColor[0]);
    let greenEnd = Math.round((primaryColor[1] * end[1]) / referenceColor[1]);
    let blueEnd = Math.round((primaryColor[2] * end[2]) / referenceColor[2]);
    if (redEnd > 255) redEnd = redEnd % 255;
    if (greenEnd > 255) greenEnd = greenEnd % 255;
    if (blueEnd > 255) blueEnd = blueEnd % 255;
    redEnd = rgbToHex(redEnd);
    greenEnd = rgbToHex(greenEnd);
    blueEnd = rgbToHex(blueEnd);
    const s = `#${redStart}${greenStart}${blueStart}`;
    const e = `#${redEnd}${greenEnd}${blueEnd}`;

    gradients[key] = `linear-gradient(${gradient.a}, ${s} ${gradient.sp}, ${e} ${gradient.ep})`;
  });

  return gradients;
};
const rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};
const calculateColors = (primaryColor) => {
  const colors = {};
  const referenceColor = stringToHex(reference);

  Object.keys(COLORS).forEach((key) => {
    const color = stringToHex(COLORS[key]);
    let red = Math.round((primaryColor[0] * color[0]) / referenceColor[0]);
    let green = Math.round((primaryColor[1] * color[1]) / referenceColor[1]);
    let blue = Math.round((primaryColor[2] * color[2]) / referenceColor[2]);
    if (red > 255) red = red % 255;
    if (green > 255) green = green % 255;
    if (blue > 255) blue = blue % 255;
    red = rgbToHex(red);
    green = rgbToHex(green);
    blue = rgbToHex(blue);
    colors[key] = `#${red}${green}${blue}`;
  });
  Object.keys(BASE_COLORS).forEach((key) => {
    const color = stringToHex(BASE_COLORS[key]);
    let red = Math.round((primaryColor[0] * color[0]) / referenceColor[0]);
    let green = Math.round((primaryColor[1] * color[1]) / referenceColor[1]);
    let blue = Math.round((primaryColor[2] * color[2]) / referenceColor[2]);
    if (red > 255) red = red % 255;
    if (green > 255) green = green % 255;
    if (blue > 255) blue = blue % 255;
    red = rgbToHex(red);
    green = rgbToHex(green);
    blue = rgbToHex(blue);
    colors[key] = `#${red}${green}${blue}`;
  });
  return colors;
};
const calculateVariants = (primaryColor) => {};

const main = (color) => {
  const primaryColor = stringToHex(color);
  const colors = calculateColors(primaryColor);
  const gradients = calculateGradients(primaryColor);
  const variants = calculateVariants(primaryColor);
  return {
    colors,
    gradients,
    variants,
  };
};

const primary = process.argv[2];
if (primary) {
  const theme = main(primary);
  fs.writeFileSync(`./src/theme.json`, JSON.stringify(theme, null, 2));
  console.log("Color schemes generated");
} else {
  throw new Error("No primary color provided");
}
