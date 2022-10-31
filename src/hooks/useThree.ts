import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { onMounted, Ref, shallowRef } from 'vue';
import { markerType } from '#/index';
export function useThree(element: Ref<HTMLElement | undefined>, markers: Array<markerType>, src: string) {
  const scene = shallowRef();
  const camera = shallowRef();
  const renderer = shallowRef();
  const control = shallowRef();
  const sphere = shallowRef();
  const marker = shallowRef();
  onMounted(() => {
    if (element.value) {
      const { clientWidth, clientHeight } = element.value;
      scene.value = initScene();
      camera.value = initCamera(clientWidth, clientHeight);
      renderer.value = initRenderer(clientWidth, clientHeight);
      control.value = initControl();
      sphere.value = initSphere();
      animate();
      const axesHelper = new THREE.AxesHelper(500000);
      scene.value.add(axesHelper);
      const light = new THREE.AmbientLight(0xffffff);
      scene.value.add(light);
    }
   
  });
  const initScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    return scene;
  };
  const initCamera = (width: number, height: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    camera.position.set(2, 0, 0);
    return camera;
  };
  const initRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    element.value?.appendChild(renderer.domElement);
    return renderer;
  };
  const initControl = () => {
    const control = new OrbitControls(camera.value, renderer.value.domElement);
    control.enablePan = false;
    // control.maxDistance = 10;
    control.target.set(0, 0, 0);

    return control;
  };
  const initSphere = () => {
    const texture = new THREE.TextureLoader().load(src);
    const sphereGeometry = new THREE.SphereGeometry(10, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
    sphere.value = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereGeometry.scale(1, 1, -1);
    scene.value.add(sphere.value);
  };
  const animate = () => {
    requestAnimationFrame(animate);
    control.value.update();
    renderer.value.render(scene.value, camera.value);
  };
  const addMarker = (coords: [number, number, number]) => {

      const geometry = new THREE.SphereGeometry(0.1, 64, 64);
      const material = new THREE.MeshLambertMaterial({
        color: 0xd7d710,
      });
      marker.value = new THREE.Mesh(geometry, material);
      marker.value.position.set(...coords);
      scene.value.add(marker.value);

      camera.value.position.set(0, 0, 0);
      // camera.value.position.set(-1 * coords[0], -1 * coords[1], -1 * coords[2]);
      // control.value.target = new THREE.Vector3(...coords);
      // console.log(coords)
      const [x,y,z] = coords
      control.value.target = new THREE.Vector3(x*0.01,y*0.01,z*0.01);
      console.log(control.value.target)
      // setInterval(() => {
      //   control.value.target.set(Math.random() * 10, Math.random() * 10, Math.random() * 10);
      // }, 1000);

      control.value.update();
  };
  watch([markers], () => {
    markers.forEach((marker) => {
      addMarker(marker.coordinates_3d as [number, number, number]);
      console.log("inter")
    });
    // console.log(123)
    // addMarker(markers);
  });
  return {
    scene,
    camera,
    renderer,
    control,
    addMarker,
  };
}
