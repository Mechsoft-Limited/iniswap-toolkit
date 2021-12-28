import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";
const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 1080 1080"
      /* style={{
      enableBackground: "new 0 0 1080 1080",
    }} */
      /*     xmlSpace="preserve"
       */ {...props}
    >
      <style>{".st0{fill:#fbb03b}"}</style>
      <path
        className="st0"
        d="M896.57 682.95c-17.89 65.6-52.67 127.56-104.21 179.1-79.03 79.03-182.61 118.52-286.25 118.52-103.58 0-207.16-39.49-286.19-118.52l64.85-64.85c66.6 74.7 163.59 121.85 271.31 121.85 155.68-.01 288.76-98.31 340.49-236.1z"
      />
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1={391.502} y1={901.084} x2={921.253} y2={440.578}>
        <stop
          offset={0}
          style={{
            stopColor: "#0161c6",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#1176dc",
          }}
        />
      </linearGradient>
      <path
        d="M907.12 555.51c0 193.85-157.19 350.97-351.04 350.97-104.46 0-198.24-45.64-262.52-118.08L399.02 683c59.13 59.2 155.12 59.2 214.31 0 29.63-29.63 44.38-68.42 44.38-107.22s-14.75-77.59-44.38-107.16l175.64-175.64h.06a352.891 352.891 0 0 1 83.11 109.54c.5 1.13 1 2.26 1.57 3.39 5.46 11.8 10.29 23.79 14.56 35.97 1.07 3.08 2.07 6.15 3.08 9.23 10.24 33.03 15.77 68.06 15.77 104.4z"
        style={{
          fill: "url(#SVGID_1_)",
        }}
      />
      <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1={205.105} y1={496.474} x2={788.974} y2={496.474}>
        <stop
          offset={0}
          style={{
            stopColor: "#1176dc",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#0161c6",
          }}
        />
      </linearGradient>
      <path
        d="M556.08 204.54c89.39 0 170.94 33.4 232.89 88.45L684.89 397.07c-59.2-59.2-155.18-59.2-214.38.06-59.2 59.13-59.2 155.12 0 214.31L399.01 683 293.55 788.4c-55.05-61.9-88.45-143.5-88.45-232.89.01-193.85 157.13-350.97 350.98-350.97z"
        style={{
          fill: "url(#SVGID_2_)",
        }}
      />
      <path
        className="st0"
        d="m863.93 218.04-66.1 66.1c-64.28-57.25-149.03-92.15-241.75-92.15-200.44 0-363.53 163.09-363.53 363.53 0 48.84 9.67 95.48 27.24 138.04-80.98-152.92-57.12-346.77 71.63-475.52 158.13-158.13 414.44-158.13 572.51 0z"
      />
    </Svg>
  );
};

export default Icon;
