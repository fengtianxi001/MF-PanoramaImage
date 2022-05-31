import * as THREE from "three";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { fetchImage } from "./utils";
import { isFunction, forEach } from "lodash-es";

class ThreeBase {
  constructor(container) {
    this.isOpenDeviceControls = false;
    this.container = container;
    this.scene = this.initScene();
    this.camera = this.initCamera();
    this.renderer = this.initRenderer();
    this.deviceControls = this.initDeviceControls();
    this.orbitControls = this.initOrbitControls();
    this.sphere = this.initSphere();
    this.GUI = this.initGUI();
    this.animate();
  }
  initScene() {
    const scene = new THREE.Scene();
    return scene;
  }
  initCamera() {
    const fov = 90;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.01);
    camera.lookAt(0, 0, 0);
    return camera;
  }
  initRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1.0);
    this.container.appendChild(renderer.domElement);
    return renderer;
  }
  initLight() {
    const light = new THREE.HemisphereLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);
    return this;
  }
  initHelper() {
    const axesHelper = new THREE.AxesHelper(5 * 1000);
    this.scene.add(axesHelper);
    return this;
  }
  initDeviceControls() {
    const controls = new DeviceOrientationControls(this.camera);
    return controls;
  }
  initOrbitControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    return controls;
  }
  initSphere() {
    const texture = this.initTexture("bg2");
    const sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
    sphereGeometry.scale(1, 1, -1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphere);
    return sphere;
  }
  initTexture(imageName = "bg2") {
    const img = fetchImage(imageName);
    const texture = new THREE.TextureLoader().load(img);
    return texture;
  }
  updateSphereMaterial(imageName) {
    const texture = this.initTexture(imageName);
    if (!this.sphere) return null;
    this.sphere.material.map = texture;
  }
  initGUI() {
    const arr = [
      {
        title: "是否开启陀螺仪",
        settings: {
          isOpen: false,
        },
        callback: (value) => {
            this.isOpenDeviceControls = value
        },
      },
      {
        title: "全景图片",
        settings: {
          全景图片1: () => {
              this.updateSphereMaterial("bg2")
          },
          全景图片2: () => {
            this.updateSphereMaterial("bg3")
          },
        },
      },
    ];
    const gui = new GUI();
    this.GuiFactory(gui, arr);
  }
  GuiFactory(gui, arr) {
    arr.forEach((item) => {
      const folder = gui.addFolder(item.title);
      folder.open()
      forEach(item.settings, (value, key) => {
        const folderItem = folder.add(item.settings, key);
        if (isFunction(item.callback)) {
          folderItem.onChange(item.callback);
        }
      });
    });
  }
  animate() {
    if (this.isOpenDeviceControls) {
      this.deviceControls.update();
    } else {
      this.orbitControls.update();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }
}
export default ThreeBase;
