import "./styles/global.css";
import ThreeBase from "./scripts/ThreeBase";
import VConsole from "vconsole";
new VConsole();
const container = document.querySelector("#app") as HTMLElement;
const threeBase = new ThreeBase(container);
console.log(threeBase.initHelper().initSphere());

var updateGravity = function (event: any) {
  console.log("alpha:", event.alpha); // X
  console.log("beta:", event.beta); // Y
  console.log("gamma:", event.gamma); // Z
};

// 监听 window 的 deviceorientation 事件
window.addEventListener("deviceorientation", updateGravity, false);
