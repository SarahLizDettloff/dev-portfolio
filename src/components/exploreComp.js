import React, { Component } from "react";
import * as THREE from "three";
import { FaPaintBrush, FaSnowflake } from "react-icons/fa";
import {
  GiTumbleweed,
  GiNightSleep,
  GiCastle,
} from "react-icons/gi";

import "../styles/Canvas.css";

import artistWorkshop from "../assets/skybox/artist_workshop_4k.png";
import kiaraDawn from "../assets/skybox/kiaraDawn.png";
import vignaioli_night from "../assets/skybox/vignaioli_night.png";
import winterEvening from "../assets/skybox/winterEvening.png";
import zavelstein from "../assets/skybox/zavelstein_4k.png";

const OrbitControls = require("three-orbit-controls")(THREE);
class Shape extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.addCube = this.addCube.bind(this);
    this.addLight = this.addLight.bind(this);
    this.skyBox = this.skyBox.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
    this.initializeOrbits = this.initializeOrbits.bind(this);
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, width / height, 0.15, 100);
    this.camera.position.set(0, 0, 0);
    this.scene.add(new THREE.AmbientLight(0x505050));

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.2;
    spotLight.position.set(2, 3, 3);
    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 3;
    spotLight.shadow.camera.far = 5;
    spotLight.shadow.mapSize.width = 100;
    spotLight.shadow.mapSize.height = 300;
    this.scene.add(spotLight);

    var dirLight = new THREE.DirectionalLight(0x55505a, 1);
    dirLight.position.set(0, 0, 0);
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;
    dirLight.shadow.camera.right = 1;
    dirLight.shadow.camera.left = -1;
    dirLight.shadow.camera.top = 1;
    dirLight.shadow.camera.bottom = -1;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    this.scene.add(dirLight);

    this.sunLight = new THREE.DirectionalLight(0xd63710, 10);
    this.sunLight.position.set(-300, 100, -400);
    this.sunLight.position.multiplyScalar(5.0);

    this.sunLight.castShadow = true;
    // this.sunLight.shadowCameraVisible = true;

    this.sunLight.shadowMapWidth = 512;
    this.sunLight.shadowMapHeight = 512;

    this.sunLight.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene.add(this.sunLight);


    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxDistance = 5;
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.initializeOrbits();
    this.initializeCamera();

    this.skyBox();

    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    this.scene.add(ambientLight);

    var light = new THREE.DirectionalLight(0xffffff, 0.35);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: "#3B9BB5",
      shininess: 150,
      clearCoat: 0.45,
    });
    this.cube = new THREE.Mesh(geometry, material);

    const blue = new THREE.MeshPhongMaterial({
      color: "#03184B",
      shininess: 150,
      clearCoat: 0.45,
    });
    this.cube2 = new THREE.Mesh(geometry, blue);
    this.cube2.position.set(5, -2, -5);

    const purple = new THREE.MeshPhongMaterial({
      color: "#47042F",
      shininess: 150,
      clearCoat: 0.45,
    });
    this.cube3 = new THREE.Mesh(geometry, purple);
    this.cube3.position.set(-5, -2, -5);

    this.cube4 = new THREE.Mesh(geometry, blue);
    this.cube4.position.set(-8, -1, -8);

    this.cube5 = new THREE.Mesh(geometry, purple);
    this.cube5.position.set(8, -1, -8);

    this.object = new THREE.Mesh(
      new THREE.TetrahedronBufferGeometry(75, 0),
      material
    );
    this.object.position.set(0, 0, 0);
    this.scene.add(
      this.cube,
      this.cube2,
      this.cube3,
      this.cube4,
      this.cube5,
      this.object
    );

    this.light = new THREE.PointLight(0xffff00);
    this.light.position.set(10, 0, 10);
    this.scene.add(this.light);

    this.animate();
  }

  skyBox() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(winterEvening);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
    const plane = new THREE.BoxBufferGeometry(15, 15, 15);
    this.bgMesh = new THREE.Mesh(plane, material);
    this.scene.add(this.bgMesh);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  initializeOrbits() {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }

  initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 0.1;
  }

  animate() {
    this.cube.rotation.z += 0.01;
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.cube2.rotation.z += 0.01;
    this.cube2.rotation.x += 0.01;
    this.cube2.rotation.y += 0.01;
    this.cube3.rotation.z += 0.01;
    this.cube3.rotation.x += 0.01;
    this.cube3.rotation.y += 0.01;
    this.cube4.rotation.z += 0.02;
    this.cube4.rotation.x += 0.02;
    this.cube4.rotation.y += 0.02;
    this.cube5.rotation.z += 0.02;
    this.cube5.rotation.x += 0.02;
    this.cube.rotation.y += 0.02;
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  addCube(cube) {
    this.scene.add(cube);
  }

  addLight(light) {
    this.scene.add(light);
  }


  vignaioli_night() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(vignaioli_night);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
  }

  kiaraDawn() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(kiaraDawn);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
  }

  winterEvening() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(winterEvening);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
  }

  artistWorkshop() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(artistWorkshop);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
  }

  zavelstein() {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(zavelstein);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    material.uniforms.tEquirect.value = texture;
  }

  render() {
    return (
      <div class="explore">
        <div
          id="boardCanvas"
          style={{ width: "100%", height: "50vw" }}
          ref={(mount) => {
            this.mount = mount;
          }}
        />
        <nav class="explore_left_side_nav">
          <p>Click, hold and pull to look around on the screen.</p>
          <button class="button_glitch" type="button" onClick={this.artistWorkshop}>
            Artist Workshop &nbsp; &nbsp; &nbsp; <FaPaintBrush></FaPaintBrush>
          </button>
          <button class="button_glitch" type="button" onClick={this.kiaraDawn}>
            Kiara Dawn &nbsp; &nbsp; &nbsp; <GiTumbleweed></GiTumbleweed>
          </button>
          <button class="button_glitch" type="button" onClick={this.vignaioli_night}>
            Vignaioli Night &nbsp; &nbsp; &nbsp; <GiNightSleep></GiNightSleep>
          </button>
          <button class="button_glitch" type="button" onClick={this.winterEvening}>
            Winter Evening &nbsp; &nbsp; &nbsp; <FaSnowflake></FaSnowflake>
          </button>
          <button class="button_glitch" type="button" onClick={this.zavelstein}>
            Zavelstein &nbsp; &nbsp; &nbsp; <GiCastle></GiCastle>
          </button>
        </nav>
        <p class="kudos">
          Skybox Assets from<a href="https://hdrihaven.com/">HDRI Haven</a>
        </p>
      </div>
    );
  }
}
export default Shape;
