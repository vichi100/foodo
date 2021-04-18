import React from "react";
import { mergeViewStyle } from "../Utils";

export const getProps = props => {
  const colorFallback = props.color ? props.color : "#898aff";
  return {
    style: mergeViewStyle(props.style, {
      minWidth: 100,
      maxWidth: 100
    }),
    shadow: props.shadow ? props.shadow : true,
    width: props.width ? props.width : 70,
    colorAsBackground: true,
    color: colorFallback,
    textColor: "#000",
    inputStyle: mergeViewStyle(props.inputStyle, {
      borderRadius: 30,
      backgroundColor: "#FFF",
      minWidth: 70,
      maxWidth: 70,
      height: 30
    })
  };
};
