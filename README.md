# Interactive 3D Engineering Portfolio 🚀

A modern, highly interactive personal portfolio website tailored for Computer Systems Engineering. This project seamlessly bridges heavy-duty 3D graphics rendering in the browser with adaptive UI components and state-of-the-art mobile animation showcases.

---

## 🌟 Key Features

* **📦 Immersive 3D Workspace Environment**
  * Renders a fully detailed developer setup modeled in Blender (`room.glb`) using **Three.js** and WebGL.
  * Integration of **OrbitControls** enabling smooth damping, bounded zoom, and orbit constraints.
  * Automated centralized alignment via dynamic bounding box computations (`THREE.Box3`).

* **💡 Interactive Setup Lighting**
  * Dedicated environment control to toggle the setup's ambient accent colors.
  * Real-time dynamic hex shifting between **Cyberpunk Neon Pink** and **Tech Neon Blue** via hardware-accelerated DirectionalLights with soft shadows (`THREE.PCFSoftShadowMap`).

* **🌓 Seamless Theme Switching (Light/Dark Mode)**
  * Full layout adaptation using standardized modern CSS Custom Properties (`:root` variables).
  * Smooth cubic-bezier transitions across backgrounds, typography, borders, and asset cards.
  * Persistent selection framework caching user theme preferences directly inside localized browser storage (`localStorage`).

* **📱 Advanced Mobile Animation Showcase**
  * Dedicated interactive viewport highlighting a production-ready **Flutter & Dart** architecture.
  * Real-time rendering of a state-machine driven login screen interface utilizing **Rive Engine** vector animations (`Osito.gif`).

* **⚡ Modern Performance Architecture**
  * Implementation of standardized standard W3C Import Maps for modular, CDN-driven dependency management without bundling overhead.
  * Hardware-optimized rendering pixel-ratio boundaries and fluid resize handlers adapting to multiple display viewports.
  * Fully responsive CSS Grid layouts designed with elegant, desaturated color palettes matching custom viewport dimensions.

---

## 🛠️ Tech Stack & Ecosystem

* **Frontend Architecture:** HTML5, Modern CSS3 (Variables, Custom Transitions, Grid/Flex layouts), Vanilla JavaScript (ES6+ Modules).
* **3D Graphics Engine:** Three.js (WebGL Core), GLTFLoader, OrbitControls.
* **Asset Modeling Pipeline:** Blender 4.2 LTS (Shadow maps, depth buffers, mesh optimization).
* **Mobile & Animation:** Flutter SDK, Dart, Rive Engine, State Machines.
* **Version Control:** Git & GitHub workflows following strict Conventional Commits standards.

---

## 🚀 Quick Local Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/anntoniotp/Project-3D-model.git]
   cd Project-3D-model

   ├── assets
   │   ├── room.glb       # Optimized 3D Scene Asset
   │   ├── Osito.gif      # Flutter/Rive Logic Animation Preview
   │   └── perfil.png     # Engineering Profile Identity Picture
   ├── index.html         # Document Structure & Import Maps
   ├── styles.css         # Theme Ecosystem & Component Design
   └── script.js          # Unified Core & Three.js Animation Runtime

---

## 📬 Contact & Professional Networks

If you have any questions about this Computer Systems Engineering project, want to discuss software engineering, or would like to connect professionally, feel free to reach out through any of the following channels:

* 📧 **Institutional Email:** [LE24080019@merida.tecnm.mx](mailto:LE24080019@merida.tecnm.mx)
* 💻 **GitHub Profile:** [@anntoniotp](https://github.com/anntoniotp)
