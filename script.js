import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
});

const container = document.getElementById('canvas-container');
const placeholder = container.querySelector('.placeholder-content');
const lightBtn = document.getElementById('btn-toggle-light');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 3000);
camera.position.set(45, 33, 45);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

const setupLight = new THREE.DirectionalLight(0x3b82f6, 2.2);
setupLight.position.set(20, 50, 25);
setupLight.castShadow = true;

setupLight.shadow.mapSize.width = 2048;
setupLight.shadow.mapSize.height = 2048;
setupLight.shadow.camera.near = 0.5;
setupLight.shadow.camera.far = 200;

const d = 60;
setupLight.shadow.camera.left = -d;
setupLight.shadow.camera.right = d;
setupLight.shadow.camera.top = d;
setupLight.shadow.camera.bottom = -d;
setupLight.shadow.bias = -0.0005;

scene.add(setupLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.1;
controls.minPolarAngle = Math.PI / 6;
controls.enablePan = false;

function resizeCanvas() {
    if (!container) return;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

resizeCanvas();

let isNeonBlue = true;
if (lightBtn) {
    lightBtn.addEventListener('click', () => {
        if (isNeonBlue) {
            setupLight.color.setHex(0xff007f);
            lightBtn.style.backgroundColor = '#ff007f';
        } else {
            setupLight.color.setHex(0x3b82f6);
            lightBtn.style.backgroundColor = '#3b82f6';
        }
        isNeonBlue = !isNeonBlue;
    });
}

const loader = new GLTFLoader();
loader.load(
    'assets/room.glb',
    (gltf) => {
        const model = gltf.scene;
        
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        
        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        model.traverse((node) => {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
                if (node.material) {
                    node.material.depthWrite = true;
                }
            }
        });

        scene.add(model);

        resizeCanvas();
        
        controls.target.set(0, 0, 0);
        controls.maxDistance = 1100;
        controls.minDistance = 15;
        controls.update();

        if (placeholder) placeholder.remove();
        container.appendChild(renderer.domElement);
        
        renderer.render(scene, camera);
    },
    (xhr) => {
        if (xhr.total > 0) {
            console.log(`Cargando modelo: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
        }
    },
    (error) => {
        console.error('Hubo un error al procesar el archivo room.glb:', error);
    }
);

window.addEventListener('resize', resizeCanvas);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();