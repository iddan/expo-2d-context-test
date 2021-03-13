import { GLView } from "expo-gl";
import React from "react";
import Expo2DContext from "expo-2d-context";

export default class App extends React.Component {
  render() {
    return (
      <GLView style={{ flex: 1 }} onContextCreate={this._onGLContextCreate} />
    );
  }
  _onGLContextCreate = async (gl) => {
    var ctx = new Expo2DContext(gl);
    ctx.translate(50, 200);
    ctx.scale(4, 4);
    ctx.fillStyle = "grey";
    ctx.fillRect(20, 40, 100, 100);
    ctx.fillStyle = "white";
    ctx.fillRect(30, 100, 20, 30);
    ctx.fillRect(60, 100, 20, 30);
    ctx.fillRect(90, 100, 20, 30);
    ctx.beginPath();
    ctx.arc(50, 70, 18, 0, 2 * Math.PI);
    ctx.arc(90, 70, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(50, 70, 8, 0, 2 * Math.PI);
    ctx.arc(90, 70, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(70, 40);
    ctx.lineTo(70, 30);
    ctx.arc(70, 20, 10, 0.5 * Math.PI, 2.5 * Math.PI);
    ctx.stroke();
    await ctx.initializeText();
    ctx.font = "80px Calibri";
    ctx.fillText("Calibri", 10, 900);
    ctx.font = "80px Courier New";
    ctx.fillText("Courier New", 10, 1000);
    ctx.font = "80px Times New Roman";
    ctx.fillText("Times New Roman", 10, 1100);
    ctx.flush();
  };
}
