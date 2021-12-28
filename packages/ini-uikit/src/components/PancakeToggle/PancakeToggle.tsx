import React from "react";
import { PancakeStack, PancakeInput, PancakeLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";
import { Toggle } from "../Toggle";
const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <Toggle {...props}>
    {/* <PancakeStack scale={scale}>
    <PancakeInput id={props.id || "pancake-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || "pancake-toggle"}>
     { <div className="pancakes">
        <div className="pancake" />
        <div className="pancakeb" />
        <div className="pancakeb" />
        <div className="butterb" />
      </div>}
    </PancakeLabel>
  </PancakeStack> */}
  </Toggle>
);

export default PancakeToggle;
