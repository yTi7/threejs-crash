import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// Get the canvas
const canvas = document.getElementById("canvas");

// Create a new scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

// Add a point light to the scene
const light = new THREE.PointLight(0xffffff, 100);
light.position.set(2, 2, 5);
scene.add(light);

// Camera settings
const fov = 75;
const width = window.innerWidth;
const height = window.innerHeight;
const near = 0.1;
const far = 1000;

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(
  fov,
  width / height,
  near,
  far
);
camera.position.z = 5;
scene.add(camera);

// Create a cube and add it to the scene
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Create a base and add it to the scene
const baseGeometry = new THREE.BoxGeometry(2, 0.04, 1); // (width: x-axis, height: y-axis, depth: z-axis)
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0 });
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = -0.9;
scene.add(base);

// Create the WebGL renderer and attach it to the canvas
// @ts-ignore
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(width, height);
renderer.pixelRatio = window.devicePixelRatio;

// Add orbit controls to the camera
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01; // Rotate the cube on the x-axis
  cube.rotation.y += 0.01; // Rotate the cube on the y-axis
  renderer.render(scene, camera); // Render the scene from the perspective of the camera
}

animate(); // Start the animation loop
