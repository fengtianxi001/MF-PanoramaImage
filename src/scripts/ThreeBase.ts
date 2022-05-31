import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//@ts-ignore
import { DeviceOrientationControls } from "./DeviceOrientationControls.js";
export function fetchImage(name: string) {
  const path = `../images/${name}.jpg`;
  const modules = import.meta.globEager("../images/*.jpg");
  return modules[path].default;
}

class ThreeBase {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  container: HTMLElement;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = this.initScene();
    this.camera = this.initCamera();
    this.renderer = this.initRenderer();
    this.controls = this.initControls();
    this.animate();
  }
  initScene(): THREE.Scene {
    const scene = new THREE.Scene();
    return scene;
  }
  initCamera(): THREE.PerspectiveCamera {
    const fov = 90;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.01);
    camera.lookAt(0, 0, 0);
    return camera;
  }
  initRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1.0);
    this.container.appendChild(renderer.domElement);
    return renderer;
  }
  initControls(): OrbitControls {
    // const controls = new DeviceOrientationControls(this.camera);
    // return controls;
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    return controls;
  }
  initLight(): this {
    const light = new THREE.HemisphereLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);
    return this;
  }
  initHelper(): this {
    const axesHelper = new THREE.AxesHelper(5 * 1000);
    this.scene.add(axesHelper);
    return this;
  }
  initSphere(): this {
    const img = fetchImage("bg");
    const sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
    sphereGeometry.scale(1, 1, -1);
    const texture = new THREE.TextureLoader().load(img);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphere);
    return this;
  }
  animate() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }
}

export default ThreeBase;
