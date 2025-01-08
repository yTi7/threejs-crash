import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// Get the window dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// Get the canvas
const canvas = document.getElementById("canvas");

// Create a new scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f0f0f);

// Camera settings
const cameraSettings = {
  fov: 75,
  aspect: width / height,
  near: 0.1,
  far: 1000,
};

// Create a perspective camera using the cameraSettings object
const camera = new THREE.PerspectiveCamera(
  cameraSettings.fov,
  cameraSettings.aspect,
  cameraSettings.near,
  cameraSettings.far
);
camera.position.z = 5;
scene.add(camera);

const icosahedronGeometry = new THREE.SphereGeometry(1.0);
const loadingManager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(loadingManager);
const material = loader.load("/8k_earth_daymap.jpg");
loadingManager.onLoad = () => {
  const icosahedronMaterial = new THREE.MeshStandardMaterial({ map: material });
  const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial); // This is the final mesh

  scene.add(icosahedron);
};
// Create a wireframe material
const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const wireMesh = new THREE.Mesh(icosahedronGeometry, wireMat); // Create a wireframe mesh
wireMesh.scale.setScalar(1.07); // Scale the wireframe mesh slightly larger than the icosahedron (sphere)
// icosahedron.add(wireMesh); // Add the wireframe to the mesh

// Create a Hemisphere light that acts as a global light source (sky and ground)
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(hemiLight);

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
  // icosahedron.rotation.x += 0.01;
  // icosahedron.rotation.y += 0.01;
  renderer.render(scene, camera); // Render the scene from the perspective of the camera
  controls.update(); // Update the controls
}

animate(); // Start the animation loop
